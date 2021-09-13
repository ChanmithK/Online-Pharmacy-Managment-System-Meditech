import React,{useState} from 'react'
import loginVector from "../images/loginVector.png";
import loginEllipse from "../images/loginEllipse.png";
import logo from "../images/logo.png";
import user1 from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import axios from 'axios'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { Link, useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import makeOrdervector from "../images/makeOrdervector.png";


function Login2() {
    const [{user}] = useStateValue();
    const [nic, setNic] = useState(user);
    const [description, setDescription] = useState("");
    const [, dispatch] = useStateValue();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        let newLogin = {
            nic:nic,
            description:description,
        }
        axios.post('http://localhost:4003/order/makeOrder', newLogin)
        .then(res => {
            console.log(res.data);
            history.push("/makeOrder");
        })
        .catch ((e) => {
            alert("error puthe");
        })
    }
    
    
    return (
        
        <div className='MainContainer'>
         <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user1} className='user' />
                <img src={logout} className='logout' />
                <Sidebar />
            </div>
        
        <div className='makeOrderbox1'>
        <img src={makeOrdervector} className='makeOrdervector' />  
                <p7>ORDER NOW & PAY LATER...</p7>
                <p6>Order Now</p6>

            <form onSubmit ={handleSubmit}>
                    <label for="uname" style={{ marginTop:"20px"}}><b>NIC</b></label>
                    <input type="text" style={{ marginTop:"160px",width:"300px",marginLeft:"31px"}} placeholder="Enter NIC" value={nic} onChange = {(e)=>{setNic(e.target.value)}} name="uname" required/>
                    <label for="psw" style={{ marginTop:"150px"}}><b>Description</b></label>
                    <div className="makeOrderbox3">
                        <textarea rows="4" cols="50"  value={description} onChange = {(e)=>{setDescription(e.target.value)}} className="makeOrderDesc" name="comment" placeholder="Enter Description" form="usrform" required/>
                    </div>
                    <button type="submit" className = "MakeOrderButton">Upload Prescription</button>
            </form>
        </div>
    </div>
    )
}

export default Login2
