import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../context/UserContext'
import API from '../apiClient'

const Postform = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice]=useState('')
    const {user} = useContext(UserContext)
    const history = useHistory()

    useEffect(()=>{
        console.log(title)
        console.log(description)
        console.log(price)
    },[title, description,price])

    useEffect(()=>{
        if (user.isLoggedIn===false){
            console.log(user)
            history.push("/home") // sends the user back to home when the user isnt signed in. 
            alert("You need to be signed in")
        }
    }, )
    
    return(
        <>
        <form onSubmit={async (event)=>{
            event.preventDefault()
            const data = await API.makePost(user.token, {title:title, description:description, price:price})
            console.log("posted", data)
            history.push("/posts")
        }}>
            <label htmlFor='post-title'>Title</label>
            <input type='text' id='post-title' onChange={(event)=>{
                setTitle(event.target.value)
            }}></input>

            <label htmlFor='post-description'>Description</label>
            <input type='text' id='post-description' onChange={(event)=>{
                setDescription(event.target.value)
            }}></input>

            <label htmlFor='post-price'>Price</label>
            <input type='text' id='post-price' onChange={(event)=>{
                setPrice(event.target.value)
            }}></input>
            <button type='submit'>Post</button>

        </form>
        </>
    )
}
export default Postform;