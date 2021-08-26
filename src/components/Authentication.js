import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import API from '../apiClient'
//Hello
//World

const Authentication = () => {
    const [username, setUsername]= useState('')
    const [password, setPassword]=useState('')
    const params = useParams()
    const endpoint = '/users/' + params.method
    const history = useHistory()

    useEffect(()=>{
        if (localStorage.getItem("userToken").length>1)
        history.push("/home") // sends the user back to home when signed in. 
    }, )
    return (
        <div>
            <h1>{params.method}</h1>
            <form onSubmit={async event=>{
                event.preventDefault()
                await API.authenticate(endpoint, {username:username, password:password})
                history.push("/home") //Routes the user back to home
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