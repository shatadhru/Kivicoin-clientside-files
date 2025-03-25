import React, { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// Create Auth Context
const AuthContext = createContext();

// Hook to use Auth
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Facebook Login
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // GitHub Login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, googleLogin, facebookLogin, githubLogin, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
