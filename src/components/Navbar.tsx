"use client";

import Link from "next/link";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600">
              MyApp
            </Link>
          </div>
          <div className="flex items-center">
            <UserDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}
