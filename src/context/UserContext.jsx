import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState()

    return (

        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}