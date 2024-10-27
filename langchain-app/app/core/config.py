import os

from pydantic import BaseSettings, Field
from typing import List

class Settings(BaseSettings):
    APP_NAME: str = "FastAPI LangChain App"
    VERSION: str = "1.0.0"

    HOST: str = "0.0.0.0"
    PORT: int = 8000

    ALLOWED_ORIGINS: List[str] = Field(default=["*"], env="ALLOWED_ORIGINS")

    DATABASE_URL: str = Field(..., env="DATABASE_URL")

    LANGCHAIN_API_KEY: str = Field(..., env="LANGCHAIN_API_KEY")
    LANGCHAIN_MODEL_NAME: str = "gpt-3.5-turbo"

    NVIDIA_API_KEY: str = Field(..., env="NVIDIA_API_KEY")

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

# Instantiate settings
settings = Settings()
