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
        <div id='nav'>
            <span>Strangers Things</span>
            <div id='nav-links'>
                <Link className='nav-link' to = '/'>Home</Link>
                <Link className='nav-link' to = '/posts'>Post</Link>
                <Link className='nav-link' to = '/profile'>Profile</Link>
                {
                    user.isLoggedIn ? <Link to = '/' onClick={logOut}>Log Out</Link>: (<>
                            <Link className='nav-link' to = '/user/login'>Log In</Link>
                            <Link className='nav-link' to = '/user/register'>Register</Link>
                        </>)
                }
                <p>{user.name}</p>
            </div>
        </div>
    )
}

export default Nav;