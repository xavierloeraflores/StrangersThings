import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const Nav = () => {

    const {user,setUser} = useContext(UserContext)
    const logOut = () => {
        setUser({token:'', name:'', isLoggedIn:false})
        localStorage.setItem('userToken', '')
    }

    return (
        <div id='Nav'>
            <span>Strangers Things</span>
            <div>
                <Link to = '/'>Home</Link>
                <Link to = '/posts'>Post</Link>
                <Link to = '/profile'>Profile</Link>
                {
                    user.isLoggedIn ? <Link to = '/' onClick={logOut}>Log Out</Link>: (<>
                            <Link to = '/user/login'>Log In</Link>
                            <Link to = '/user/register'>Register</Link>
                        </>)
                }
                <p>{user.name}</p>

            </div>
        </div>
    )
}

export default Nav;