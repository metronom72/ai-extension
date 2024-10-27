import uvicorn
from fastapi import FastAPI
from app.api.routers import api_router
from app.core.config import settings
from app.core.logging import setup_logging

# Initialize logging
setup_logging()

# Initialize FastAPI app
app = FastAPI(
    title="FastAPI LangChain App",
    description="API service integrating FastAPI with LangChain for natural language processing tasks.",
    version="1.0.0",
)

# Middleware for CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router)

# Startup event
@app.on_event("startup")
async def startup_event():
    print("Starting up...")
    # Initialize any resources like database connections here, if needed

# Shutdown event
@app.on_event("shutdown")
async def shutdown_event():
    print("Shutting down...")
    # Clean up resources like database connections here, if needed

# Run the application
if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=settings.PORT, reload=True)
