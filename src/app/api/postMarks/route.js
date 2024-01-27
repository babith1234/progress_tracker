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

    const { sem, marks } = reqBody;

    console.log(reqBody);

    const id = await getDataFromToken(NextRequest);

    let semData;

    switch (sem) {
      case "semester1":
        const userData = await Sem1.findOne({ user: id });
        if (!userData) {
          semData = await Sem1.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem1.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }
        break;
      case "semester2":
        const userData1 = await Sem2.findOne({ user: id });
        if (!userData1) {
          semData = await Sem2.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem2.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }

        break;
      case "semester3":
        const userData2 = await Sem3.findOne({ user: id });
        if (!userData2) {
          semData = await Sem3.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem3.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }
        break;
      case "semester4":
        const userData3 = await Sem4.findOne({ user: id });
        if (!userData3) {
          semData = await Sem4.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem4.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }
        break;
      case "semester5":
        const userData4 = await Sem5.findOne({ user: id });
        if (!userData4) {
          semData = await Sem5.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem5.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }
        break;
      case "semester6":
        const userData5 = await Sem6.findOne({ user: id });
        if (!userData5) {
          semData = await Sem6.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem6.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }
        break;
      case "semester7":
        const userData6 = await Sem7.findOne({ user: id });
        if (!userData6) {
          semData = await Sem7.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem7.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }
        break;
      case "semester8":
        const userData7 = await Sem8.findOne({ user: id });
        if (!userData7) {
          semData = await Sem8.create({
            ...marks,
            user: id,
          });
        } else {
          await Sem8.updateOne(
            { user: id },
            {
              ...marks,
            }
          );
        }
        break;
      default:
        semData = null;
        break;
    }

    console.log(semData);

    if (!sem && !marks) {
      return NextResponse.json({
        message: "No data received",
        status: 401,
        success: false,
      });
    }

    return NextResponse.json({
      message: "data created",
      status: 201,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: 501,
      success: false,
    });
  }
}
