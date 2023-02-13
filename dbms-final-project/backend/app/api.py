from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .database import get_by_query, get_by_modify, get_by_manual_query
import asyncio
'''
Routers for FastAPI
'''

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

MODTYPES = ['DELETE', 'INSERT', 'UPDATE']

@app.get("/todo", tags=["todos"])
async def get_todos() -> dict:
    return { "data": datarows }


@app.post("/todo", tags=["todos"])
async def post_todos(request: dict) -> dict:
    btn_type = request["btn_type"]
    loop = asyncio.get_event_loop()
    if btn_type in MODTYPES:
        response = await get_by_modify(loop=loop,
                                    btn_type=btn_type)
    else:
        response = await get_by_query(loop=loop,
                                    btn_type=btn_type)

    if response:
        return {"data": response}
    raise HTTPException(400, "Something went wrong")


@app.post("/todo_q", tags=["todos"])
async def post_todos(request: dict) -> dict:
    query = request["manual_query"]
    loop = asyncio.get_event_loop()
    query_type = query.split()[0].upper()
    print(query_type)
    try:
        if query_type in MODTYPES:
            response = await get_by_modify(loop=loop,
                                           btn_type=query_type)
        else:
            response = await get_by_manual_query(loop=loop,
                                            query=query)
    except:
        raise HTTPException(400, "Something went wrong")

    return {"data": response}
