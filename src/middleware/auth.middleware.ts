import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (!header) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const token = header.split(" ")[1];
    const payload = verifyToken(token);

    console.log(payload);
    // req.user = {
    //   id: payload.id,
    //   role: payload.role,
    // };
    next();
  } catch {
    res.status(401).json({ message: "Access Denied" });
  }
}
