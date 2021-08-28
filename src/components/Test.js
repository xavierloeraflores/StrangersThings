import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import API from '../apiClient'

const Test = () =>{
    const {user, setUser} = useContext(UserContext)
    return (
        <div>
            <button onClick={(event)=>{
                //Test Code here 
                let log = localStorage.getItem('userToken')
                console.log(log, user)
            }}>Test </button>

            <button onClick={(event)=>{
                //Test Code here 
                setUser((userData)=>({...userData, ['token']:"bruhbruh", ['isLoggedIn']:true}))
            }}>SetUser </button>

            {/* 6127131ea314950017784e5c */}
            <button onClick={async (event)=> {
                //Test Code here 
                const data = await API.makePost(localStorage.getItem('userToken'), {title:'hello',description:'world', price:'$123' })
            
                console.log(data)
            
            }}>Make Post</button>
            <button onClick={async (event)=> {
                //Test Code here 
                const data = await API.deletePost(user.token, '6127131ea314950017784e5c')
            
                console.log(data)
            
            }}>Delete Post</button>
            <button onClick={async (event)=> {
                //Test Code here 
                const data = await API.authenticate2('/users/login', {username:'Hello', password:'World'})
            
                console.log(data)
            
            }}>Log In</button>
            <button onClick={async (event)=> {
                //Test Code here 
                const data = await API.getPosts2()
            
                console.log(data)
            
            }}>Get Posts</button>
        </div>
    )
}

export default Test;