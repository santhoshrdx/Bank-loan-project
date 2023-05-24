import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Signup(){
    
    const [values, setValues]= useState({
        name: '',
        email: '',
        password: ''
    })
 const handleChange = (event) => {
    setValues({...values,[event.target.name]:[event.target.value]})
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/signup',values)
    .then(res => console.log("SUCCESSFUL"))
    .catch(err => console.log(err));
 }

    return(
        
        <div className='d-flex justify-content-center align-items-center  vh-100'style={{backgroundColor:'#250563'}}>
            {/* <MediaQuery minWidth={768} maxWidth={1024}> */}
            <div className='bg-transparent px-3 m-5 rounded-5 w-35 shadow-lg '>
                <h2 className ='text-white d-flex justify-content-center mb-5'>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 row'>
                        <label htmlFor="name"  className='text-white col-lg-4 w-50 fs-5'>Name</label>
                        <input type ="text"placeholder='' name='name'
                        className='form-control bg-transparent border rounded-5 text-white btn-lg col-lg-8  w-50 fs-5'  onChange={handleChange} />
                    </div>
                    <div className='mb-3 row'>
                        <label htmlFor="email"className='text-white fs-5 w-50'>Email</label>
                        <input type ="email"placeholder='' name='email'
                        className='form-control rounded-5 bg-transparent border text-white btn-lg fs-5 w-50'  onChange={handleChange}/>
                    </div>
                    <div className='mb-5  row'>
                        <label htmlFor="password" className='text-white fs-5 w-50'>Password</label>
                        <input type ="password"placeholder=' ' name='password'
                       className='form-control rounded-5 bg-transparent border text-white btn-lg fs-5 w-50'  onChange={handleChange} />
                    </div>
                    <button type='submit' className='btn btn-warning w-100 rounded-5 btn-lg fs-5 '>Sign up</button>
                    <p className='text-white'>You are agree to our terms and Policies</p>
                    <Link to="/" className='btn btn-default  w-40 bg-warning rounded-5 mt-3 btn-hover text decoration-nonebtn-l fs-6'>❮ Back to Login</Link>
                </form>
            </div>
            {/* </MediaQuery> */}
        </div>
        
    )
}

export default Signup;