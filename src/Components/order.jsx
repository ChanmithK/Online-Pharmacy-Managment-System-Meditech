import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";

function Order() {
    return (
        <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>
            
            <div className="ordersMiniBox1">
                <p10>Processing</p10>

            </div>
            <div className="ordersMiniBox2">
                <p9>Pending</p9>

            </div>
            <div className="ordersMiniBox3">
                <p8>Orders</p8>
                
            </div>
            <div className="ordersTable">
                
            </div>
        </div>
    )
}

export default Order
