import React from 'react'

const Test = () =>{

    return (
        <div>
            <button onClick={(event)=>{
                //Test Code here 
                let log = localStorage.getItem('userToken')
                console.log(log)
            }}>
                Test 
            </button>
        </div>
    )
}

export default Test;