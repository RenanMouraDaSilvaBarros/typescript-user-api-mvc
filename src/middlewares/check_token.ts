import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

function checkToken(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) return response.status(401).json({ message: "user unauthenticated" });

    const [bearer, token] = authToken.split(" ");

    if (bearer !== 'Bearer') response.status(401).json({ message: "user unauthenticated" });

    try {
        verify(token, process.env.JWT_PRIVATE_KEY!);

        return next();
    } catch (err) {
        response.status(403).json({ message: "unauthorized user." });
    }
}

export { checkToken }