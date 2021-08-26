import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const Nav = () => {

    const user = useContext(UserContext)

    return (
        <div id='Nav'>
            <span>Strangers Things</span>
            <div>
                <Link to = '/'>Home</Link>
                <Link to = '/posts'>Post</Link>
                <Link to = '/profile'>Profile</Link>
                <Link to = '/user/login'>Log In</Link>
                <Link to = '/user/register'>Register</Link>
                <Link to = '/'>Log Out</Link>
                <p>{user}</p>

            </div>
        </div>
    )
}

export default Nav;