'use client'; // This component needs client-side interactivity

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For redirection after login
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../lib/firebase'; // Adjust path if firebase.ts is elsewhere

export default function PortalLoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true); // Toggle between Login and Signup
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Initialize useRouter for navigation

  const auth = getAuth(app); // Get the Firebase Auth instance

  // Function to handle user login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state

    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
      // Redirect to the protected dashboard page on successful login
      router.push('/portal/dashboard');
    } catch (err: any) {
      // Handle different authentication errors
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError(err.message || 'An unexpected error occurred during login.');
      }
      console.error('Login error:', err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to handle user signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state

    try {
      // Attempt to create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully!');
      // Redirect to the protected dashboard page on successful signup
      router.push('/portal/dashboard');
    } catch (err: any) {
      // Handle different authentication errors during signup
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please try logging in or use a different email.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError(err.message || 'An unexpected error occurred during signup.');
      }
      console.error('Signup error:', err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLoginMode ? 'Client Login' : 'Client Signup'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <button
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="font-medium text-[#003366] hover:text-[#004488] focus:outline-none focus:underline"
            >
              {isLoginMode ? 'Create an account' : 'Login to your account'}
            </button>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={isLoginMode ? handleLogin : handleSignup}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#003366] focus:border-[#003366] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#003366] focus:border-[#003366] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#003366] hover:bg-[#004488] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (isLoginMode ? 'Sign in' : 'Sign up')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
