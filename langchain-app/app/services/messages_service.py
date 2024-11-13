import uuid

from app.graphql_schema.schema import QueryModel, Conversation, Message, get_adapter_instance


class MessagesService:
    async def add_message(self, conversation: Conversation, query: QueryModel):
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
