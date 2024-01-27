import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import Sem1 from "@/models/sem1";
import Sem2 from "@/models/sem2";
import Sem3 from "@/models/sem3";
import Sem4 from "@/models/sem4";
import Sem5 from "@/models/sem5";
import Sem6 from "@/models/sem6";
import Sem7 from "@/models/sem7";
import Sem8 from "@/models/sem8";
import { getDataFromToken } from "@/helpers/getDatafromToken";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    console.log(reqBody);
    const { sem } = reqBody;

    console.log(sem);

    const id = await getDataFromToken(NextRequest);
    console.log(id);

    let semData;

    switch (sem) {
      case "semester1":
        semData = await Sem1.findOne({ user: id });
        break;
      case "semester2":
        semData = await Sem2.findOne({ user: id });
        break;
      case "semester3":
        semData = await Sem3.findOne({ user: id });
        break;
      case "semester4":
        semData = await Sem4.findOne({ user: id });
        break;
      case "semester5":
        semData = await Sem5.findOne({ user: id });
        break;
      case "semester6":
        semData = await Sem6.findOne({ user: id });
        break;
      case "semester7":
        semData = await Sem7.findOne({ user: id });
        break;
      case "semester8":
        semData = await Sem8.findOne({ user: id });
        break;
      default:
        semData = null;
        break;
    }
    if (!semData) {
      return NextResponse.json({
        message: "No data found",
        status: "401",
        success: false,
        data: semData,
      });
    }

    console.log(semData);

    return NextResponse.json({
      message: "success",
      status: 201,
      success: true,
      data: semData,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: 501,
      success: false,
    });
  }
}
