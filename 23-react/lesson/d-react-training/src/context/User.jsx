import {createContext, useState} from "react";
import PropTypes from "prop-types";
import {LoginDialog} from "../features/user/components/LoginDialog.jsx";


export const UserContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

    const logout = () => {
        setIsLoggedIn(false);
    }

    const login = () => {
        setIsLoginDialogOpen(true);
    }

    const handleSubmit = (email, password) => {
        if (email === 'admin' && password === "admin") {
            setIsLoggedIn(true);
            setIsLoginDialogOpen(false);
        }

    }

    return (
        <UserContext.Provider value={{isLoggedIn, login, logout}}>
            <LoginDialog
                open={isLoginDialogOpen}
                onClose={() => setIsLoginDialogOpen(false)}
                onSubmit={handleSubmit}
            />
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}
