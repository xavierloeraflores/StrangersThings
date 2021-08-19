import React from 'react'
import API from '../../apiClient'
import { useState, useEffect } from 'react'
import Post from './Post'

const Posts = () => {
    const [posts,setPosts] = useState([])
    
    useEffect(async ()=>{
        const postData = await API.getPosts()
        console.log(postData)
        setPosts(postData)
    },[])
    
    return (
        <div>
            {posts ? console.log(posts):null}
            {posts ? posts.map((post,idx)=>{return <Post key={idx} post={post}/>}):null}
        </div>
    )
}

export default Posts;