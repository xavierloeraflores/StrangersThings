import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import API from '../apiClient'
import Post from './Post'
import Postform from './Postform'

const Posts = () => {
    const [posts,setPosts] = useState([])

    
    useEffect(async ()=>{
        const postData = await API.getPosts()
        console.log(postData)
        setPosts(postData)

        // const test = await API.login("testingboi", "The3Pass")
        // console.log(test)
    },[])
    
    return (
        <div>
            <Link to='/postform'>Add new post.</Link>
            {posts ? console.log(posts):null}
            <div id='posts'>

            {posts ? posts.map((post,idx)=>{return <Post key={idx} post={post}/>}):null}
            </div>
        </div>
    )
}

export default Posts;