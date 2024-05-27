import { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";
import { useNavigate } from "react-router";

// const user = {
//   name: "",
//   surname: "",
//   email: "",
//   password: "",
// };

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [error, setError] = useState(null);

  const [account, setAccount] = useState(null);

  const createAccount = (email, account) => {
    setItem(email, account);
  };

  const navigate = useNavigate();

  const login = (email, password) => {
    const account = getItem(email);

    if (account) {
      if (account.email === email && account.password === password) {
        setIsAuthenticated(true);
        setAccount(account);

        localStorage.setItem("isAuthenticated", "true");

        navigate("/user/dashboard");
      } else {
        setError({ message: "Wrong Email address or Password!" });
      }
    } else {
      setError({ message: "Account not found!" });
    }

    (!email || !password) && setError({ message: "Required field" });
  };

  const logout = () => {
    setIsAuthenticated(false);

    localStorage.setItem("isAuthenticated", "false");

    navigate("/login");
  };

  useEffect(() => {
    const authStatus = getItem("isAuthenticated");

    console.log("authStatus:", authStatus);

    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const value = {
    isAuthenticated,
    account,
    setAccount,
    error,
    setError,
    createAccount,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
