"use client"
import toast from "react-hot-toast"
import { useEffect } from "react"

export default function Profile(){
    useEffect(()=>{
        console.log("hello")
        toast("LOGGED IN SUCCESFULLY", {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#22C55E",
              color: "#fff",
            },
          });
    },[])
    return(
        <>
            <h1>This is profile Page</h1>
        </>
    )
}