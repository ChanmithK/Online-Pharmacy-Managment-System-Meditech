import React,{useEffect, useState} from 'react'
import SignUpVector from "../images/profileUser.png";
import signUpEllipse from "../images/signUpEllipse.png";
import backNav from "../images/back.png";
import { Link } from "react-router-dom";
import logo2 from "../images/logo.png";
import axios from 'axios'
import { useStateValue } from '../StateProvider';

function ToDo (props){

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

    return(
        <form >
            <div class="ProfileContainer">
                <table className="signUptable">
                    <tr>
                        <td>
                        <label for="fname" ><b>First Name</b>
                        <input type="text" name="fname" value={firstName}required/></label>
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
                        <input type="number" name="pcode"  value={postal}
                    required/> 
                        </td>
                    </tr>
                </table>
                <Link to={"/profileUpdate/"}>
                <button type="submit">Edit Info</button>
                </Link>
                
            </div>
        </form>
    );
}

function CusProfile2() {

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

    }, [user]);
    

    return (<>
        {!user?(<div>
            <h1>No user</h1>
        </div>
        ):(
            <div className='MainContainer'>
                <div className= "signUplink">
                    <img src={logo2} className='profileLogo' />
                    <img src={SignUpVector} className='ProfileUpVector' />
                    <img src={signUpEllipse} className='ProfileEllipse' />
                </div>
                <div className="profileBox">
                    <Link to ="/home" ><img src={backNav} className='backNav' /></Link>
                    <p12>Profile</p12>
                    <ToDo todo={todos}/>
                </div>
            </div>
        )}
    </>)
}

export default CusProfile2
