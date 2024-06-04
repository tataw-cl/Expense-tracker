import { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // User is null by default
  const [loggedIn, setLoggedIn] = useState(false); // User is not logged in by default
  const [loading, setLoading] = useState(true); // Loading is true by default
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe; // Cleanup function);
  }, []);

  async function initializeUser(user) {
    setUser(user);
    setLoading(false);
    if (user) {
      setLoggedIn(true);
    } else {
      setUser(null);
      setLoggedIn(false);
    }
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
