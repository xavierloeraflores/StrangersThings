import React from 'react'


const Post = (props) => {
    const {author, description, title} = props.post
    return (
        <div className='post'>
        <span>{title}</span>
        <br />
        <span>{author.username}</span>
        <br />
        <span>{description}</span>
        <br />
        </div>

    )
}

export default Post;