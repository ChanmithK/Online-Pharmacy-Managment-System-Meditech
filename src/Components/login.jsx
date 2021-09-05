import React from "react";
import loginVector from "../images/loginVector.png";
import loginEllipse from "../images/loginEllipse.png";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Login() {
    return (
    <div className='MainContainer'>
        <div className = "loginImage">
            <img src={loginVector} className='loginVector' />
            <img src={loginEllipse} className='loginEllipse' />
        </div>
        
        <div className='loginBox'>
            <img src={logo} className='logo1' />
            <p11>Sign in</p11>
            <form action="#" method="post">
                <div class="loginContainer">
                    <label for="uname"><b>NIC</b></label>
                    <input type="number" placeholder="Enter NIC" name="uname" required/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>   
                    <button type="submit">Sign in</button>
                    <label>
                      <span className="psw">Forgot <a href="#">password?</a></span>
                    </label>
                    <label>
                       
                       <span className="snup">New User? <NavLink to='/signUp'>Sign up</NavLink></span>
                       
                    </label>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login
