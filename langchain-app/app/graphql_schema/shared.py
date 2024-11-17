import enum
from typing import List, Optional

import strawberry
from strawberry.relay import Connection, Node


@strawberry.enum
class AdapterEnum(enum.Enum):
    OLLAMA = "ollama"
    NVIDIA = "nvidia"


@strawberry.input
class PromptInput:
    prompt: str
    model: str
    adapter: AdapterEnum
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
    initial_content: str


@strawberry.type
class Model:
    model: str
    adapter: AdapterEnum


@strawberry.type
class MessageConnection(Connection[Message]):
    nodes: List[Message]
