import React,{useContext} from 'react'
import API from '../apiClient'
import { UserContext } from '../context/UserContext'


const Post = (props) => {
    const {user} = useContext(UserContext)
    const {author, description, title, isAuthor, _id} = props.post
    return (
        <div className='post'>
        <span>{title}</span>
        <br />
        <span>{author.username}</span>
        <br />
        <span>{description}</span>
        <br />
        <button onClick={()=>{
            API.deletePost(user.token, _id)
        }} > Delete Post</button>
        </div>

    )
}

export default Post;