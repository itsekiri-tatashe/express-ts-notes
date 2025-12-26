import { Request, Response, NextFunction } from "express";
import { db } from "../db/index";
import { usersTable } from "../db/user.schema";
import { eq } from "drizzle-orm";
import { comparePassword, hashPassword } from "../utils/hash";
import { signToken } from "../utils/jwt";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get Request body
    const payload = req.body;

    // Verify if email exists
    const [existingUser] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, payload["email"]))
      .limit(1);

    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered" });
    }

    // hash password
    payload["password"] = await hashPassword(payload["password"]);

    const [user] = await db.insert(usersTable).values(payload).returning();
    //   Return only vital info
    const { password, role, ...safeUser } = user;

    res
      .status(201)
      .json({ message: "User created successfully", data: safeUser });
  } catch (error) {
    return next(error);
  }
};

// Login User

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get Payload
    const payload = req.body;

    // Verify if email exists
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, payload["email"]))
      .limit(1);

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // hash password
    const matchPassword = await comparePassword(
      payload["password"],
      user.password
    );
    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Create JWT Token
    const token = signToken({ userId: user.id, role: user.role });

    res
      .status(200)
      .json({ message: "User signed in successfully", data: token });
  } catch (error) {
    return next(error);
  }
};

// Check if user exists
// if password or user does not exists Ivalid credential
// i fthey do exist send JWT code
