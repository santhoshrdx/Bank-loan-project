import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios'

function Signup(){

    const [values,setValue]=useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate =useNavigate();
    const [error, setErrors] = useState({})
    const handleInput =(event)=>{
        setValue(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(error.name === "" && error.email === "" && error.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(res))
        }
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign up</h2>
                <form action=" " onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type ="text"placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {error.name && <span className='text-danger'> {error.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type ="email"placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {error.email && <span className='text-danger'> {error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type ="password"placeholder='Enter Password ' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {error.password && <span className='text-danger'> {error.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                    <p>You are agree to our terms and Policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text decoration-none'><strong>❮ Back to Login</strong></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup