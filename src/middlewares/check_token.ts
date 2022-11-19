import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

function checkToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) return res.status(401).json({ message: "user unauthenticated" });

    const [, token] = authToken.split(" ");

    try {
        verify(token, process.env.JWT_PRIVATE_KEY!);

        return next();
    } catch (err) {
        res.status(403).json({ message: "unauthorized user." });
    }
}

export { checkToken }