import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.logging import setup_logging
from app.core.langchain_setup import langchain_pipeline
from langserve import add_routes
from contextlib import asynccontextmanager

setup_logging()


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting up...")
    yield
    print("Shutting down...")


app = FastAPI(
    title="FastAPI LangChain App",
    description="API service integrating FastAPI with LangChain for natural language processing tasks.",
    version="1.0.0",
    lifespan=lifespan  # Pass lifespan manager to FastAPI app
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

add_routes(
    app,
    langchain_pipeline,
    path="/chain",
)

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=settings.PORT, reload=True)
