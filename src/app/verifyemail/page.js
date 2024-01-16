"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });

      if (response.data.success === true) {
        console.log(response.data.success);
        setVerified(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <>
      <div className="flex flex-col justify-center items-center py-2 min-h-screen bg-white">
        {/* <h1 className="text-4xl">VERIFY EMAIL</h1> */}

        {/* {token ? (
          <h2 className="p-2 bg-orange-500">{token}</h2>
        ) : (
          <h2 className="p-2 bg-orange-500">NO TOKEN</h2>
        )} */}

        {verified ? (
          <>
            <Image
              src="/tick.png" 
              alt="Description of the image"
              width={300} 
              height={200} 
            />

            <h1 className="text-2xl text-black text-center font-bold">
              STUDENT VERIFIED SUCCESSFULLY
            </h1>
            <Link href="/profile" className="p-2 mt-5 bg-red-500 rounded-xl">
              CONTINUE TO THE PORTAL
            </Link>
          </>
        ) : (
          <>
             <Image
              src="/error.png" 
              alt="Description of the image"
              width={250} 
              height={200} 
            />
            <h2 className="text-2xl text-black text-center font-bold">
              {" "}
              STUDENT VERIFICATION UNSUCCESSFUL
            </h2>
            <Link href="/login" className="p-2 mt-5 bg-red-500 rounded-xl">
              TRY AGAIN
            </Link>
          </>
        )}
      </div>
    </>
  );
}
