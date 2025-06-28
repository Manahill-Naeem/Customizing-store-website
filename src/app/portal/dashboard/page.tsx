'use client'; // This component needs client-side interactivity

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { app } from '../../../lib/firebase'; // Adjust path if firebase.ts is elsewhere

export default function PortalDashboardPage() {
  const router = useRouter();
  const auth = getAuth(app); // Get Firebase Auth instance
  const [user, setUser] = useState<User | null>(null); // State to hold authenticated user
  const [loading, setLoading] = useState<boolean>(true); // State for initial loading/auth check

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, set the user state
        setUser(currentUser);
        setLoading(false); // Auth check complete
      } else {
        // User is not signed in, redirect to login page
        console.log('No user signed in. Redirecting to portal login.');
        router.push('/portal');
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [auth, router]); // Dependencies array for useEffect

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully!');
      // Redirect to login page after logout
      router.push('/portal');
    } catch (error: any) { // Explicitly define error type as 'any' for general error handling
      console.error('Logout error:', error);
      // For a real app, use a custom modal instead of alert()
      alert(`Failed to log out: ${error.message || 'Unknown error'}`);
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading portal...</p>
      </div>
    );
  }

  // If no user (meaning redirected), this won't render.
  // If user exists, render the dashboard content.
  if (!user) {
    return null; // Should ideally be redirected by useEffect
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg text-center">
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Welcome to Client Portal, {user.email}!
        </h2>
        <p className="text-gray-600">This is your secure dashboard.</p>
        <button
          onClick={handleLogout}
          className="mt-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
