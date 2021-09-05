import React, { useState } from "react";
import SignUpVector from "../images/signUpVector.png";
import signUpEllipse from "../images/signUpEllipse.png";
import { NavLink } from "react-router-dom";
import logo2 from "../images/logo.png";
import Axios from 'axios'
function SignUp() {
    
    const [nicReg, setNicReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        Axios.post("https://localhost3010/register", {
            nic: nicReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

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
        <p12>Create Accountttt</p12>   
        {/* <form action="#" method="post"> */}
                <div class="SignUpContainer">
                    {/* <table className="signUptable">
                        <tr>
                            <td>
                            <label for="fname" ><b>First Name</b>
                            <input type="text" name="fname" required/></label>
                            </td>&nbsp; &nbsp;
                            <td>
                            <label for="lname"><b>Last Name</b></label>
                            <input type="password" name="lname" required/> 
                            </td>
                        </tr>
                    </table> */}
                    <label for="nic" ><b>NIC</b>
                    <input type="text" name="nic" required onChange={(e) =>{
                        setNicReg(e.target.value);
                    }}/></label>
                    {/* <label for="phone" ><b>Phone</b>
                    <input type="tel" name="phone" required/></label>  
                    <label for="email" ><b>Email</b>
                    <input type="text" name="email" required/></label>

                    <table className="signUptable">
                        <tr>
                            <td>
                            <label for="street" ><b>Street</b>
                            <input type="text" name="street" required/></label>
                            </td>&nbsp; &nbsp;
                            <td>
                            <label for="city"><b>City</b></label>
                            <input type="text" name="city" required/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label for="province" ><b>Province</b>
                            <select name="province" className="optionInput">
                                <option value="Central">Central</option>
                                <option value="Eastern">Eastern</option>
                                <option value=" North Central"> North Central</option>
                                <option value="Northern">Northern</option>
                                <option value="North Western">North Western</option>
                                <option value="Sabaragamuwa">Sabaragamuwa</option>
                                <option value="Southern">Southern</option>
                                <option value="Uva">Uva</option>
                                <option value=" Western"> Western</option>
                                
                            </select></label>
                            </td>&nbsp; &nbsp;
                            <td>
                            <label for="pcode"><b>Postal code</b></label>
                            <input type="number" name="pcode" required/> 
                            </td>
                        </tr>
                    </table> */}

                    <label for="psw"><b>Password</b></label>
                    <input type="password" name="psw" required onChange={(e) =>{
                        setPasswordReg(e.target.value);
                    }}/>     
                    {/* <label for="cpsw"><b>Confirm Password</b></label>
                    <input type="password" name="cpsw" required/> */}
                    <button type="submit" onClick ={register} >Sign up</button>
                    
                </div>
            {/* </form> */}
        </div>
    </div>
    )
}

export default SignUp
