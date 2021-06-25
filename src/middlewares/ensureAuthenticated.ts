import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({ message: "Token missing" });
  }

  const [,token] = authToken.split(" ");

  try {
    const { sub } = verify(token ,"be4c6786eb2c13c1c2c7100d64eca860") as IPayload;

    request.user_id = sub;

    return next();
  }
  catch {
    return response.status(401).end();
  }
}