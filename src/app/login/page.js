"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [isAdmin, setAdmin] = useState(false);
  const [email_id, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email_id: email_id,
      password: password,
    };

    console.log(newUser);

    try {
      if (isAdmin === false) {
        const response = await axios.post("/api/users/login/student", newUser);
        if (response.data.success === true) {
          toast("CHECK YOUR EMAIL!", {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#22C55E",
              color: "#fff",
            },
          });
        }

        if (response.data.success === false) {
          toast.error("INVALID CREDENTIALS",{
            style: {
              borderRadius: "10px",
              background: "#EF4444",
              color: "#fff",
            },
          });
        }
      }
      if (isAdmin === true) {
        const response = await axios.post("/api/users/login/admin", newUser);
        if (response.data.success === true) {
          toast.success("LOGGED IN SUCCESSFULLY");
        } else {
          toast.error("INVALID CREDENTIALS");
        }
      }
    } catch (error) {
      console.log("Error sending the request");
      toast("COULDN'T LOGIN");
    }
  };

  const adminClick = () => {
    setAdmin(true);
  };

  const studentClick = () => {
    setAdmin(false);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-white h-screen">
        <form className="w-full m-5 sm:w-96 p-6 rounded-xl shadow-black shadow-lg mb-20">
          <div className="flex justify-between">
            <button
              type="button"
              className="p-2 rounded-xl bg-red-500 font-bold"
              onClick={adminClick}
            >
              ADMIN{" "}
            </button>
            <button
              type="button"
              className="p-2 rounded-xl bg-green-500 font-bold"
              onClick={studentClick}
            >
              STUDENT
            </button>
          </div>

          <h2 className="text-black text-center font-bold">
            {isAdmin ? "ADMIN LOGIN" : "STUDENT LOGIN"}
          </h2>

          <div className="mb-3">
            <label className="font-monospace font-bold mb-2 flex text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-md bg-white border-gray-400 p-3 text-black"
              name="email_id"
              value={email_id}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className=" mb-2 font-monospace font-bold flex  text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-md bg-white border-gray-400 p-3  text-black"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="block bg-green-500 text-crimson  hover:bg-red-500 w-full py-2 px rounded"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
