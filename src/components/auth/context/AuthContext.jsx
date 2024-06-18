import React from "react";
import { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  async function signup(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error(error);
      alert(error.message);
      throw error; // re-throw the error so it can be handled by the caller if needed
    }
  }
  function logIn(email, password) {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      alert(error.message);
      throw error; // re-throw the error so it can be handled by the caller if needed
    }
  }
  function logOut() {
    try {
      signOut(auth);
    } catch (error) {
      console.error(error);
      alert(error.message);
      throw error; // re-throw the error so it can be handled by the caller if needed
    }
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const val = {
    currentUser,
    logIn,
    signup,
    logOut,
  };
  return (
    <AuthContext.Provider value={val}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
