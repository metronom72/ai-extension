import logging
from logging.handlers import RotatingFileHandler
from pathlib import Path

LOG_DIR = Path("logs")
LOG_DIR.mkdir(exist_ok=True)
LOG_FILE = LOG_DIR / "app.log"

def setup_logging():
    log_format = "[%(asctime)s] [%(levelname)s] %(message)s"

    logging.basicConfig(
        level=logging.INFO,
        format=log_format,
        handlers=[
            logging.StreamHandler(),  # Console output
            RotatingFileHandler(
                LOG_FILE, maxBytes=5 * 1024 * 1024, backupCount=3
            ),
        ],
    )

    logging.getLogger("uvicorn.error").setLevel(logging.WARNING)
    logging.getLogger("uvicorn.access").setLevel(logging.WARNING)

    logging.info("Logging setup complete.")
