// src/lib/firebase.ts
// Firebase SDK modules import
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Declare global variables provided by the Canvas environment.
// These are securely injected at runtime and are assumed to be available.
declare const __app_id: string;
declare const __firebase_config: string;
declare const __initial_auth_token: string | undefined;

// Safely get appId, firebaseConfig, and initialAuthToken from global scope.
// Provide fallback values for local development if these globals are not defined.
const appId: string = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig: object = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};

// Initialize Firebase App
const app: FirebaseApp = initializeApp(firebaseConfig, appId);

// Get Firebase services instances
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

// Sign in with custom token or anonymously on app initialization.
// This is crucial for authentication in the Canvas environment.
// It uses __initial_auth_token if available, otherwise signs in anonymously.
const initializeAuth = async () => {
  try {
    if (typeof __initial_auth_token !== 'undefined') {
      await signInWithCustomToken(auth, __initial_auth_token);
      console.log("Firebase Auth: Signed in with custom token.");
    } else {
      await signInAnonymously(auth);
      console.log("Firebase Auth: Signed in anonymously.");
    }
  } catch (error) {
    console.error("Firebase Auth initialization error:", error);
  }
};

initializeAuth(); // Call the async function to initialize authentication.

// Export the initialized auth and db instances for use across the application.
export { auth, db, app };
