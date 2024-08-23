// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Netflixlogo from '../assets/netflix-logo.png';
import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <div className="login">
        <img src={Netflixlogo} alt="netflix-logo" className="login-logo" />
        <div className="login-form">
          <h2>LOGIN HERE</h2>
          <from>
            <input type="text" placeholder="Enter your Name" />
            <input type="password" placeholder="Enter your Password" />
            <button>Sign In</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
            <div className="form-switch">
              <p>
                Already have an Account
                <Link to="/SignIn">
                  <span>Sign In Now</span>
                </Link>
              </p>
            </div>
          </from>
        </div>
      </div>
    </Layout>
  );
}
