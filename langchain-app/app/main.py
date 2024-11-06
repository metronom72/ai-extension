from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from app.core.config import settings
from app.core.logging import setup_logging
from app.graphql_schema.schema import schema

setup_logging()


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting up...")
    print(f"Server running on {settings.HOST}:{settings.PORT}")
    yield
    print("Shutting down...")


app = FastAPI(
    title="FastAPI LangChain App",
    description="API service integrating FastAPI with LangChain for natural language processing tasks.",
    version="1.0.0",
    lifespan=lifespan
)

graphql_app = GraphQLRouter(schema)

app.include_router(graphql_app, prefix="/graphql_schema")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app,
                host=settings.HOST,
                port=settings.PORT)
