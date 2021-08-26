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


            <button onClick={async (event)=> {
                //Test Code here 
                const data = await API.makePost(localStorage.getItem('userToken'), {title:'hello',description:'world', price:'$123' })
            
                console.log(data)
            
            }}>SetUser </button>
        </div>
    )
}

export default Test;