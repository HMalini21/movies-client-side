import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Netflixlogo from '../assets/netflix-logo.png';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username && password) {
      const userData = {
        userName: username,
        password: password,
      };
      console.log('login in', userData);
      axios
        .post('http://localhost:2022/user/login', userData)
        .then((res) => {
          if (res.data) {
            console.log(res.data, 'youre logged in');
            setErrorMessage('');

            navigate('/');
          } else {
            setErrorMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.log('Error:', err);
          setErrorMessage('You have an Logging Error');
        });
    }
    setUsername('');
    setPassword('');
  }

  return (
    // <Layout>
    <div className="login">
      <img src={Netflixlogo} alt="netflix-logo" className="login-logo" />
      <div className="login-form">
        <h2>LOGIN HERE</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login In</button>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="form-help">
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
        </form>
      </div>
    </div>
    // </Layout>
  );
}
{
  /* <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div> */
}
