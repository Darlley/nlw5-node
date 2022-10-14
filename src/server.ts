import express from "express";

const app = express();

app.get("/", (request, response) => {
    response.send("Foi");
})

app.listen("3333", () => console.log("Roudou!"))