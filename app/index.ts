import Server from "tinny-backend";


const app = new Server({})

app.servDir("./public/default/", "/")
app.servDir("./public/docs/", "/docs")

app.listen()