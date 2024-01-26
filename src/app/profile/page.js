"use client"

// Import necessary dependencies
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Profile() {
  // State variables for user data and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Router instance
  const router = useRouter();

  // Effect to fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch user data from the API endpoint
        const response = await axios.get('/api/users/profile');
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user details', error);

        // Handle authentication error and redirect to login page
        if (error.response && error.response.status === 401) {
          router.push('/login');
        }
      } finally {
        // Set loading to false once data is fetched or an error occurs
        setLoading(false);
      }
    };

    // Invoke the fetchUser function
    fetchUser();
  }, [router]);

  // If data is still loading, display a loading message
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  // If user data is not available, display an error message
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Error loading user data</p>
      </div>
    );
  }

  // Render the user profile once data is available
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* College Name Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        Sahyadri College of Engineering and Management
      </h1>

      {/* Profile Card */}
      <div className="max-w-md  w-full p-6 bg-white rounded-md shadow-md lg:flex lg:justify-between lg:max-w-screen-lg">
        <div className="mb-4 lg:max-w-fit">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmYqV169i0EnpkQExX1BF05a6SIZRQclxeA&usqp=CAU"
            alt="Profile"
            width={150}
            height={150}
            layout="responsive" // Set layout to responsive
            className="w-full h-auto rounded-full"
          />
        </div>
        <div >
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome, {user.name}!</h1>
        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <p className="mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb-2">
            <strong>Section:</strong> {user.section}
          </p>
          <p className="mb-2">
            <strong>Class:</strong> {user.class}
          </p>
          <p className="mb-2">
            <strong>USN:</strong> {user.usn}
          </p>
          <p className="mb-2">
            <strong>Department:</strong> {user.dept}
          </p>
        </div>
        </div>
        <div className="hidden lg:flex">
        <div className="mb-4 lg:max-w-fit">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyWGyPGR2My1uvouiyCCVeGhYOsxdz4D2-ALdfvPf0A&s"
            alt="Profile"
            width={150}
            height={150}
            layout="responsive" // Set layout to responsive
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
      </div>
      <div className="hidden mt-2 w-full p-3 lg:flex lg:max-w-screen-lg  bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">College Information</h1>
      </div>
      <div className="hidden  w-full p-3 lg:flex lg:max-w-screen-lg  bg-white rounded-md shadow-md">
      <p className="mb-2">
        Sahyadri College of Engineering and Management is dedicated to providing quality education
        in various engineering disciplines.
      </p>
      <p className="mb-2">
        For any inquiries, you can contact the college administration at info@sahyadri.edu.in.
      </p>
    </div>
    </div>
  );
}
