import React, {useContext, useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../context/UserContext';
import API from '../apiClient';




const Profile = () =>{

    const {user, isLoggedIn} = useContext(UserContext)
    const history = useHistory()

    const [messages, setMessages] = useState([])
    const [posts, setPosts] = useState([])




    useEffect(()=>{
        if (isLoggedIn===false){
            console.log(user)
            history.push("/home") // sends the user back to home when the user isnt signed in. 
            alert("You need to be signed in")
        }
    } )

    useEffect(async ()=>{
        const data = await API.getProfile(user.token)
        console.log(data)
        setMessages(data.messages)
        setPosts(data.posts)
    },[])

    return(
        <div id='profile'>
        <h1>Profile</h1>
        </div>
    )

}

export default Profile;