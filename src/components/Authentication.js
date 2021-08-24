import React, {useState, useEffect} from 'react'
// import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import API from '../apiClient'
//Hello
//World

const Authentication = () => {
    const [username, setUsername]= useState('')
    const [password, setPassword]=useState('')
    const params = useParams()
    const endpoint = '/users/' + params.method
    // const navigate = useNavigate()
    return (
        <div>
            <h1>{params.method}</h1>
            <form onSubmit={event=>{
                event.preventDefault()
                API.authenticate(endpoint, {username:username, password:password})
                }}>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' onChange={(event)=>{
                    setUsername(event.target.value)
                }}></input>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Authentication;