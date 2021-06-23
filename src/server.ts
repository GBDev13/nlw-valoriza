import express from 'express';

const app = express();

app.post("/test-post", (request, response) => {
  response.send("Rota post")
})

app.listen(3000, () => console.log("Server is running 🚀"));