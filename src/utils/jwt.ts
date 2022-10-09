import jwt, { Secret } from "jsonwebtoken";

import { User } from "../types/user";
import { config } from "../config";

export function generateAccessToken(user: User) {
    return jwt.sign({ id: user.id }, config.jwt_secret as Secret, { expiresIn: "5m" });
}
