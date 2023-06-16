import axios from 'axios';

function validateForm() {
 
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
 
  
    
    const name = nameInput.value.trim();
    if (name === '') {
      setError(nameInput, 'Please enter your name');
      return false;
    } else {
      removeError(nameInput);
    }
  
    
    const email = emailInput.value.trim();
    if (email === '') {
      setError(emailInput, 'Please enter your email');
      return false;
    } else if (!isValidEmail(email)) {
      setError(emailInput, 'Please enter a valid email');
      return false;
    } else {
      removeError(emailInput);
    }
  
    
  }
  
 
  function setError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error-message');
    errorElement.innerText = message;
    formControl.classList.add('error');
  }
  

  function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
  }
  
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  

  const form = document.getElementById('myForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    if (validateForm()) {
     
      form.submit();
    }
  });

export default validateForm;