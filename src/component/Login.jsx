import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';



function Login() {
  
  const [values, setValue] = useState({
    email: '',
    password: ''
  });

  
  const navigate = useNavigate();
  const [error, setErrors] = useState({});

  const handleInput = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (error.email === '' && error.password === '') {
      axios
        .post('http://localhost:8081/login', values)
        .then((res) => {
          console.log('success');
          if (res.data.success) {
            navigate('/Greet');
          } else {
            alert('Invalid credentials. Please try again.');
          }
        })
        .catch((err) => console.log(err));
    }
  };

 



  return (
    <div className='d-flex justify-content-center   row align-items-center vh-100' style={{backgroundColor:'#250563'}}>
    {/* <MediaQuery minWidth={768} maxWidth={1024}> */}
    <div className=' bg-transparent rounded w-25 row 'style={{ marginLeft: 'auto', marginRight: '90px'}} >      {/* code is modified here to align it right */}
        <form action='' onSubmit={handleSubmit}>
          <div className='row '>
          <h2 className='btn btn-default  w-50  rounded-5 text-decoration-none  col-lg-5 fs-5 text-white' ><strong>Login</strong></h2>
       
          <Link to='/signup' className='btn btn-default  w-50  rounded-5 text-decoration-none bg-warning col-lg-5 fs-5' > Register
            </Link>
            </div>
            <br/>
            <div className='row'>
              <label className='col-lg-6 fs-5 text-white' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                placeholder=''
                name='email'
                onChange={handleInput}
                className='form-control w-50 rounded-5 input-lg  col-lg-6 bg-transparent border text-white'
              />
              {error.email && <span className='text-danger'>{error.email}</span>}
            </div>
            <br/>
            <div className='row'>
              <label className='col-lg-6 fs-5 text-white'  htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                placeholder=''
                name='password'
                onChange={handleInput}
                className='form-control rounded-5  w-50 input-lg col-lg-6 bg-transparent border text-white'
              />
              {error.password && <span className='text-danger'>{error.password}</span>}
            </div>
            <br/>
            <center><button type='submit' className=' d-flex btn btn-warning w-50 rounded-5 row align-item-center justify-content-center btn-lg fs-5 btn-hover'>
              Log in
            </button></center>
            
           
          </form>
        </div>
        {/* </MediaQuery> */}
      </div>
   
    );
  }
  
   
   
export default Login;
