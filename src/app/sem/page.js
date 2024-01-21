"use client";
import Link from "next/link";

export default function Sem() {
  return (
    <>
      <div className="flex gap-10 justify-center items-center h-screen flex-wrap bg-white">
        <Link href="/table">
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
        >
           
          SEMESTER 1
        </button>
        </Link>
        <Link href="/table">
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
        >
          SEMESTER 2
        </button>
        </Link>
        <Link href="/table">
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
        >
          SEMESTER 3
        </button>
        </Link>
        <Link href="/table">
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
        >
          SEMESTER 4
        </button>
        </Link>
        <Link href="/table">
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
        >
          SEMESTER 5
        </button>
        </Link>
        <Link href="/table">
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
        >
          SEMESTER 6
        </button>
        </Link>
        <Link href="/table">
        <button
          type="submit"
          className="bg-red-500 px-6 py-4 md:px-20 rounded-xl"
        >
          SEMESTER 7
        </button>
        </Link>
        <Link href="/table">
        <button
          type="submit"
          className="bg-green-500 px-6 py-4 md:px-20 rounded-xl"
        >
          SEMESTER 8
        </button>
        </Link>
      </div>
    </>
  );
}
