from fastapi import FastAPI # type: ignore
import uvicorn # type: ignore


app = FastAPI()


@app.get("/")
def root():
    return {"msg": "Hello World!11!1!!!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000)