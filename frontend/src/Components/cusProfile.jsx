import React, {Component} from "react";
import SignUpVector from "../images/signUpVector.png";
import signUpEllipse from "../images/signUpEllipse.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo2 from "../images/profileUser.png";
import axios from 'axios'


const Todo = props => (
                <form >
                    <div class="SignUpContainer">
                        <table className="signUptable">
                            <tr>
                                <td>
                                <label for="fname" ><b>First Name</b>
                                <input type="text" name="fname" value={props.todo.firstNane}required/></label>
                                </td>&nbsp; &nbsp;
                                <td>
                                <label for="lname"><b>Last Name</b></label>
                                <input type="text" name="lname" value={props.todo.lastName} required/> 
                                </td>
                            </tr>
                        </table>
                        <label for="nic" ><b>NIC</b>
                        <input type="text" name="nic" value={props.todo.nic}
                           /></label>
                        <label for="phone" ><b>Phone</b>
                        <input type="tel" name="phone"  value={props.todo.phone}
                            required/></label>  
                        <label for="email" ><b>Email</b>
                        <input type="text" name="email"  value={props.todo.email}
                            required/></label>

                        <table className="signUptable">
                            <tr>
                                <td>
                                <label for="street" ><b>Street</b>
                                <input type="text" name="street"  value={props.todo.street}
                            required/></label>
                                </td>&nbsp; &nbsp;
                                <td>
                                <label for="city"><b>City</b></label>
                                <input type="text" name="city"  value={props.todo.city}
                            required/> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label for="province" ><b>Province</b>
                                <input type="text" name="province"  value={props.todo.province}
                            required/>
                                  </label>
                                </td>&nbsp; &nbsp;
                                <td>
                                <label for="pcode"><b>Postal code</b></label>
                                <input type="number" name="pcode"  value={props.todo.pCode}
                            required/> 
                                </td>
                            </tr>
                        </table>

                        {/* <label for="psw"><b>Password</b></label>
                        <input type="password" name="psw" value={this.state.password}
                           />      */}
                        {/* <label for="cpsw"><b>Confirm Password</b></label>
                        <input type="password" name="cpsw" required/> */}
                        <Link to={"/profileUpdate/"+props.todo.nic}>
                        <button type="submit">Update</button>
                        </Link>
                        
                    </div>
                </form>
    
    
)


class  Profile extends Component {
    
        constructor(props){
            super(props);
            

            this.state = {todos:[]};
        }

        componentDidMount() {
            axios.get('http://localhost:4003/customer/')
            .then(response => {
                this.setState ({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        detailList(){
            return this.state.todos.map(function(currentTodo, i) {
                if(currentTodo.nic == 200021702505)
                return <Todo todo={currentTodo} key={i}/>
            })
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
                                {this.detailList()}
                          
            
        </div>
        </div>
        
       )
       
    }
}

export default Profile
