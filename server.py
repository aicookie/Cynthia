from robyn import Robyn
import robyn

app = Robyn(__file__)


@app.get("/")
async def index(requests):
    return "Hello, world!"

app.start('127.0.0.1', port=4000)
