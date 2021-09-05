import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import makeOrdervector from "../images/makeOrdervector.png";

function Order() {
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
                <form>
                    <label for="fileUpload">Prescription</label>
                    <div className="makeOrderbox2">
                        <input className="makeOrderAttach" type="file" id="fileUpload"/>
                    </div>
                    <label1 for="fileUpload">Description</label1>
                    <div className="makeOrderbox3">
                        {/* <input rows="4" cols="50" className="makeOrderDesc" type="text" placeholder="Enter Description"/> */}
                        <textarea rows="4" cols="50" className="makeOrderDesc" name="comment" placeholder="Enter Description" form="usrform"/>
                    </div>
                    <button type="button" className = "MakeOrderButton" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Order
