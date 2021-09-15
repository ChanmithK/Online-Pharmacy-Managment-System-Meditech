import React,{useEffect, useState} from 'react'
import logo from "../images/logo.png";
import user1 from "../images/user.png";
import Sidebar from "./Sidebar";
import logout1 from "../images/logout.png";
import homeVector from "../images/homevector.png"
import homeEllipse from "../images/homeEllipse.png"
import homeBanner from "../images/banner.png"
import { Link,useHistory } from "react-router-dom";
import axios from 'axios'
import { useStateValue } from '../StateProvider';

 

function Home() {
    const [orderCount, setOrderCount] = useState(0);
    const [processingCount, setProcessingCount] = useState(0);
    const [{user}] = useStateValue();
    const history =useHistory();
    const [payableCount] = useState("08");
    const [activeCount] = useState("03");
    const logout = ()=>{
        localStorage.removeItem("user");
        history.push("/login");
    }
    
    useEffect(() => {
        
        axios.get('http://localhost:4003/order/'+user)
        .then(response => {
            setOrderCount(response.data.length);
        })
        .catch(function (error) {
            console.log(error);
        });
        
        axios.get('http://localhost:4003/order/count/'+user)
        .then(response => {
            setProcessingCount(response.data.length);
        })
        .catch(function (error) {
            console.log(error);
        });
}, []);

    return (
        <div className='MainContainer'>
                <div className='containermini'>
                    <img src={logo} className='logo' />
                    <img src={user1} className='user' />
                    <Sidebar />
                    <img src={logout1} onClick={logout} className='logout' />
                </div>
                <div className = "homebox1">
                    <img src={homeVector} className='homeVector' />
                    <img src={homeEllipse} className='homeEllipse' />
                    <p1>PRESCRIPTION medicine at your DOORSTEP</p1>
                    <Link to= "/description">
                        <button type="button" className = "homeButton" >Order Now</button>
                    </Link>
                </div>
                <div className = "homebox2">
                    <img src={homeBanner} className='homeBanner' />   
                </div>
                <div className = "homebox3">
                    <p2>Active</p2>  
                    <p5>{orderCount}</p5> 
                </div>
                <div className = "homebox4">
                    <p3>Payable</p3>
                    <p4>{processingCount}</p4>     
                </div>
        </div>
    )
}

export default Home
