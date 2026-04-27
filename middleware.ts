import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from '@/lib/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-jwt-12345';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  if (!token) {
    if (!isAuthPage) {
      const url = new URL('/login', request.url);
      url.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  try {
    await verifyJWT(token, JWT_SECRET);
    if (isAuthPage) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  } catch (error) {
    if (!isAuthPage) {
      const url = new URL('/login', request.url);
      url.searchParams.set('from', request.nextUrl.pathname);
      const response = NextResponse.redirect(url);
      response.cookies.delete('auth_token');
      return response;
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
