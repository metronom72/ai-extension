from typing import List, Dict, Optional

import strawberry

from app.graphql_schema.shared import AdapterEnum, Model, Conversation, PromptInput, Message
from app.services.messages_service import MessagesService

conversations: Dict[str, "Conversation"] = {}


@strawberry.type
class Query:
    @strawberry.field
    async def models(self, adapter: Optional[AdapterEnum] = None) -> List[Model]:
        if adapter:
            adapter_instance = MessagesService.get_adapter_instance(adapter)
            return [Model(model=model, adapter=adapter) for model in await adapter_instance.models()]
        else:
            models_list = []
            for adapter in AdapterEnum:
                adapter_instance = MessagesService.get_adapter_instance(adapter)
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
        adapter = MessagesService.get_adapter_instance(AdapterEnum.OLLAMA)
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
                                            query=PromptInput(prompt=initial_context, role="web_page",
                                                              model=model, adapter=adapter))
        return conversation

    @strawberry.mutation
    async def add_message(self, conv_id: str, query: PromptInput) -> Conversation:
        if conv_id not in conversations:
            raise ValueError("Conversation not found")

        conversation = conversations[conv_id]

        return await MessagesService().add_message(conversation=conversation, query=query)


schema = strawberry.Schema(query=Query, mutation=Mutation, types=[Conversation, Message, Model])
