import express from "express";

const app = express();

app.listen(4444, () => {
    console.log("Server is successfully running on port 4444");
})