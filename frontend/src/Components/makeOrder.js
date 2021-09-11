import React from "react";
import logo from "../images/logo.png";
import user1 from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import axios from 'axios'
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import makeOrdervector from "../images/makeOrdervector.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from '../StateProvider';

function Order() {
    const [{user}] = useStateValue();
    const history = useHistory();
    const [file, setFile] = useState(null);
    const onInputChange = (e) =>{
        setFile(e.target.files[0])
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const data = new FormData();
       

        data.append('file',file);
        data.append('user',user);

        axios.post('http://localhost:4003/images/upload/'+user,data)
        .then((e) => {
            alert('Prescription upload successfully')
            history.push("/imageViwer");
            
        })
        .catch ((e) => {
            toast.error('Upload Error')
        })
    };

    return (
        <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user1} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>
            <div className = "makeOrderbox1">
                <img src={makeOrdervector} className='makeOrdervector' />  
                <p7>ORDER NOW & PAY LATER...</p7>
                <p6>Order Now</p6>
                <form onSubmit={onSubmit}>
                    <label for="fileUpload">Prescription</label>
                    <div className="makeOrderbox2">
                        <input className="makeOrderAttach" type="file" onChange ={onInputChange} id="fileUpload"/>
                    </div>
                    <label1 for="fileUpload">Description</label1>
                    {/* <div className="makeOrderbox3">
                        <textarea rows="4" cols="50" className="makeOrderDesc" name="comment" placeholder="Enter Description" form="usrform"/>
                    </div> */}
                   <button type="submit" className = "MakeOrderButton" >Submit</button>
                    <ToastContainer />
                </form>
                {/* <Link to= "/imageViwer"> <button type="submit" className = "ViewImage" >View</button></Link> */}
            </div>
        </div>
    )
}

export default Order
