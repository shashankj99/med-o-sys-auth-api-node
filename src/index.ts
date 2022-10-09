import express, { Application } from "express";
import { config } from "./config";

const app: Application = express();

const PORT: number|string = config.port || 5000;

app.listen(PORT, (): void => console.log("Server is running"));
