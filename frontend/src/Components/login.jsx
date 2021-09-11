import React, {Component} from "react";
import loginVector from "../images/loginVector.png";
import loginEllipse from "../images/loginEllipse.png";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import axios from 'axios'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

class Login extends Component {

    constructor(props){
        super(props);
        

        this.onChangeNic = this.onChangeNic.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nic:'',
            password:'',
            submit:false
        }
    }


    onChangeNic(e) {
        this.setState({
            nic: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        

        console.log(`Form submitted:`);
        console.log(`nic: ${this.state.nic}`);
        console.log(`password: ${this.state.password}`);
        console.log(`submit: ${this.state.submit}`);
        



        const newLogin = {
            nic:this.state.nic,
            password:this.state.password,
            submit:this.state.submit
        }

        axios.post('http://localhost:4003/customer/login', newLogin)
        .then(res => {
            console.log(res.data);
            /*dispatch({
                type: actionTypes.SET_USER,
                user: userArray[0],
                token: userArray[1],
            });*/
            //this.props.history.push('/home')
        });
       

        this.setState({
            nic:'',
            password:'',
            submit:false
        })

    }


    render(){

    return (
    <div className='MainContainer'>
        <div className = "loginImage">
            <img src={loginVector} className='loginVector' />
            <img src={loginEllipse} className='loginEllipse' />
        </div>
        
        <div className='loginBox'>
            <img src={logo} className='logo1' />
            <p11>Sign in</p11>
            <form onSubmit ={this.onSubmit}>
                <div class="loginContainer">
                    <label for="uname"><b>NIC</b></label>
                    <input type="number" placeholder="Enter NIC" value={this.state.nic}
                           onChange = {this.onChangeNic} name="uname" required/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={this.state.password}
                           onChange = {this.onChangePassword} name="psw" required/>   
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
}

export default Login
