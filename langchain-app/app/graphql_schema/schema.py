import enum
from typing import List, Dict, Optional

import strawberry
from strawberry.relay import Node, Connection

from app.adapters.nvidia_adapter import NvidiaAdapter
from app.adapters.ollama_adapter import OllamaAdapter
from app.services.messages_service import MessagesService

conversations: Dict[str, "Conversation"] = {}


@strawberry.enum
class AdapterEnum(enum.Enum):
    OLLAMA = "ollama"
    NVIDIA = "nvidia"


@strawberry.input
class QueryModel:
    prompt: str
    model: str = "llama2"
    format: Optional[str] = None
    role: Optional[str] = None


@strawberry.type
class Message(Node):
    id: strawberry.relay.NodeID
    role: str
    content: str


@strawberry.type
class Conversation(Node):
    id: strawberry.relay.NodeID
    messages: List[Message]
    model: str
    adapter: AdapterEnum


@strawberry.type
class Model:
    model: str
    adapter: AdapterEnum


@strawberry.type
class MessageConnection(Connection[Message]):
    nodes: List[Message]


def get_adapter_instance(adapter: AdapterEnum):
    if adapter == AdapterEnum.OLLAMA:
        return OllamaAdapter()
    elif adapter == AdapterEnum.NVIDIA:
        return NvidiaAdapter()
    else:
        raise ValueError(f"Adapter '{adapter}' not supported")


@strawberry.type
class Query:
    @strawberry.field
    async def models(self, adapter: Optional[AdapterEnum] = None) -> List[Model]:
        if adapter:
            adapter_instance = get_adapter_instance(adapter)
            return [Model(model=model, adapter=adapter) for model in await adapter_instance.models()]
        else:
            models_list = []
            for adapter in AdapterEnum:
                adapter_instance = get_adapter_instance(adapter)
                adapter_models = await adapter_instance.models()
                models_list.extend(Model(model=model, adapter=adapter) for model in adapter_models)
            return models_list

    @strawberry.field
    def conversation(self, id: strawberry.ID) -> Optional[Conversation]:
        return conversations.get(id)

    @strawberry.field
    def conversations(self) -> List[Conversation]:
        return list(conversations.values())


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def download_model(self, model_name: str) -> str:
        adapter = get_adapter_instance(AdapterEnum.OLLAMA)
        await adapter.pull_model(model_name)

        return f"Model {model_name} downloaded successfully"

    @strawberry.mutation
    async def start_conversation(self, conv_id: str, model: str, adapter: AdapterEnum,
                                 initial_context: str) -> Conversation:
        if conv_id in conversations:
            raise ValueError("Conversation ID already exists")
        conversation = Conversation(id=conv_id, messages=[],
                                    model=model, adapter=adapter)
        conversations[conv_id] = conversation

        await MessagesService().add_message(conversation=conversation,
                                            query=QueryModel(prompt=initial_context, role="web_page", model=model))
        return conversation

    @strawberry.mutation
    async def add_message(self, conv_id: str, query: QueryModel) -> Conversation:
        if conv_id not in conversations:
            raise ValueError("Conversation not found")

        conversation = conversations[conv_id]

        return await MessagesService().add_message(conversation=conversation, query=query)


schema = strawberry.Schema(query=Query, mutation=Mutation, types=[Conversation, Message])
