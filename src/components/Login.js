import React, { useState } from 'react'
import './Login.css';
import logo from '../Images/logo.png';
import google from '../Images/google.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ togglePopup }) {
    const navigate = useNavigate();
    const [formData,setFormdata] = useState({
        email:"",
        password:"",
      });

      const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
      });

      const HandleChange = (e)=>{
        const {name,value} = e.target;
        setFormdata({
         ...formData,
         [name]:value
        });
        setFormErrors({
         ...formErrors,
         [name]: '',
       });
   };

   const validateForm = ()=>{
    const errors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
 };


   const submitData =()=>{
    if(!validateForm()){
       return ;
    }

      axios.post(`https://osmosis-backend-api.onrender.com/api/v1/user/login`,formData)
      .then((resp)=>{
        console.log(resp.data);
        alert('User LogIn Sucessfully');
        navigate('/event');
        togglePopup("loggedin");
        setFormdata({
          email: '',
          password: '',
        });
      })
      .catch((err)=>{
        if (err.response && err.response.status === 409) {
          // 409 Conflict: Email already exists
          alert('Email already exists');
        } else {
          console.log(err);
        }
      })
  }

    return (
        <div className='loginform'>
            <div className='popup_login'>
                <div className='popup_header'>
                    <h1>Login</h1>
                    <h3 onClick={togglePopup} className='close'>X</h3>
                </div>
                <p className='notmem'>Not Member yet?<a href='/register'>Click here</a></p><br /><br /><br />
                <div>
                    <img src={logo} width='250px' />
                </div>
                <div className='inputBox'>
                    <input type='text' 
                    placeholder='Email' 
                    value={formData.email}
                    name='email' onChange={HandleChange}/><br />

                    {formErrors.email && <span className='error' style={{color:'red'}}>{formErrors.email}</span>}<br /><br />

                    <input type='password' 
                    placeholder='Password'
                    value={formData.password}
                    name='password' onChange={HandleChange}/><br />

                    {formErrors.email && <span className='error' style={{color:'red'}}>{formErrors.password}</span>}<br /><br />
                    <a href='#' className='forgetpass'>Forgot Your Password ?</a>
                </div>
                <div className='button'>
                    <button className="btn btn-primary" onClick={()=>submitData()}>Submit</button>
                </div>
                <div className='or_line'>
                    <div className='line' />
                    <h4>OR</h4>
                    <div className='line' />
                </div>
                <div>
                    <p>Login with<a href='#'><img src={google} width='50px' height='45px' /></a></p>
                </div>
            </div>
        </div>
    )
}

export default Login
