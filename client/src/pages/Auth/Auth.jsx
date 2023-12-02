import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.svg";
import AboutAuth from "./AboutAuth";
import { signup, login } from '../../actions/auth';

const Auth = () => {
  const [isSignUp, setIsSignup] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password) {
      alert("Enter your email and password")
    }
    else if(isSignUp) {
      if(!name){
        alert("Enter a name to continue...")
      }
      dispatch(signup({name, email, password}, navigate))
    }else{
      dispatch(login({email, password}, navigate))
    }
  }

  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container">
        {!isSignUp && (
          <img
            src={icon}
            alt="StackOverflow icon"
            className="login-logo"
          />
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}}/>
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div style={{display:"flex", justifyContent:'space-between'}}>
              <h4>Password</h4>
              {!isSignUp && <p style={{ color: "#007ac6", fontSize:'14px' }}>Forgot password?</p>}
            </div>
            <input type="password" name="pass" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
            {isSignUp && (
              <p style={{ fontSize: "13px", color: "#666767" }}>
                Password must contain atleast 8 characters, <br />including atleast 1
                number and 1 Capital letter
              </p>
            )}
          </label>
          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px", paddingLeft:'9px'}}>
                Opt-in to receive occasional product updates, <br />user research
                invitations, company <br />announcements  and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignUp ? "Sign Up" : "Log in"}
          </button>
          {isSignUp && (
            <p style={{ fontSize: "13px", color: "#666767" }}>
              By clicking "Sign Up", you agree to our{" "}
              <a
                href="https://stackoverflow.com/legal/terms-of-service/public"
                target="_blank"
                style={{ textDecoration: "none", color: "#007ac6" }}
              >
                terms of <br />service
              </a>
              ,{" "}
              <a
                href="https://stackoverflow.com/legal/privacy-policy"
                target="_blank"
                style={{ textDecoration: "none", color: "#007ac6" }}
              >
                privacy policy
              </a>{" "}
              and{" "}
              <a
                href="https://stackoverflow.com/legal/cookie-policy"
                target="_blank"
                style={{ textDecoration: "none", color: "#007ac6" }}
              >
                cookie policy
              </a>
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
