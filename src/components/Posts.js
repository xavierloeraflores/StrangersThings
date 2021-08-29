import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import API from '../apiClient'
import Post from './Post'
import Postform from './Postform'
import { UserContext } from '../context/UserContext'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const {user, isLoggedIn} = useContext(UserContext)

    
    useEffect(async ()=>{

        let postData = []

        if(!isLoggedIn) postData= await API.getPosts()
        if(isLoggedIn) postData= await API.getPosts(user.token)
        console.log(postData)
        setPosts(postData)

        // const test = await API.login("testingboi", "The3Pass")
        // console.log(test)
    },[])
    
    return (
        <div>
            {isLoggedIn? <Link to='/postform'>Add new post.</Link>:<span>Sign in to make post</span>}
            {posts ? console.log(posts):null}
            <div id='posts'>

            {posts ? posts.map((post,idx)=>{return <Post key={idx} post={post}/>}):null}
            </div>
        </div>
    )
}

export default Posts;