import { Suspense } from "react";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-100 dark:border-gray-800">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome back</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Please enter your details to sign in.</p>
        </div>
        <Suspense fallback={<div className="text-center text-sm text-gray-500">Loading form...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
