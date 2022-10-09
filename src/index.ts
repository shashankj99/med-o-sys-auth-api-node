import express, { Application } from "express";
import { config } from "./config";
import errorHandler from "./middlewares/error-handler";

const app: Application = express();

const PORT: number|string = config.port || 5000;

app.use(errorHandler);

app.listen(PORT, (): void => console.log("Server is running"));
