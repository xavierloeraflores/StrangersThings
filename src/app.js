import React, {useContext, useEffect}  from 'react'
import { Route } from 'react-router';
import Posts from './components/Posts';
import Authentication from './components/Authentication'
import Test from './components/Test';
import Postform from './components/Postform';
import Profile from './components/Profile';
import { UserContext } from './context/UserContext';

const App = () => {
    const {setUser, setIsLoggedIn} = useContext(UserContext)
    // const [isLoggedIn, setIsLoggedIn]
    useEffect(()=>{
        const storedToken= localStorage.getItem('userToken')
        console.log("TOKEN",storedToken)
        if (storedToken && storedToken.length>3){
            setIsLoggedIn(true)
            setUser((userData)=>({...userData, ['token']:storedToken}))
        }
    }, [])
    return (
        <>
        {/* <Test /> */}
        <Route exact path='/'>
            HOME
        </Route>
        <Route exact path ='/posts'>
            <Posts />
        </Route>
        <Route exact path='/postform'>
            <Postform/>
        </Route>
        <Route exact path='/profile'>
           <Profile/>
        </Route>
        <Route path='/user/:method'>
            <Authentication/>
        </Route>
        <Route path='/user/:method'>
            Register
        </Route>
        </>
    )
}
export default App;