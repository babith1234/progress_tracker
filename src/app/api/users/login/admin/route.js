import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import jwt from "jsonwebtoken";
import Admin from "@/models/adminModal";
import dotenv from "dotenv";
dotenv.config();

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    console.log(reqBody)

    const { email_id, password } = reqBody;

    if (!email_id || !password) {
      return NextResponse.json({
        message: "No data provided",
        status: 401,
        success: false,
      });
    }

    const user = await Admin.findOne({ email_id });

    if (!user) {
      return NextResponse.json({
        message: "Email not found",
        status: 401,
        success: false,
      });
    }

    const userPassword = await user.password

    if(userPassword!=password){
        return NextResponse.json({
          message:"password mismatch",
          status:401,
          success:false
        })
    }
    
    const Payload = {
      id: user._id,
    };

    const accessToken = jwt.sign(Payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successfull",
      success: true,
    });

    response.cookies.set("token", accessToken, { httpOnly: true });

    return response;
    
  } catch (error) {
    return NextResponse.json({
      status: 501,
      message: error.message,
      success: false,
    });
  }
}
