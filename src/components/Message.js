import React from 'react'



const Message = (props) =>{
    const {content, fromUser, post} = props.message

    return (
        <div className='message'>
        <span><b>Listing:{post.title}</b></span>
        <br />
        <span>{fromUser.username}</span>
        <br />
        <span>{content}</span>
        <br />
        {/* {isAuthor ? <button onClick={()=>{
            API.deletePost(user.token, _id)
        }}> Delete Post</button>:null} */}
        {/* {!isAuthor && isLoggedIn ? <Messageform postID={_id}/>:null} */}
        </div>

    )
}


export default Message;