import os
from typing import List, TypedDict
import httpx

from app.core.types import Message


class OllamaAdapter:
    def __init__(self, base_url: str = None):
        self.base_url = base_url or os.getenv("OLLAMA_API_URL", "http://localhost:11434/api")

    async def pull_model(self, model_name: str) -> bool:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.base_url}/pull",
                json={"name": model_name}
            )
            response.raise_for_status()
            return True

    async def models(self) -> List[str]:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{self.base_url}/tags")
            response.raise_for_status()
            return response.json().get("models", [])

    async def generate_response(self, model: str, prompt: str,
                                stream: bool = False, response_format: str = "json") -> str:
        endpoint = f"{self.base_url}/generate"
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    endpoint,
                    json={
                        "model": model,
                        "prompt": prompt,
                        "stream": stream,
                        "format": response_format
                    }
                )
                response.raise_for_status()
                return response.json().get("response", "")
            except httpx.HTTPStatusError as e:
                print(f"HTTP error occurred: {e.response.status_code} - {e.response.text}")
                return ""
            except httpx.RequestError as e:
                print(f"Request error occurred: {e}")
                return ""

    async def generate_chat_response(self, model: str, messages: List[Message],
                                     stream: bool = False, response_format: str = "json") -> str:
        endpoint = f"{self.base_url}/chat/completions"
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    endpoint,
                    json={
                        "model": model,
                        "messages": messages,
                        "stream": stream,
                        "format": response_format
                    }
                )
                response.raise_for_status()
                return response.json().get("response", "")
            except httpx.HTTPStatusError as e:
                print(f"HTTP error occurred: {e.response.status_code} - {e.response.text}")
                return ""
            except httpx.RequestError as e:
                print(f"Request error occurred: {e}")
                return ""
