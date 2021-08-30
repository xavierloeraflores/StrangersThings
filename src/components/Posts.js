import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import API from '../apiClient'
import Post from './Post'
import Postform from './Postform'
import { UserContext } from '../context/UserContext'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const {user, isLoggedIn} = useContext(UserContext)
    const [filter, setFilter] = useState('')

    useEffect(async ()=>{

        let postData = []

        if(!isLoggedIn) postData= await API.getPosts()
        if(isLoggedIn) postData= await API.getPosts(user.token)
        console.log(postData)
        setPosts(postData)


    },[])


    
    return (
        <div id='post-page'>
            {isLoggedIn? <Link to='/postform'>Add new post.</Link>:<span>Sign in to make post</span>}
            <div>
                <label htmlFor='filter'>Filter: </label>

            <input type='text' id='filter' onChange={(event)=>{
                setFilter(event.target.value)
            }}></input>
            </div>
            
            
            <div id='posts'>
            {posts ? posts.map((post,idx)=>{if(post.title.includes(filter))return <Post key={idx} post={post}/>}):null}
            </div>
        </div>
    )
}

export default Posts;