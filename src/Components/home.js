import React, {useState} from 'react'
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import homeVector from "../images/homevector.png"
import homeEllipse from "../images/homeEllipse.png"
import homeBanner from "../images/banner.png"
import { Link } from "react-router-dom";

 

function Home() {

    
    const [payableCount] = useState("08");
    const [activeCount] = useState("03");
    return (
        <div className='MainContainer'>
                <div className='containermini'>
                    <img src={logo} className='logo' />
                    <img src={user} className='user' />
                    <Sidebar />
                    <img src={logout} className='logout' />
                </div>
                <div className = "homebox1">
                    <img src={homeVector} className='homeVector' />
                    <img src={homeEllipse} className='homeEllipse' />
                    <p1>PRESCRIPTION medicine at your DOORSTEP</p1>
                    <Link to= "/makeOrder">
                        <button type="button" className = "homeButton" >Order Now</button>
                    </Link>
                </div>
                <div className = "homebox2">
                    <img src={homeBanner} className='homeBanner' />   
                </div>
                <div className = "homebox3">
                    <p2>Active</p2>  
                    <p5>{activeCount}</p5> 
                </div>
                <div className = "homebox4">
                    <p3>Payable</p3>
                    <p4>{payableCount}</p4>     
                </div>
        </div>
    )
}

export default Home
