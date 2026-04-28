"use client";
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="font-bold text-xl">Auto Calendar</Link>
      {isAuthenticated ? <button onClick={logout} className="text-sm font-medium">Logout</button> : <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</Link>}
    </nav>
  );
}