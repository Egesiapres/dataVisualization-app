import { createContext, useEffect, useState } from "react";

// const user = {
//   name: "",
//   surname: "",
//   email: "",
//   password: "",
//   isAuthenticated: false,
// };

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [user_name, setUserName] = useState();

  // const [user_surname, setUserSurname] = useState();

  // const [user_email, setUserEmail] = useState();

  // const [user_password, setUserPassword] = useState();
  
  const [hasAccount, setHasAccount] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const createAccount = () => {
  //   localStorage.setItem({
  //     user_name,
  //     user_surname,
  //     user_email,
  //     user_password,            
  //   });
    
  //   setHasAccount(true);
  // };

  const login = () => {   
    setIsAuthenticated(true);

    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);

    localStorage.setItem("isAuthenticated", "false");
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");

    console.log("authStatus:", authStatus);

    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const value = {
    hasAccount,
    setHasAccount,
    // createAccount,

    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
