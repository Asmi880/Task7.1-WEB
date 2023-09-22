import React from 'react';
import { Link } from 'react-router-dom'; 
import Signup from './Signup';

const Login = () => {
  

  return (
    <div>
      <h2>
        {/* Use the Link component to navigate to Signup */}
        <Link to="/signup">Signup</Link>
      </h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
