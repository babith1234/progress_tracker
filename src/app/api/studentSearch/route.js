import { NextRequest, NextResponse } from "next/server";

import User from "@/models/userModel";

import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { usn } = reqBody;

    console.log(usn);

    if (!usn) {
      return NextResponse.json({
        status: 401,
        message: "No usn received",
        success: false,
      });
    }
    const user = await User.findOne({ usn: usn });

    if (!user) {
      return NextResponse.json({
        status: 401,
        message: "No student found",
        success: false,
      });
    }

    console.log(user);

    return NextResponse.json({
        status:201,
        message:"Student found successfully",
        success:true,
        data:user
    })

  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
      success: false,
      
    });
  }
}
