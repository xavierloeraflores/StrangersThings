import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../context/UserContext'
import API from '../apiClient'

const Messageform = (props) => {
    const [message, setMessage] = useState('')
    const {postID} = props

    const {user, isLoggedIn} = useContext(UserContext)
    const history = useHistory()

    // useEffect(()=>{
    //     if (isLoggedIn===false){
    //         console.log(user)
    //         history.push("/home") // sends the user back to home when the user isnt signed in. 
    //         alert("You need to be signed in")
    //     }
    // }, )
    
    return(
        <>
        <form onSubmit={async (event)=>{
            event.preventDefault()
            const data = await API.makeMessage(user.token,postID, message)
            console.log("posted", data)
            history.push("/posts")
        }}>
            <label htmlFor='post-title'>Message</label>
            <input type='text' id='post-title' onChange={(event)=>{
                setMessage(event.target.value)
            }}></input>
            <button type='submit'>Send Message</button>

        </form>
        </>
    )
}
export default Messageform;