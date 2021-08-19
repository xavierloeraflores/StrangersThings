import React from 'react'
import API from '../../apiClient'
import { useState, useEffect } from 'react'

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
            {posts ? posts.map((post)=>{return <h1>{post.author.username}</h1>}):null}
        </div>
    )
}

export default Posts;