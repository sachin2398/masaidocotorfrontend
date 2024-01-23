import React, { useState } from "react";
import axios from 'axios';
import { FaUser, FaLock,FaRegEye,FaRegEyeSlash   } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setshowPassword] = useState(false)
  const [visiblePassword, setvisiblePassword] = useState()
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://mock3-l3c9.onrender.com/auth/login', {
        email,
        password,
      });

      console.log('Login response:', response.data);
      localStorage.setItem("mernapptoken", response.data.token);
      navigate("DoctorDashboard")
      // For demonstration purposes, you can handle success or navigate to another page
      alert('Login successful!');
    
      // history.push('/HomePage');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="body">
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type= {showPassword? "text":"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {showPassword?<FaRegEyeSlash onClick={()=>setshowPassword(false)}  className="icon" />:<FaRegEye onClick={()=>setshowPassword(true)}   className="icon" /> }
          
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="">Forgot Password</a>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account?
            <a onClick={()=>navigate("/signup")}>Register</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
}
