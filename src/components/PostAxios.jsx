import React, { useState } from 'react'
import  Axios from 'axios'

const PostAxios = () => {
    const [myTitle,setTitle] = useState('')
    const [myBody,setBody] = useState('')
    const handleSubmit = (e)=>{
       e.preventDefault()
       Axios.post("https://jsonplaceholder.typicode.com/posts",{title:myTitle,body:myBody}).then((response)=>{
            console.log(response)
       }).catch((error)=>{
        console.log(error)
       })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter title:</label>
            <input type="text" name='title' value={myTitle} onChange={(e)=>setTitle(e.target.value)} />
            <br />
            <label>Enter body:</label>
            <input type="text" name='body' value={myBody} onChange={(e)=>{setBody(e.target.value)}} />
            <br />
            <button>Submit</button>
            <div>
                <h1>{myTitle}</h1>
                <h1>{myBody}</h1>
            </div>
        </form>
    </div>
  )
}

export default PostAxios