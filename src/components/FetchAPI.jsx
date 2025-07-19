import React from 'react'

const FetchAPI = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    response.json().then((result)=>{
        console.log(result)
    })
  })
    return (
    <div>FetchAPI</div>
  )
}

export default FetchAPI