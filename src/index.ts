import express, { Application } from "express";

const app: Application = express();

const PORT: number|string = process.env.PORT || 5000;

app.listen(PORT, (): void => {
    console.log("Server is running");
});
