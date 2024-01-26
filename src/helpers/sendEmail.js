import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/models/userModel";

export const Email = async ({ email, userId }) => {
 
  
  try {
    console.log(email);
    console.log(userId) 

    const salt = await bcryptjs.genSalt(10);
    
    const hashedToken =await bcryptjs.hash(userId.toString(), salt);
    

    console.log(hashedToken)

    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      },
      { new: true }
    );

    if (user) {
     

      console.log(user);
    } else {
      console.log("User not found");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "babithpoojari@gmail.com",
        pass: "msqg kicf ubxr zqqv",
      },
    });

    const mailOptions = {
      from: "babithpoojari@gmail.com",
      to: email,
      subject: "VERIFICATION OF THE USER",
      html: `
          <p>
            Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to verify your email
             or copy and paste the link in the browser.
            <br>${process.env.DOMAIN}/verifyemail?token=${hashedToken}
          </p>
        `,
    };

    const mailresponse = await transporter.sendMail(mailOptions);
    return mailresponse;
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error,
      success: false,
    });
  }
};
