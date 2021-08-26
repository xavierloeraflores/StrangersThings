import React, {useState, useEffect} from 'react'

const Postform = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice]=useState('')
    
    useEffect(()=>{
        console.log(title)
        console.log(description)
        console.log(price)
        
        
    },[title, description,price])
    
    return(
        <>
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log("posted")
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

        </form>
        </>
    )
}
export default Postform;