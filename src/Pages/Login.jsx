// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Netflixlogo from '../assets/netflix-logo.png';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    // <Layout>
    <div className="login">
      <img src={Netflixlogo} alt="netflix-logo" className="login-logo" />
      <div className="login-form">
        <h2>LOGIN HERE</h2>
        <from onsubmit={handleSubmit}>
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
              New Netflix
              <Link to="/SignUp">
                <span>Sign Up Now</span>
              </Link>
            </p>
          </div>
        </from>
      </div>
    </div>
    // </Layout>
  );
}
