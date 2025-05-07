import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc'; // Google icon from Flat Color icons
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import logoImage from '../assets/logo.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log('Login attempt with:', { email, password, rememberMe });
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="login-illustration"
          >
            <img src={logoImage} alt="TodoList Logo" className="logo" />
            <h1>TaskFlow</h1>
            <p className="tagline">Organize your projects. Simplify your life.</p>
            
            <div className="features-list">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="feature-item"
              >
                <div className="feature-icon">✓</div>
                <p>Smart task prioritization</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="feature-item"
              >
                <div className="feature-icon">✓</div>
                <p>Team collaboration tools</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="feature-item"
              >
                <div className="feature-icon">✓</div>
                <p>Real-time progress tracking</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="login-right">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="login-form-container"
          >
            <h2>Welcome back</h2>
            <p className="login-subtitle">Log in to your account to continue</p>
            
            <div className="social-login">
              <button className="social-btn google">
                <FcGoogle />
                <span>Continue with Google</span>
              </button>
              <button className="social-btn github">
                <FiGithub />
                <span>Continue with GitHub</span>
              </button>
            </div>
            
            <div className="divider">
              <span>or continue with email</span>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-container">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="password-label-row">
                  <label htmlFor="password">Password</label>
                  <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                </div>
                <div className="input-container">
                  <FiLock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button 
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              
              <div className="form-group remember-me">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <span className="checkmark"></span>
                  <span>Remember me for 30 days</span>
                </label>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`login-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner"></div>
                ) : (
                  'Log In'
                )}
              </motion.button>
            </form>
            
            <p className="signup-prompt">
              Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;