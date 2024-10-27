import dotenv
from pydantic import Field
from typing import List

from pydantic_settings import BaseSettings

dotenv.load_dotenv()


class Settings(BaseSettings):
    APP_NAME: str = "FastAPI LangChain App"
    VERSION: str = "1.0.0"

    HOST: str = "0.0.0.0"
    PORT: int = 8000

    ALLOWED_ORIGINS: List[str] = Field(default_factory=lambda: ["*"])

    DATABASE_URL: str
    LANGCHAIN_API_KEY: str
    LANGCHAIN_MODEL_NAME: str = "gpt-3.5-turbo"
    NVIDIA_API_KEY: str

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
