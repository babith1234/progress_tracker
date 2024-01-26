import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getDataFromToken = async (req) => {
  try {
    const token = req.cookies.get("token").value;

    if (!token) {
      console.log("No token found");
      return;
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    return decodedToken.id;
  } catch (error) {
    console.log(error.message);
  }
};
