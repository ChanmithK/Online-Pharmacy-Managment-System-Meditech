import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";

function History() {
    return (
        <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>
            <div className="invoiceTable">
            <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { this.invoiceList() } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History
