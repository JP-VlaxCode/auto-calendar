import { NextResponse } from 'next/server';
import { signJWT } from '@/lib/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-jwt-12345';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (email === 'admin@test.com' && password === 'Admin123!') {
      const token = await signJWT({ email, role: 'admin' }, JWT_SECRET);
      
      const response = NextResponse.json({ success: true, user: { email } }, { status: 200 });
      response.cookies.set({
        name: 'auth_token',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 // 1 day
      });
      
      return response;
    }

    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Connection error. Try again.' }, { status: 500 });
  }
}
