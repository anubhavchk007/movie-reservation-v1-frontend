import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const MyContext = createContext()

export const ContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [usernameToDisplay, setUsernameToDisplay] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            setIsLoggedIn(true);
            setUsernameToDisplay(localStorage.getItem("username"));
        }
    }, []);

    const signup = (token, username) => {
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("username", username);
        toast.success("Signed Up and Logged in");
        setIsLoggedIn(true);
        setUsernameToDisplay(username);
    }
        
    const login = (token, username) => {
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("username", username);
        toast.success("Logged in");
        setIsLoggedIn(true);
        setUsernameToDisplay(username);
    };
    
    const logout = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("username");
        setIsLoggedIn(false);
        setUsernameToDisplay(null);
    };

    return (
        <MyContext.Provider value={{isLoggedIn, setIsLoggedIn, usernameToDisplay, setUsernameToDisplay, signup, login, logout}}>
            {children}
        </MyContext.Provider>
    )
};

const useMyContext = () => useContext(MyContext);

export default useMyContext;
