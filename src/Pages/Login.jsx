export default function Login() {
  return (
    <div className="LoginForm">
      <h2>SignUp</h2>
      <form>
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter your Email" />
        <input type="password" placeholder="Enter your Password" />
        <button>Sign Up</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
      </form>
    </div>
  );
}
