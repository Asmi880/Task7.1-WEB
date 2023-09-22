import Input from "./Input"
import Button from "./Button"
import { useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"
import "./Signup.css";
import {createAuthUserWithEmailAndPassword, createuserdocfromAuth} from './firebase'
function Signup() {
  const [contact, setcontact] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = contact;

  async function handleClick(event) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createuserdocfromAuth(user, { displayName });
      console.log(user);
    } catch (error) {
      console.log("Error in creation", error.message);
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="input-group">
        <input
          name="displayName"
          type="text"
          placeholder="Name"
          onChange={handlepass}
        />
      </div>
      <div className="input-group">
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handlepass}
        />
      </div>
      <div className="input-group">
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handlepass}
        />
      </div>
      <div className="input-group">
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handlepass}
        />
      </div>
      <button onClick={handleClick}>Signup</button>
      <Link to="/login" className="link">
        Login
      </Link>
    </div>
  );
}

export default Signup;
