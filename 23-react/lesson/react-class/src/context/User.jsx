import { useScrollTrigger } from "@mui/material";
import { createContext, useState } from "react";
import { LoginDialog } from "../login/LoginDialog";

export const UserContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const login = () => {
    setIsLoginDialogOpen(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const handleSubmit = (email, password) => {
    if (email === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setIsLoginDialogOpen(false);
    }
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      <LoginDialog
        open={isLoginDialogOpen}
        onClose={() => setIsLoginDialogOpen(false)}
        onSubmit={handleSubmit}
      />
      {children}
    </UserContext.Provider>
  );
};
