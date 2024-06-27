// UserContext.js
import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  // Define state for the course
  const [course, setCourse] = useState("");
  const [token, setToken] = useState("");

  return (
    // Provide the course state and setCourse function to the context
    <UserContext.Provider value={{ course, setCourse, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
