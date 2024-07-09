import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => { 
     return useContext(AuthContext); 
};

//AuthContextProvider will wrap our application and provide the authUser and setAuthUser to all components by using the hook useAuthContext
export const AuthContextProvider = ({ children }) => {
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null)

    return (
        <AuthContext.Provider value={{authUser,setAuthUser}} >
            {children}
        </AuthContext.Provider>
    )
}