import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Edit = () => {
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))
    },[])

    const handleUpdate = (e) =>{
        e.preventDefault()
        Axios.put(`https://687b6e26b4bc7cfbda85d9d8.mockapi.io/crud${id}`,{
            e_name:name,
            e_age:age,
            e_email:email
        }).then(()=>{
            navigate('/')
        })

    }
  return (
    <div className='row'>
        <div className='col-md-4'>
            <div className='mb-2 mt-2'>
                <Link to="/">
                <button className='btn btn-primary'>View data</button>
                </Link>
            </div>
            <div className='bg-primary p-4 text-center'>
                <h1>Update Data</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='form-group'>
                    <label>Enter name:</label>
                    <input type="text" placeholder='name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Enter age:</label>
                    <input type="number" placeholder='age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Enter email:</label>
                    <input type="text" placeholder='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <br />
                <button className='btn btn-primary'>Update</button>

            </form>
        </div>
    </div>
  )
}

export default Edit