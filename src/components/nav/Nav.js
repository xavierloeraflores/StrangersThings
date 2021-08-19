import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {

    return (
        <div id='Nav'>
            <span>Strangers Things</span>
            <div>
                <Link to = '/'>Home</Link>
                <Link to = '/posts'>Post</Link>
                <Link to = '/profile'>Profile</Link>
                <Link to = '/'>Log Out</Link>
            </div>
        </div>
    )
}

export default Nav;