import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { onAuthStateChanged, getIdTokenResult } from "@firebase/auth";
import { auth } from "../assets/firebase";
const UserContext = createContext();
export const useIsUserAuthenticated = () => useContext(UserContext);
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (!user) {
      setIsAuthenticated(false);
      return;
    }

    getIdTokenResult(user)
      .then((idTokenResult) => {
        if (!!idTokenResult.claims.admin) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.error("Error verifying ID token:", error);
        setIsAuthenticated(false);
      });
  }, [user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
