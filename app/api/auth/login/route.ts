import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (email === 'admin@test.com' && password === 'Admin123!') {
      return NextResponse.json({ token: 'fakejwttokenadmin' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Email o contraseña incorrectos' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Error de conexión. Intenta nuevamente.' }, { status: 500 });
  }
}