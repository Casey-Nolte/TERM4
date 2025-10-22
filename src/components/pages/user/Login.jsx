import React, { useState } from 'react';
import '../../styles/LoginSignup.css';
import profile_icon from '../../assets/profile.png';
import password_icon from '../../assets/password.png';
import { Link } from 'react-router-dom';
import {login} from '../../../API/userApi';

const Login = ({onLogin}) => { 

  const [formData, setFormData] = useState({ //represents all input fields in login form, initlazises state of formdata
    userName: '',
    password: ''
  });

  const handleChange = (e) => { // arrow function to handle input changes
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      onLogin();
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }

  };

  return (
    <div className="container">
      <div className="header"> 
        <div className='text'>Auto-Ticket</div> 
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={profile_icon} alt="profile_icon"/>
            <input 
              type="text" 
              name="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <img src={password_icon} alt=""/>
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className='submit-container' style={{justifyContent: 'center'}}>
          <button type="submit" className="submit">Login</button>
        </div>
        
        <div className="switch-form">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;