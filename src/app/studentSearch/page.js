"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchStudent() {
  const [usn, setUsn] = useState("");
  const [flag, setFlag] = useState(null);
  const [data, setData] = useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const response = await axios.post("/api/studentSearch", { usn });

    if (response.data.success === true) {
      setFlag(true);
      setData(response.data.data);
    } else {
      setFlag(false);
    }
  };

  const deptExport = (dept)=>{
    console.log(dept)
    router.push(`/sem?dept=${dept}`)
 
  }
  return (
    <>
      <div className=" h-screen bg-white flex flex-col justify-center items-center w-screen">
        <div className="flex items-center justify-center md: w-screen">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="  Search USN..."
            className="text-black w-3/6 h-14 rounded-full border border-black"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
          ></input>
          <button
            type="submit"
            className="bg-green-500 p-5 rounded-full md:px-10 ml-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {data && (
          <div className="mt-10 md:h-48 bg-slate-700 mx-auto flex flex-col items-center rounded-2xl justify-around md:p-20">
            <p>NAME:{data.name}</p>
            <p>USNN:{data.usn}</p>
            <p>EMAIL:{data.email}</p>
            <p>DEPT:{data.dept}</p>
            <p>CLASS:{data.class}</p>

            
            <button type="button" className="bg-green-500 p-5 rounded-full px-9"onClick={()=>deptExport(data.dept)}>MARKS</button>
            
          </div>
        )}
      </div>
    </>
  );
}
