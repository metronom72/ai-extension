import enum
import uuid
from typing import List, Dict, Optional, TypedDict, Literal

import strawberry
from app.adapters.ollama_adapter import OllamaAdapter

from strawberry.relay import Node, Connection

conversations: Dict[str, "Conversation"] = {}


@strawberry.enum
class AdapterEnum(enum.Enum):
    OLLAMA = "ollama"
    NVIDIA = "nvidia"  # add more adapters as needed


@strawberry.input
class QueryModel:
    prompt: str
    model: str = "llama2"
    format: Optional[str] = None


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
class MessageConnection(Connection[Message]):
    nodes: List[Message]


def get_adapter_instance(adapter: AdapterEnum):
    if adapter == AdapterEnum.OLLAMA:
        return OllamaAdapter()
    elif adapter == AdapterEnum.NVIDIA:
        # Replace with actual NVIDIA adapter initialization
        return None
    else:
        raise ValueError(f"Adapter '{adapter}' not supported")


@strawberry.type
class Query:
    @strawberry.field
    async def list_models(self, adapter: AdapterEnum) -> List[str]:
        return await get_adapter_instance(adapter).models()

    @strawberry.field
    def conversation(self, id: strawberry.ID) -> Optional[Conversation]:
        return conversations.get(id)

    @strawberry.field
    def conversations(self) -> List[Conversation]:
        return list(conversations.values())

    @strawberry.field
    async def generate_text(self, query: QueryModel, adapter: AdapterEnum) -> str:
        return await get_adapter_instance(adapter).generate_response(model=query.model, prompt=query.prompt,
                                                                     stream=False, response_format=query.format)


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def download_model(self, model_name: str) -> str:
        adapter = get_adapter_instance(AdapterEnum.OLLAMA)
        await adapter.pull_model(model_name)

        return f"Model {model_name} downloaded successfully"

    @strawberry.mutation
    def start_conversation(self, conv_id: str, model: str, adapter: AdapterEnum) -> Conversation:
        if conv_id in conversations:
            raise ValueError("Conversation ID already exists")
        conversation = Conversation(id=conv_id, messages=[],
                                    model=model, adapter=adapter)
        conversations[conv_id] = conversation
        return conversation

    @strawberry.mutation
    async def add_message(self, conv_id: str, query: QueryModel) -> Conversation:
        if conv_id not in conversations:
            raise ValueError("Conversation not found")

        conversation = conversations[conv_id]
        conversation.messages.append(Message(role="user", content=query.prompt, id=uuid.uuid4()))

        adapter = get_adapter_instance(conversation.adapter)

        messages = [
            {"role": message.role, "content": message.content}
            for message in conversation.messages
        ]

        generated_text = await adapter.generate_chat_response(model=query.model, messages=messages,
                                                              stream=False, response_format=query.format)

        message = Message(role="assistant", content=generated_text, id=uuid.uuid4())

        conversation.messages.append(message)
        return conversation


schema = strawberry.Schema(query=Query, mutation=Mutation, types=[Conversation, Message])
