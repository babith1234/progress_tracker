import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function POST(NextRequest) {
  try {
    console.log("hello");
    const reqBody = await NextRequest.json();
    const { token } = reqBody;

    console.log(token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    console.log(user);

    if (!user) {
      return NextResponse.json({
        status: 501,
        message: "Invalid token",
        success: false,
      });
    }

    await User.updateOne(
      { _id: user._id },
      { $unset: { verifyToken: "", verifyTokenExpiry: "" } }
    );

    return NextResponse.json({
      status: 201,
      message: "Email verified successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 401,
      message: error.message,
      success: false,
    });
  }
}
