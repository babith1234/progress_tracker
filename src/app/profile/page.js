// /pages/profile.js

"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/users/profile');
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user details', error);

        // Handle authentication error and redirect to login page
        if (error.response && error.response.status === 401) {
          router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Error loading user data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="mb-2">Email: {user.email_id}</p>
          <p className="mb-2">Section: {user.section}</p>
          <p className="mb-2">Class: {user.class}</p>
        </div>
      </div>
    </div>
  );
}
