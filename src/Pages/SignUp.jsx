import { Link } from 'react-router-dom';
import Netflixlogo from '../assets/netflix-logo.png';

export default function SignUp() {
  const [username, setUsername] = usestate('');
  const [password, setPassword] = usestate('');

  return (
    <div className="login">
      <img src={Netflixlogo} alt="netflix-logo" className="login-logo" />
      <div className="login-form">
        <h2>SignUp Now</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter your Name" />
          <input type="password" placeholder="Enter your Password" />
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
