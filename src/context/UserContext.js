import React, { createContext, useState } from "react";

// Create Context
const UserContext = createContext({ email: "", auth: false });

// Function UserProvider
// Create Function to provide UserContext
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", auth: false });

  const loginContext = (email, token) => {
    setUser((user) => ({
      email: email,
      auth: true,
    }));
    localStorage.setItem("token", token);
  };

  const logoutContext = () => {
    localStorage.removeItem("token");
    setUser((user) => ({
      email: "",
      auth: false,
    }));
  };
  return (
    <UserContext.Provider value={{ user, loginContext, logoutContext }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
