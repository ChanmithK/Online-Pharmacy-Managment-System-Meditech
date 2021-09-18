import React, {Component} from "react";
import SignUpVector from "../images/signUpVector.png";
import signUpEllipse from "../images/signUpEllipse.png";
import { NavLink } from "react-router-dom";
import logo2 from "../images/logo.png";
import axios from 'axios'
class  SignUp extends Component {
    
        constructor(props){
            super(props);
            
    
            this.onChangeNic = this.onChangeNic.bind(this);
            this.onChangeFname = this.onChangeFname.bind(this);
            this.onChangeLname = this.onChangeLname.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangePhone = this.onChangePhone.bind(this);
            this.onChangeStreet = this.onChangeStreet.bind(this);
            this.onChangeCity = this.onChangeCity.bind(this);
            this.onChangeProvince = this.onChangeProvince.bind(this);
            this.onChangePcode = this.onChangePcode.bind(this);
            this.onChangePassword = this.onChangePassword.bind(this);
            this.onChangePassword2 = this.onChangePassword2.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    
            this.state = {
                nic:'',
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                street:'',
                city:'',
                province:'',
                pCode:'',
                password:'',
                password2: "",
                submit:false
            }
        }

    
        onChangeNic(e) {
            this.setState({
                nic: e.target.value
            });
        }
        onChangeFname(e) {
            this.setState({
                firstName: e.target.value
            });
        }
        onChangeLname(e) {
            this.setState({
                lastName: e.target.value
            });
        }
        onChangeEmail(e) {
            this.setState({
                email: e.target.value
            });
        }
        onChangePhone(e) {
            this.setState({
                phone: e.target.value
            });
        }
        onChangeStreet(e) {
            this.setState({
                street: e.target.value
            });
        }
        onChangeCity(e) {
            this.setState({
                city: e.target.value
            });
        }
        onChangeProvince(e) {
            this.setState({
                province: e.target.value
            });
        }
        onChangePcode(e) {
            this.setState({
                pCode: e.target.value
            });
        }
    
        onChangePassword(e) {
            this.setState({
                password: e.target.value
            });
        }

        onChangePassword2(e) {
            this.setState({ password2: e.target.value });
        }

        onSubmit(e) {
            e.preventDefault();
            // window.location.reload(false);
            
    
            console.log(`Form submitted:`);
            console.log(`nic: ${this.state.nic}`);
            console.log(`Fname: ${this.state.firstName}`);
            console.log(`Lname: ${this.state.lastName}`);
            console.log(`Email: ${this.state.email}`);
            console.log(`Phone: ${this.state.phone}`);
            console.log(`Street: ${this.state.street}`);
            console.log(`City: ${this.state.city}`);
            console.log(`Province: ${this.state.province}`);
            console.log(`PCode: ${this.state.pCode}`);
            console.log(`password: ${this.state.password}`);
            console.log(`submit: ${this.state.submit}`);
            
            
            if (this.state.password !== this.state.password2) {
                alert("Password mismatch");
            } else {
            const newSignUp = {
                nic:this.state.nic,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                phone:this.state.phone,
                street:this.state.street,
                city:this.state.city,
                province:this.state.province,
                pCode:this.state.pCode,
                password:this.state.password,
                submit:this.state.submit
            }
    
            axios.post('http://localhost:4003/customer/sign-up', newSignUp)
            .then(res => { this.props.history.push('/home')})
            .catch ((e) => {
                alert("Try another NIC");
            });
           
    
            this.setState({
                nic:'',
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                street:'',
                city:'',
                province:'',
                pCode:'',
                password:'',
                password2: "",
                submit:false
            })
        }
    
        }
        
        
    render(){
    return (
        <div className='MainContainer'>
            <div className= "signUplink">
                <img src={logo2} className='logo2' />
                <img src={SignUpVector} className='SignUpVector' />
                <img src={signUpEllipse} className='signUpEllipse' />
                <label>
                        <span class="snup">Already have an account? <NavLink to='/login'>Sign in</NavLink></span>
                </label>
            </div>
            <div className="signUpBox">
            <p12>Create Account</p12>   
            <form onSubmit ={this.onSubmit}>
                    <div class="SignUpContainer">
                        <table className="signUptable">
                            <tr>
                                <td>
                                <label for="fname" ><b>First Name</b>
                                <input type="text" name="fname" value={this.state.firstName}
                           onChange = {this.onChangeFname} required/></label>
                                </td>&nbsp; &nbsp;
                                <td>
                                <label for="lname"><b>Last Name</b></label>
                                <input type="text" name="lname" value={this.state.lastName}
                           onChange = {this.onChangeLname} required/> 
                                </td>
                            </tr>
                        </table>
                        <label for="nic" ><b>NIC</b>
                        <input type="text" name="nic" value={this.state.nic}
                           onChange = {this.onChangeNic}/></label>
                        <label for="phone" ><b>Phone</b>
                        <input type="tel" name="phone"  value={this.state.phone}
                           onChange = {this.onChangePhone} required/></label>  
                        <label for="email" ><b>Email</b>
                        <input type="text" name="email"  value={this.state.email}
                           onChange = {this.onChangeEmail} required/></label>

                        <table className="signUptable">
                            <tr>
                                <td>
                                <label for="street" ><b>Street</b>
                                <input type="text" name="street"  value={this.state.street}
                           onChange = {this.onChangeStreet} required/></label>
                                </td>&nbsp; &nbsp;
                                <td>
                                <label for="city"><b>City</b></label>
                                <input type="text" name="city"  value={this.state.city}
                           onChange = {this.onChangeCity} required/> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label for="province" ><b>Province</b>
                                {/* <input type="text" name="province"  value={this.state.province}
                           onChange = {this.onChangeProvince} required/> */}
                                 
                                  <select
											id='role'
											className='cusProvince'
											value={this.state.province}
											onChange = {this.onChangeProvince}>
											<option value="Central">Central</option>
                                            <option value="Eastern">Eastern</option>
                                            <option value=" North Central"> North Central</option>
                                            <option value="Northern">Northern</option>
                                            <option value="North Western">North Western</option>
                                            <option value="Sabaragamuwa">Sabaragamuwa</option>
                                            <option value="Southern">Southern</option>
                                            <option value="Uva">Uva</option>
                                            <option value=" Western"> Western</option>
										</select>
                                        </label>
                                </td>&nbsp; &nbsp;
                                <td>
                                <label for="pcode"><b>Postal code</b></label>
                                <input type="number" name="pcode"  value={this.state.pCode}
                           onChange = {this.onChangePcode} required/> 
                                </td>
                            </tr>
                        </table>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" name="password" value={this.state.password}
                           onChange = {this.onChangePassword}/>     
                        <label for="cpsw"><b>Confirm Password</b></label>
                        <input type='password'
											    name='password2'
												value={this.state.password2}
												onChange={this.onChangePassword2}
												required/>
                        <button type="submit">Sign up</button>
                        
                    </div>
                </form>
            </div>
        </div>
        
       )
       
    }
}

export default SignUp
