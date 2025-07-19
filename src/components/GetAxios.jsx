import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const baseURL =  "https://jsonplaceholder.typicode.com/posts"

const GetAxios = () => {
    const[myData,setData]=useState([])
    useEffect(()=>{
        Axios.get(baseURL).then((response)=>{
            setData(response.data)
        })
    })
  return (
    <div>
        {
            myData.map((item)=>{
                const{id,title,body}=item
                return(
                    <div key={id}>
                        <h1>{id}</h1>
                        <h1>{title}</h1>
                        <h1>{body}</h1>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default GetAxios