from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_nvidia_ai_endpoints import ChatNVIDIA
from app.core.config import settings

system_template = "Translate the following into {language}:"
prompt_template = ChatPromptTemplate.from_messages([
    ('system', system_template),
    ('user', '{text}')
])

model = ChatNVIDIA(
    model="meta/llama3-70b-instruct",
    api_key=settings.NVIDIA_API_KEY
)

parser = StrOutputParser()

langchain_pipeline = prompt_template | model | parser
