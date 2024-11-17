import uuid

from app.adapters.nvidia_adapter import NvidiaAdapter
from app.adapters.ollama_adapter import OllamaAdapter
from app.graphql_schema.schema import Conversation, PromptInput, AdapterEnum, Message


class MessagesService:
    @staticmethod
    def get_adapter_instance(adapter: AdapterEnum):
        if adapter == AdapterEnum.OLLAMA:
            return OllamaAdapter()
        elif adapter == AdapterEnum.NVIDIA:
            return NvidiaAdapter()
        else:
            raise ValueError(f"Adapter '{adapter}' not supported")

    @staticmethod
    async def add_message(conversation: Conversation, query: PromptInput):
        conversation.messages.append(Message(role=query.role, content=query.prompt, id=uuid.uuid4()))

        adapter = MessagesService.get_adapter_instance(conversation.adapter)

        messages = [
            {"role": message.role, "content": message.content}
            for message in conversation.messages
        ]

        generated_text = await adapter.generate_chat_response(model=query.model, messages=messages,
                                                              stream=False, response_format=query.format)

        message = Message(role="assistant", content=generated_text, id=uuid.uuid4())

        conversation.messages.append(message)

        return conversation
