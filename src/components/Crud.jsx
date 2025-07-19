import React, { useState } from 'react'
import Axios from 'axios'
import {  useNavigate, Link } from 'react-router-dom'


const Crud = () => {
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [email,setEmail] = useState()
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        Axios.post("https://687b6e26b4bc7cfbda85d9d8.mockapi.io/crud",{e_name:name,e_age:age,e_email:email})
        .then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='row'>
        <div className='col-md-4 text-center'>
            <div className='mb-2 mt-2'>
                <Link to="/">
                <button className='btn btn-primary'>
                    View data
                </button>
                </Link>
            </div>
            <div className='bg-primary p-4 text-center'>
                <h1>Create Data</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Enter Name:</label>
                    <input type="text" placeholder='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className='form-group'>
                    <label>Enter age:</label>
                    <input type="number" placeholder='age' className='form-control'value={age} onChange={(e)=>{setAge(e.target.value)}}  />
                </div>
                <div className='form-group'>
                    <label>Enter email:</label>
                    <input type="text" placeholder='email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <br />
                <button className='btn btn-primary'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Crud