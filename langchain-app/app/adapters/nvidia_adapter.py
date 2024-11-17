import json
import os
from typing import List

import httpx
from colorama import Fore
from httpx import HTTPStatusError, RequestError

from app.core.config import settings
from app.core.errors.model_not_found_error import ModelNotActiveError
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
                "active": True,
                "api_type": "conversational",
                "website": "https://docs.api.nvidia.com/nim/reference/01-ai-yi-large",
                "license": ["https://platform.01.ai/termsPage.html"],

                "temperature": 0.2,
                "top_p": 0.7,
                "frequency_penalty": 0,
                "presence_penalty": 0,
                "max_tokens": 1024,
            },

            "abacusai/dracarys-llama-3.1-70b-instruct": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "conversational",
                "website": "https://docs.api.nvidia.com/nim/reference/abacusai-dracarys-llama-3_1-70b-instruct",
                "license": ["https://www.llama.com/llama3/license/"],

                "max_tokens": 1024,
                "stream": False,
                "temperature": 0.5,
                "top_p": 1,
                "stop": None,
                "frequency_penalty": 0,
                "presence_penalty": 0,
            },

            # doesn't work stable enough
            "ai21labs/jamba-1.5-large-instruct": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "conversational",
                "website": "https://docs.api.nvidia.com/nim/reference/ai21labs-jamba-1-5-large-instruct",
                "license": [
                    "https://assets.ngc.nvidia.com/products/api-catalog/legal/Jamba_Open_Model_License_Agreement.pdf"],

                "temperature": 0.2,
                "top_p": 0.7,
                "max_tokens": 1024,
                "seed": 42,
            },

            # doesn't work stable enough
            "ai21labs/jamba-1.5-mini-instruct": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "conversational",
                "website": "https://docs.api.nvidia.com/nim/reference/ai21labs-jamba-1-5-mini-instruct",
                "license": [
                    "https://assets.ngc.nvidia.com/products/api-catalog/legal/Jamba_Open_Model_License_Agreement.pdf"],

                "temperature": 0.2,
                "top_p": 0.7,
                "max_tokens": 1024,
                "seed": 42,
            },

            "aisingapore/sea-lion-7b-instruct": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "general_purpose",
                "website": "https://docs.api.nvidia.com/nim/reference/aisingapore-sea-lion-7b-instruct",
                "license": ["https://docs.nvidia.com/ai-foundation-models-community-license.pdf",
                            "https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf",
                            "https://opensource.org/license/MIT"],

                "max_tokens": 1024,
                "temperature": 0.5,
                "top_p": 1,
                "stop": None,
                "frequency_penalty": 0,
                "presence_penalty": 0,
                "seed": 0,
            },

            "baichuan-inc/baichuan2-13b-chat": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "general_purpose",
                "website": "https://docs.api.nvidia.com/nim/reference/baichuan-inc-baichuan2-13b-chat",
                "license": ["https://github.com/baichuan-inc/Baichuan2/blob/main/LICENSE",
                            "https://huggingface.co/baichuan-inc/Baichuan2-7B-Base/resolve/main/Baichuan%202%E6%A8%A1%E5%9E%8B%E7%A4%BE%E5%8C%BA%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE.pdf"],

                "max_tokens": 1024,
                "temperature": 0.5,
                "top_p": 1,
                "stop": None,
                "frequency_penalty": 0,
                "presence_penalty": 0,
            },

            "bigcode/starcoder2-7b": {
                "url": f"{self.base_url}/completions",

                "production": False,
                "active": True,
                "api_type": None,
                "website": "https://docs.api.nvidia.com/nim/reference/bigcode-starcoder2-7b",
                "license": ["https://huggingface.co/spaces/bigcode/bigcode-model-license-agreement"],

                "max_tokens": 1024,
                "temperature": 0.5,
                "top_p": 1,
                "stop": None,
                "frequency_penalty": 0,
                "presence_penalty": 0,
            },

            "bigcode/starcoder2-15b": {
                "url": f"{self.base_url}/completions",

                "production": False,
                "active": True,
                "api_type": None,
                "website": "https://docs.api.nvidia.com/nim/reference/bigcode-starcoder2-15b",
                "license": ["https://huggingface.co/spaces/bigcode/bigcode-model-license-agreement"],

                "max_tokens": 1024,
                "temperature": 0.5,
                "top_p": 1,
                "stop": None,
                "frequency_penalty": 0,
                "presence_penalty": 0,
            },

            "databricks/dbrx-instruct": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "general_purpose",
                "website": "https://docs.api.nvidia.com/nim/reference/databricks-dbrx-instruct",
                "license": [
                    "https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf",
                    "https://docs.nvidia.com/ai-foundation-models-community-license.pdf",
                    "https://www.databricks.com/legal/open-model-license"
                ],

                "max_tokens": 1024,
                "temperature": 0.5,
                "top_p": 1,
                "stop": None,
                "frequency_penalty": 0,
                "presence_penalty": 0,
            },

            "deepseek-ai/deepseek-coder-6.7b-instruct": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "conversational",
                "website": "https://docs.api.nvidia.com/nim/reference/deepseek-ai-deepseek-coder-6_7b-instruct",
                "license": ["https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct/blob/main/LICENSE"],
            },

            "google/gemma-2b": {
                "url": f"{self.base_url}/chat/completions",

                "production": False,
                "active": True,
                "api_type": "conversational",
                "website": "https://docs.api.nvidia.com/nim/reference/google-gemma-2b",
                "license": ["https://docs.api.nvidia.com/nim/reference/google-gemma-2b"],

                "max_tokens": 1024,
                "temperature": 0.5,
                "top_p": 1,
                "stop": None,
                "frequency_penalty": 0,
                "presence_penalty": 0,
            },

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
        extract_fields = ["max_tokens", "presence_penalty", "frequency_penalty", "top_p", "temperature", "seed", "stop"]

        model_data = self.model_dict().get(model, {})
        return {key: model_data[key] for key in extract_fields if key in model_data}

    def get_payload(self, messages: List[Message],
                    model: str, stream: bool,
                    response_format: str = None) -> dict:
        payload = {
            "model": model,
            "stream": stream,
            **self.get_filtered_model_data(model)
        }

        model_dict = self.model_dict()[model]

        if model_dict["api_type"] == 'general_purpose':
            payload["messages"] = " ".join([message["content"] for message in messages])
        elif model_dict["api_type"] == "conversational":
            payload["messages"] = messages
        else:
            payload["prompt"] = " ".join([message["content"] for message in messages])
 
        if response_format:
            payload["response_format"] = response_format
        return payload

    async def models(self) -> List[str]:
        return list(self.model_dict().keys())

    async def generate_response(self, model: str, messages: List[Message],
                                stream: bool = False,
                                response_format: str = None) -> HTTPStatusError | RequestError | dict:
        model_dict = self.model_dict()[model]
        print(f"model object is {json.dumps(model_dict, indent=2)}")

        if not model_dict["active"]:
            raise ModelNotActiveError(model_dict)

        endpoint = model_dict["url"]
        async with httpx.AsyncClient() as client:
            try:
                payload = self.get_payload(messages=messages, model=model,
                                           stream=stream, response_format=response_format)
                print(f"generate response for payload {json.dumps(payload, indent=2)}")

                additional_headers = {"authorization": f"Bearer {settings.NVIDIA_API_KEY}"}
                print(f"with additional headers {json.dumps(additional_headers, indent=2)}")
                print(f"requesting endpoint {endpoint}")

                response = await client.post(
                    endpoint,
                    json=payload,
                    headers=additional_headers,
                    timeout=httpx.Timeout(120.0)
                )
                response.raise_for_status()
                return response.json()
            except httpx.HTTPStatusError as e:
                print(f"{Fore.RED}HTTP error occurred: {e.response.status_code} - {e.response.text}")
                return e
            except httpx.TimeoutException as e:
                print(f"{Fore.RED}HTTP Timeout Exception for model: {model}")
                return e
            except httpx.RequestError as e:
                print(f"{Fore.RED}Request error occurred: {e}")
                return e
