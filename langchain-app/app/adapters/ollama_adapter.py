import httpx


class OllamaAdapter:
    def __init__(self, base_url: str = "http://localhost:11434/api"):
        self.base_url = base_url

    async def pull_model(self, model_name: str) -> bool:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "http://localhost:11434/api/pull",
                json={"name": model_name}
            )
            response.raise_for_status()

            return True

    async def models(self):
        async with httpx.AsyncClient() as client:
            response = await client.get("http://localhost:11434/api/tags")
            response.raise_for_status()

            return response.json().get("models", [])

    async def generate_response(self, model: str,
                                prompt: str, stream: bool = False,
                                response_format: str = "json") -> str:
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
