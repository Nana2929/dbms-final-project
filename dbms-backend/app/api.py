from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

datarows = [
    {
        "id": "1",
        "item": "Read a book.",
        "ssn":"P76114511",
        "CourseTaking Count": 2
    },
    {
        "id": "2",
        "item": "Cycle around town.",
        "ssn":"P76114511",
        "CourseTaking Count": 4
    }
]


origins = [
    "http://localhost:3000",
    "localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/todo", tags=["todos"])
async def get_todos() -> dict:
    return { "data": datarows }

@app.post("/todo", tags=["todos"])
async def recv_command(command: dict) -> dict:
    cmd = command["command"]
    print(f'{cmd} button is pressed.' )
    return {
        "data": { f"Command {cmd} Received" }
    }
