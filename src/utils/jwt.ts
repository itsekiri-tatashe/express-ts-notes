import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.SECRET_KEY!;

export const signToken = (payload: object) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "4h" });

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);
