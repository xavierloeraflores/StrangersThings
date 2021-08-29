import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();


export const UserProvider = ({children})=> {
    const [user, setUser] = useState({
        token: '',
        name: '',
        id: '',
        messages:{},
        posts:{}
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false) 

    useEffect(()=>{
        // if (user.token!=''&& !isLoggedIn) setIsLoggedIn(true)
        // if (user.token===''&&isLoggedIn) setIsLoggedIn(false)
    },[user])


    return <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn }}>{children}</UserContext.Provider>;
}