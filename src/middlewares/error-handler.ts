import { NextFunction, Response, Request } from "express";
import { CustomError } from "../errors/CustomError";

export default (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode)
            .json({ errors: err.serializeErrors() });
    }

    res.status(500)
        .send({ errors: [{ message: "Something went wrong" }] });
}