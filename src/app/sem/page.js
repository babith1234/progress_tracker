
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

export default function Sem() {
  const [sem, setSem] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams()

  const dept = searchParams.get('dept')

  console.log(dept)

  const handleButtonClick = (value) => {
    setSem(value);
    router.push(`/table?sem=${value}&dept=${dept}`);
 
  }

  return (
    <>
      <div className="flex gap-10 justify-center items-center h-screen flex-wrap bg-white">
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester1")}
        >
          SEMESTER 1
        </button>
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester2")}
        >
          SEMESTER 2
        </button>
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester3")}
        >
          SEMESTER 3
        </button>
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester4")}
        >
          SEMESTER 4
        </button>
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester5")}
        >
          SEMESTER 5
        </button>
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester6")}
        >
          SEMESTER 6
        </button>
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester7")}
        >
          SEMESTER 7
        </button>
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
          onClick={() => handleButtonClick("semester8")}
        >
          SEMESTER 8
        </button>
      </div>
    </>
  );
}

