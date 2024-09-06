import { Link } from 'react-router-dom';
import Netflixlogo from '../assets/netflix-logo.png';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function submitUser(e) {
    e.preventDefault();
    if (username && password && email) {
      const userData = {
        userName: username,
        password: password,
        emailId: email,
      };
      axios
        .post('http://localhost:2022/user/signUp', userData)
        .then((res) => console.log(res.data, 'signed in'))
        .catch((err) => console.log(err.data));
    }
    setEmail('');
    setPassword('');
    setUsername('');
  }

  console.log(submitUser);

  return (
    <div className="login">
      <img src={Netflixlogo} alt="netflix-logo" className="login-logo" />
      <div className="login-form">
        <h2>SignUp Now</h2>
        <form onSubmit={submitUser}>
          <input
            type="email"
            required
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Enter your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign Up</button>
        </form>
        <div className="form-switch">
          <p>
            Already have an Account
            <Link to="/Login">
              <span>Sign In Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
