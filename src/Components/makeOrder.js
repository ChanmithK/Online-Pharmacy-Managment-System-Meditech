import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import axios from 'axios'
import { useState } from "react";
import makeOrdervector from "../images/makeOrdervector.png";

function Order() {
    const [file, setFile] = useState(null);
    const onInputChange = (e) =>{
        setFile(e.target.files[0])
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const data = new FormData();

        data.append('file',file);

        axios.post('http://localhost:4003/images/upload',data)
        .then((e) => {
            console.log('Success')
        })
        .catch ((e) => {
            console.error('Error',e)
        })
    };

    return (
        <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>
            <div className = "makeOrderbox1">
                <img src={makeOrdervector} className='makeOrdervector' />  
                <p7>ORDER NOW & PAY LATER...</p7>
                <p6>Order Now</p6>
                <form onSubmit={onSubmit }>
                    <label for="fileUpload">Prescription</label>
                    <div className="makeOrderbox2">
                        <input className="makeOrderAttach" type="file" onChange ={onInputChange} id="fileUpload"/>
                    </div>
                    <label1 for="fileUpload">Description</label1>
                    {/* <div className="makeOrderbox3">
                        <textarea rows="4" cols="50" className="makeOrderDesc" name="comment" placeholder="Enter Description" form="usrform"/>
                    </div> */}
                    <button type="submit" className = "MakeOrderButton" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Order
