import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();


export const UserProvider = ({children})=> {
    const [user, setUser] = useState({
        token: '',
        name: '',
        isLoggedIn: false
    })

    useEffect(()=>{
        if (user.token!=''&& !user.isLoggedIn) setUser((userData) => ({ ...userData, ['isLoggedIn']: true })) 
        if (user.token===''&&user.isLoggedIn) setUser((userData) => ({ ...userData, ['isLoggedIn']: false }))
    },[user])


    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}