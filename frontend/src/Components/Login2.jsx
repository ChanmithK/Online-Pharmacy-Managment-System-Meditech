import React,{useState} from 'react'
import loginVector from "../images/loginVector.png";
import loginEllipse from "../images/loginEllipse.png";
import logo from "../images/logo.png";
import axios from 'axios'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { Link, useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function Login2() {
    
    const [nic, setNic] = useState("");
    const [password, setPassword] = useState("");
    const [, dispatch] = useStateValue();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        let newLogin = {
            nic:nic,
            password:password,
        }
        axios.post('http://localhost:4003/customer/login', newLogin)
        .then(res => {
            console.log(res.data);
            var userArray = [nic,res.data.token];
            localStorage.setItem('user', userArray);
            dispatch({
                type: actionTypes.SET_USER,
                user: nic,
                token: res.data.token,
            });
            history.push("/home");
        })
        .catch ((e) => {
            alert("You have entered an invalid username or password");
        })
    }
    
    
    return (
        
        <div className='MainContainer'>
        <div className = "loginImage">
            <img src={loginVector} className='loginVector' />
            <img src={loginEllipse} className='loginEllipse' />
        </div>
        
        <div className='loginBox'>
            <img src={logo} className='logo1' />
            <p11>Sign in</p11>
            <form onSubmit ={handleSubmit}>
                <div class="loginContainer">
                    <label for="uname"><b>NIC</b></label>
                    <input type="text" placeholder="Enter NIC" value={nic} onChange = {(e)=>{setNic(e.target.value)}} name="uname" required/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={password} onChange = {(e)=>{setPassword(e.target.value)}} name="psw" required/>   
                    <button type="submit">Sign in</button>
                    <label>
                      <span className="psw">Forgot <a href="#">password?</a></span>
                    </label>
                    <label>
                       
                       <span className="snup">New User? <Link to='/signUp'>Sign up</Link></span>
                       
                    </label>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login2
