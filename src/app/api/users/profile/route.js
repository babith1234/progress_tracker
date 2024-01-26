// Import necessary modules and models
import { NextResponse } from 'next/server';
import { getDataFromToken } from '../../../../helper/getDataFromToken.ts'; // Provide the correct path
import User from '@/models/userModel';

export async function GET(request) {
  try {
    // Retrieve the user ID from the token using getDataFromToken
    const userId = getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({
        message: 'Unauthorized',
        status: 401,
        success: false,
      });
    }

    // Fetch user data based on the user ID
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({
        message: 'User not found',
        status: 404,
        success: false,
      });
    }

    // Send user details in the response
    return NextResponse.json({
      user,
      success: true,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      status: 500,
      message: 'Internal Server Error',
      success: false,
    });
  }
}
