import React, {  useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import img1 from '../image/digigold.png';


const Login = () => {
  const [email, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      });

      // Assuming the API response contains an authentication token
      const { token } = response.data;

      // Store the token in local storage or state
      localStorage.setItem('token', token);

      // Set the authentication state to true
      // You can manage this state in a higher-level component or using a state management library
      // For simplicity, we'll manage it locally in this example
      setIsAuthenticated(true);

      navigate('/sidebar');

      // Redirect the user to the dashboard or desired page
      
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };



  return (
    <div className="row vh-100" style={{backgroundColor:'#250563'}}>
    <div class="container h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-md-9 col-lg-6 col-xl-5">
   <img src ={img1} class="image" alt="pop" align="left" width="750" height="750" margintop="2px" />
     </div>
      
    {/* <MediaQuery minWidth={768} maxWidth={1024}> */}
    <div className=' bg-transparent rounded w-25 row 'style={{ marginLeft: 'auto', marginRight: '90px'}} >      {/* code is modified here to align it right */}
        <form action='' onSubmit={handleLogin}>
          <div className='row '>
          <h2 className='btn btn-default  w-50  rounded-5 text-decoration-none  col-lg-5 fs-5 text-white' ><strong><justify>Login</justify></strong></h2>
       
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
                onChange={(e) => setUseremail(e.target.value)}
                className='form-control w-50 rounded-5 input-lg  col-lg-6 bg-transparent border text-white'
              />
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
                onChange={(e) => setPassword(e.target.value)}
                className='form-control rounded-5  w-50 input-lg col-lg-6 bg-transparent border text-white'
              />
            </div>
            <br/>
            <center><button type='submit' className=' d-flex btn btn-warning w-50 rounded-5 row align-item-center justify-content-center btn-lg fs-5 btn-hover'>
              Log in
            </button></center>
            <br></br>
            <Link to='/signup' className='letter  text-decoration-none text-white' >Create a new Account? Register
            </Link>
            
           
          </form>
        </div>
        {/* </MediaQuery> */}
      </div>
     </div>
     </div>
    );
  }
  
   
   
export default Login;