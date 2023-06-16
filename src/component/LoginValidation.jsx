import axios from 'axios';

function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === '') {
    error.email = 'Email should not be empty';
  } else if (!email_pattern.test(values.email)) {
    error.email = 'Invalid email format';
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Password should not be empty';
//   } else if (!password_pattern.test(values.password)) {
//     error.password = 'Invalid password format';
  } else {
    error.password = '';
  }

  // Additional check: Validate against user credentials in the database
  if (error.email === '' && error.password === '') {
    axios
      .post('http://localhost:8081/login', values)
      .then(res => {
        if (res.data === 'Success') {
          // User credentials matched, no error
          error.login = '';
        } else {
          // User credentials not found in the database
          error.login = 'Invalid email or password';
        }
      })
      .catch(err => {
        console.log(err);
        error.login = 'Login failed';
      });
  }

  return error;
}

export default Validation;
