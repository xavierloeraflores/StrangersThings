import React, {useState, useEffect,useContext } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import API from '../apiClient'
import { UserContext } from '../context/UserContext';
//Hello
//World

const Authentication = () => {
    const [username, setUsername]= useState('')
    const [password, setPassword]=useState('')
    const params = useParams()
    const endpoint = '/users/' + params.method
    const history = useHistory()
    const {user,setUser, isLoggedIn, setIsLoggedIn} = useContext(UserContext)

    useEffect(()=>{
        if (isLoggedIn===true)
        history.push("/home") // sends the user back to home when signed in. 
    }, )
    
    return (
        <div>
            <h1>{params.method}</h1>
            <form onSubmit={async event=>{
                event.preventDefault()
                const data = await API.authenticate(endpoint, {username:username, password:password})
                console.log("XXX",data)
                if(data.token){
                    setIsLoggedIn(true)
                    setUser((userData)=>({...userData, ['token']:data.token}))
                    history.push("/home")
                }else alert('error')
                 //Routes the user back to home
                }}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' onChange={(event)=>{
                    setUsername(event.target.value)
                }}></input>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Authentication;