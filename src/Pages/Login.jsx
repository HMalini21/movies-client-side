import { useState } from 'react';
import Netflixlogo from '../assets/netflix-logo.png';

export default function Login() {
  const [signState, setSignState] = useState('Sign In');
  return (
    <div className="login">
      <img src={Netflixlogo} alt="netflix-logo" className="login-logo" />
      <div className="login-form">
        <h2>{signState}</h2>
        <form>
          {signState === 'Sign Up' ? <input type="email" placeholder="Enter your Email" /> : <></>}
          <input type="text" placeholder="Enter your Name" />
          {/* <input type="email" placeholder="Enter your Email" /> */}
          <input type="password" placeholder="Enter your Password" />
          {signState === 'Sign In' ? <button>Sign In</button> : <button>Sign Up</button>}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ? (
            <p>
              New to Netflix
              <span
                onClick={() => {
                  setSignState('Sign Up');
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an Account
              <span
                onClick={() => {
                  setSignState('Sign In');
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
