// pages/index.js or pages/api/home.js (if you're using API routes)
"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/login"
    router.replace("/login"); 
  }, [router]);

  return null;
};

export default HomePage;
