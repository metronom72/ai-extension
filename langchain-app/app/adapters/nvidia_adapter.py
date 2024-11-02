import os
from typing import List
import httpx

from app.core import config
from app.core.config import settings
from app.core.types import Message


class NvidiaAdapter:
    def __init__(self, base_url: str = None):
        self.base_url = base_url or os.getenv("NVIDIA_API_URL", "https://integrate.api.nvidia.com/v1")

    async def pull_model(self, model_name: str) -> bool:
        raise NotImplementedError("This method wasn't implemented.")

    def model_dict(self) -> dict:
        return {
            "01-ai/yi-large": {
                "url": f"{self.base_url}/chat/completions",
                "production": False,
                "active": False,
                "website": "https://platform.01.ai/",
                "terms": "https://platform.01.ai/termsPage.html",
                "temperature": 0.2,
                "top_p": 0.7,
                "frequency_penalty": 0,
                "presence_penalty": 0,
                "max_tokens": 1024,
                "single_response": False,
                "chat_response": True,
            },
            "abacusai/dracarys-llama-3.1-70b-instruct": f"{self.base_url}/chat/completions",
            "ai21labs/jamba-1.5-large-instruct": f"{self.base_url}/chat/completions",
            "ai21labs/jamba-1.5-mini-instruct": f"{self.base_url}/chat/completions",
            "aisingapore/sea-lion-7b-instruct": f"{self.base_url}/chat/completions",
            "baichuan-inc/baichuan2-13b-chat": f"{self.base_url}/chat/completions",
            "bigcode/starcoder2-7b": f"{self.base_url}/chat/completions",
            "bigcode/starcoder2-15b": f"{self.base_url}/chat/completions",
            "databricks/dbrx-instruct": f"{self.base_url}/chat/completions",
            "deepseek-ai/deepseek-coder-6.7b-instruct": f"{self.base_url}/chat/completions",
            "google/gemma-2b": f"{self.base_url}/chat/completions",
            "google/gemma-7b": f"{self.base_url}/chat/completions",
            "google/gemma-2-2b-it": f"{self.base_url}/chat/completions",
            "google/gemma-2-9b-it": f"{self.base_url}/chat/completions",
            "google/gemma-2-27b-it": f"{self.base_url}/chat/completions",
            "google/codegemma-1.1-7b": f"{self.base_url}/chat/completions",
            "google/codegemma-7b": f"{self.base_url}/chat/completions",
            "google/recurrentgemma-2b": f"{self.base_url}/chat/completions",
            "google/shieldgemma-9b": f"{self.base_url}/chat/completions",
            "ibm/granite-3.0-3b-a800m-instruct": f"{self.base_url}/chat/completions",
            "ibm/granite-3.0-8b-instruct": f"{self.base_url}/chat/completions",
            "ibm/granite-34b-code-instruct": f"{self.base_url}/chat/completions",
            "ibm/granite-8b-code-instruct": f"{self.base_url}/chat/completions",
            "ibm/granite-guardian-3.0-8b": f"{self.base_url}/chat/completions",
            "institute-of-science-tokyo/llama-3.1-swallow-70b-instruct-v0.1": f"{self.base_url}/chat/completions",
            "institute-of-science-tokyo/llama-3.1-swallow-8b-instruct-v0.1": f"{self.base_url}/chat/completions",
            "mediatek/breeze-7b-instruct": f"{self.base_url}/chat/completions",
            "meta/codellama-70b": f"{self.base_url}/chat/completions",
            "meta/llama2-70b": f"{self.base_url}/chat/completions",
            "meta/llama3-8b-instruct": f"{self.base_url}/chat/completions",
            "meta/llama3-70b-instruct": f"{self.base_url}/chat/completions",
            "meta/llama-3.1-8b-instruct": f"{self.base_url}/chat/completions",
            "meta/llama-3.1-70b-instruct": f"{self.base_url}/chat/completions",
            "meta/llama-3.1-405b-instruct": f"{self.base_url}/chat/completions",
            "meta/llama-3.2-1b-instruct": f"{self.base_url}/chat/completions",
            "meta/llama-3.2-3b-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3-medium-128k-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3-medium-4k-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3-mini-128k-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3-mini-4k-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3-small-128k-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3-small-8k-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3.5-mini-instruct": f"{self.base_url}/chat/completions",
            "microsoft/phi-3.5-moe-instruct": f"{self.base_url}/chat/completions",
            "mistralai/codestral-22b-instruct-v0.1": f"{self.base_url}/chat/completions",
            "mistralai/mamba-codestral-7b-v0.1": f"{self.base_url}/chat/completions",
            "mistralai/mistral-large-2-instruct": f"{self.base_url}/chat/completions",
            "mistralai/mathstral-7b-v0.1": f"{self.base_url}/chat/completions",
            "mistralai/mistral-7b-instruct-v0.2": f"{self.base_url}/chat/completions",
            "mistralai/mistral-7b-instruct-v0.3": f"{self.base_url}/chat/completions",
            "mistralai/mixtral-8x7b-instruct-v0.1": f"{self.base_url}/chat/completions",
            "mistralai/mixtral-8x22b-instruct-v0.1": f"{self.base_url}/chat/completions",
            "mistralai/mistral-large": f"{self.base_url}/chat/completions",
            "nvidia/llama-3.1-nemotron-51b-instruct": f"{self.base_url}/chat/completions",
            "nvidia/llama-3.1-nemotron-70b-instruct": f"{self.base_url}/chat/completions",
            "nvidia/llama-3.1-nemotron-70b-reward": f"{self.base_url}/chat/completions",
            "nvidia/llama3-chatqa-1.5-70b": f"{self.base_url}/chat/completions",
            "nvidia/llama3-chatqa-1.5-8b": f"{self.base_url}/chat/completions",
            "nvidia/mistral-nemo-minitron-8b-base": f"{self.base_url}/completions",
            "nvidia/mistral-nemo-minitron-8b-8k-instruct": f"{self.base_url}/chat/completions",
            "nvidia/nemotron-4-340b-instruct": f"{self.base_url}/chat/completions",
            "nvidia/nemotron-4-340b-reward": f"{self.base_url}/chat/completions",
            "nvidia/nemotron-4-mini-hindi-4b-instruct": f"{self.base_url}/chat/completions",
            "nvidia/nemotron-mini-4b-instruct": f"{self.base_url}/chat/completions",
            "nvidia/usdcode-llama3-70b-instruct": f"{self.base_url}/chat/completions",
            "nvidia/usdsearch": f"{self.base_url}/nvidia/usdsearch",
            "nv-mistralai/mistral-nemo-12b-instruct": f"{self.base_url}/chat/completions",
            "qwen/qwen2-7b-instruct": f"{self.base_url}/chat/completions",
            "rakuten/rakutenai-7b-chat": f"{self.base_url}/chat/completions",
            "rakuten/rakutenai-7b-instruct": f"{self.base_url}/chat/completions",
            "seallms/seallm-7b-v2.5": f"{self.base_url}/chat/completions",
            "snowflake/arctic": f"{self.base_url}/chat/completions",
            "tokyotech-llm/llama-3-swallow-70b-instruct-v0.1": f"{self.base_url}/chat/completions",
            "thudm/chatglm3-6b": f"{self.base_url}/chat/completions",
            "upstage/solar-10.7b-instruct": f"{self.base_url}/chat/completions",
            "writer/palmyra-fin-70b-32k": f"{self.base_url}/chat/completions",
            "writer/palmyra-med-70b-32k": f"{self.base_url}/chat/completions",
            "writer/palmyra-med-70b": f"{self.base_url}/chat/completions",
            "yentinglin/llama-3-taiwan-70b-instruct": f"{self.base_url}/chat/completions",
            "zyphra/zamba2-7b-instruct": f"{self.base_url}/chat/completions",
        }

    def get_filtered_model_data(self, model: str) -> dict:
        extract_fields = ["max_tokens", "presence_penalty", "frequency_penalty", "top_p", "temperature"]

        model_data = self.model_dict().get(model, {})
        return {key: model_data[key] for key in extract_fields if key in model_data}

    def get_generate_payload(self, prompt: str | List[str],
                             model: str, stream: bool,
                             response_format: str = "json") -> dict:
        payload = {
            "model": model,
            "prompt": prompt,
            "stream": stream,
            **self.get_filtered_model_data(model)
        }
        if response_format:
            payload["response_format"] = response_format
        return payload

    def get_chat_payload(self, messages: List[Message],
                         model: str, stream: bool,
                         response_format: str = None) -> dict:
        payload = {
            "model": model,
            "messages": messages,
            "stream": stream,
            **self.get_filtered_model_data(model)
        }
        if response_format:
            payload["response_format"] = response_format
        return payload

    async def models(self) -> List[str]:
        return list(self.model_dict().keys())

    async def generate_response(self, model: str, prompt: str,
                                stream: bool = False, response_format: str = "json") -> dict:
        model_dict = self.model_dict()[model]
        if not model_dict["single_response"]:
            raise NotImplementedError("This method wasn't implemented.")

        endpoint = model_dict["url"]
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    endpoint,
                    json=self.get_generate_payload(prompt=prompt, model=model,
                                                   stream=stream, response_format=response_format),
                    headers={"authorization": f"Bearer {settings.NVIDIA_API_KEY}"},
                    timeout=httpx.Timeout(120.0)
                )
                response.raise_for_status()
                return response.json()
            except httpx.HTTPStatusError as e:
                print(f"HTTP error occurred: {e.response.status_code} - {e.response.text}")
                return {}
            except httpx.RequestError as e:
                print(f"Request error occurred: {e}")
                return {}

    async def generate_chat_response(self, model: str, messages: List[Message],
                                     stream: bool = False, response_format: str = None) -> dict:
        model_dict = self.model_dict()[model]
        if not model_dict["chat_response"]:
            raise NotImplementedError("This method wasn't implemented.")

        endpoint = model_dict["url"]
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    endpoint,
                    json=self.get_chat_payload(messages=messages, model=model,
                                               stream=stream, response_format=response_format),
                    headers={"authorization": f"Bearer {settings.NVIDIA_API_KEY}"},
                    timeout=httpx.Timeout(120.0)
                )
                response.raise_for_status()
                return response.json()
            except httpx.HTTPStatusError as e:
                print(f"HTTP error occurred: {e.response.status_code} - {e.response.text}")
                return {}
            except httpx.RequestError as e:
                print(f"Request error occurred: {e}")
                return {}
