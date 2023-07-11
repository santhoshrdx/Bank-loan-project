import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function FirebaseLogin() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
  
    // Perform client-side validation
    if (values.email.trim() === '') {
      setErrors({ email: 'Email is required.' });
      return;
    }
    if (values.password === '') {
      setErrors({ password: 'Password is required.' });
      return;
    }
  
    axios
      .post('http://localhost:8000/auth/login', values)
      .then((res) => {
        console.log('success');
        if (res.data.success) {
          navigate('/');
        } else {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert('An error occurred. Please try again.');
        }
      });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <Typography variant="h2" padding={3}>
            Login
          </Typography>
          <TextField
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInput}
            style={{ width: '300px' }}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInput}
            style={{ width: '300px' }}
            type="password"
            error={!!errors.password}
            helperText={errors.password}
          />
          <br />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default FirebaseLogin;
