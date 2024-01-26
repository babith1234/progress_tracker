// getDataFromToken.ts
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export const getDataFromToken = (request?: NextRequest) => {
  try {
    let token = '';

    if (request) {
      token = request.cookies.get('token')?.value || '';
    } else {
      // If running on the client side, use client-side logic to get the token
      // For example, if you stored the token in localStorage
      token = localStorage.getItem('token') || '';
    }

    if (!token) {
      console.log('No token found.');
      return '';
    }

    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);
    return decodedToken.id;
  } catch (error: any) {
    console.error('Error decoding token:', error.message);
    return '';
  }
};
