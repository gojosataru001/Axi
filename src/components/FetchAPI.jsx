import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
  const [posts, setPosts]= useState([])
 useEffect(()=>{ fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    response.json().then((result)=>{
        setPosts(result)
    })
  })})
    return (
    <div>

<ul>
  {
    posts.map(pst=>{
      return(
        <>
          <li>{pst.id}</li>
          <li>{pst.title}</li>
        </>
      )
    })
  }
</ul>


    </div>
  )
}

export default FetchAPI