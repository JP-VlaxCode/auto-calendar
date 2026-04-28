import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (email === process.env.AUTH_EMAIL && password === process.env.AUTH_PASSWORD) {
    // Simple session simulation since 'jose' is missing/unavailable
    const response = NextResponse.json({ success: true });
    response.cookies.set('session', 'authenticated', { httpOnly: true, secure: true, sameSite: 'strict', path: '/' });
    return response;
  }
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}