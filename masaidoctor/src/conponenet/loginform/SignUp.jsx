import React, { useState } from "react";
import axios from 'axios';
import { FaUser, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../styles/LoginForm.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSign = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await axios.post('https://mock3-l3c9.onrender.com/auth/signup', {
        email,
        password,
        confirmPassword,
      });

      console.log('Sign-up response:', response.data);
      navigate("/");
      // For demonstration purposes, you can handle success or navigate to another page
      alert('Sign-up successful!');
      // history.push('/HomePage');
    } catch (error) {
      console.error('Sign-up error:', error.response?.data || error.message);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSign}>
          <h1>Sign up</h1>
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <FaRegEyeSlash onClick={() => setShowPassword(false)} className="icon" />
            ) : (
              <FaRegEye onClick={() => setShowPassword(true)} className="icon" />
            )}
          </div>
          <div className="input-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash onClick={() => setShowConfirmPassword(false)} className="icon" />
            ) : (
              <FaRegEye onClick={() => setShowConfirmPassword(true)} className="icon" />
            )}
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
          <div className="register-link">
            <p>Thank you for choosing us...</p>
          </div>
        </form>
      </div>
    </div>
  );
}
