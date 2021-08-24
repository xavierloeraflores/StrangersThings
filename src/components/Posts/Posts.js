import React, { useState, useEffect } from 'react'
import API from '../../apiClient'
import Post from './Post'

const Posts = () => {
    const [posts,setPosts] = useState([])

    
    useEffect(async ()=>{
        const postData = await API.getPosts()
        console.log(postData)
        setPosts(postData)

        const test = await API.login("testingboi", "The3Pass")
        console.log(test)
    },[])
    
    return (
        <div>
            {posts ? console.log(posts):null}
            {posts ? posts.map((post,idx)=>{return <Post key={idx} post={post}/>}):null}
        </div>
    )
}

export default Posts;