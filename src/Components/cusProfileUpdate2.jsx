import React,{useEffect, useState} from 'react'
import SignUpVector from "../images/signUpVector.png";
import signUpEllipse from "../images/signUpEllipse.png";
import logo2 from "../images/logo.png";
import axios from 'axios'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { Link, useHistory } from "react-router-dom";

function ToDo (props){
    const [{user}] = useStateValue();
    const history = useHistory();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastname] = useState();
    const [nic, setNic] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [province, setProvince] = useState();
    const [postal, setPostal] = useState();

    useEffect(() => {
        if(props.todo !== null){
            setFirstName(props.todo.firstName);
            setLastname(props.todo.lastName);
            setNic(props.todo.nic);
            setPhone(props.todo.phone);
            setEmail(props.todo.email);
            setStreet(props.todo.street);
            setCity(props.todo.city);
            setProvince(props.todo.province);
            setPostal(props.todo.pCode);
        }
    },[props]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSignUp = {
            nic:nic,
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone,
            street:street,
            city:city,
            province:province,
            pCode:postal,
        }
    
        axios.post('http://localhost:4003/customer/'+user, newSignUp)
        .then(res => {
            console.log(res.data);
            alert("updated");
            history.goBack();
        });
    }

    return(
        <form >
            <div class="SignUpContainer">
                <table className="signUptable">
                    <tr>
                        <td>
                        <label for="fname" ><b>First Name</b>
                        <input type="text" name="fname"
                        onChange={ (e)=>{setFirstName(e.target.value)} }
                        value={firstName} required/></label>
                        </td>&nbsp; &nbsp;
                        <td>
                        <label for="lname"><b>Last Name</b></label>
                        <input type="text" name="lname" value={lastName} required/> 
                        </td>
                    </tr>
                </table>
                <label for="nic" ><b>NIC</b>
                <input type="text" name="nic" value={nic}
                    /></label>
                <label for="phone" ><b>Phone</b>
                <input type="tel" name="phone"  value={phone}
                    required/></label>  
                <label for="email" ><b>Email</b>
                <input type="text" name="email"  value={email}
                    required/></label>

                <table className="signUptable">
                    <tr>
                        <td>
                        <label for="street" ><b>Street</b>
                        <input type="text" name="street"  value={street}
                    required/></label>
                        </td>&nbsp; &nbsp;
                        <td>
                        <label for="city"><b>City</b></label>
                        <input type="text" name="city"  value={city}
                    required/> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label for="province" ><b>Province</b>
                        <input type="text" name="province"  value={province}
                    required/>
                            </label>
                        </td>&nbsp; &nbsp;
                        <td>
                        <label for="pcode"><b>Postal code</b></label>
                        <input type="number" name="pcode" value={postal}
                    required/> 
                        </td>
                    </tr>
                </table>

                {/* <label for="psw"><b>Password</b></label>
                <input type="password" name="psw" value={this.state.password}
                    />      */}
                {/* <label for="cpsw"><b>Confirm Password</b></label>
                <input type="password" name="cpsw" required/> */}

                <button type="submit" onClick={handleSubmit}>Update</button>
                
            </div>
        </form>
    );
}

function CusUpdate() {

    const [todos, setTodos] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {

        axios.get('http://localhost:4003/customer/'+user)
        .then(response => {
            setTodos(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })

    }, []);

    return (<>
        {!user?(<div>
            <h1>No user</h1>
        </div>
        ):(
            <div className='MainContainer'>
                <div className= "signUplink">
                    <img src={logo2} className='logo2' />
                    <img src={SignUpVector} className='SignUpVector' />
                    <img src={signUpEllipse} className='signUpEllipse' />
                </div>
                <div className="signUpBox">
                    <p12>Update Account</p12>
                    <ToDo todo={todos}/>
                </div>
            </div>
        )}
    </>)



}

export default CusUpdate
