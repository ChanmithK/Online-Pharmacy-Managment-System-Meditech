import React,{useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider';
import logo from "../images/logo.png";
import Sidebar from "./Sidebar";
import axios from 'axios'
import logout from "../images/logout.png";
import { Link, useHistory } from "react-router-dom";
import dateFormat from 'dateformat';
import user1 from "../images/user.png";

function ToDo (props){
    const history = useHistory();
    const [{user}] = useStateValue();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {

            axios.get('http://localhost:4003/order/'+user)
            .then(res => {
                setTableData(res.data);
            });
        
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

   const onDelete = (id) => {
        axios.delete('http://localhost:4003/order/'+id)
        .then(response => {
            alert(id+" Order Denied");
            // history.push("/orders");
            window.location.reload(false);
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    return(
        <form >
            <div>
                <table>
                    <thead>
                        <tr>
                           <th style={{paddingLeft: "0px"}} >Order ID</th> 
                           <th style={{paddingLeft: "0px"}}>Time</th> 
                           <th style={{paddingLeft: "0px"}}>Amount</th> 
                           <th style={{paddingLeft: "12px"}}>Status</th>
                           <th style={{paddingLeft: "52px"}}>Invoice</th>  
                           {/* <th style={{paddingLeft: "52px"}}>Action</th>  */}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row)=>{
                            return(
                                 <tr>
                                 <td>{row.id}</td>
                                 <td>{dateFormat(row.createdAt,"dd-mm-yyyy")}</td>
                                 <td>{row.amount}</td>
                                 <>              
                         
                                     {row.ph_status === "processing" && (
                                             <td><div className="status-container" style={{ backgroundColor: "#92EF00" }}>{row.ph_status}
                                             </div></td>
                                     )} 
                                     {row.ph_status === "unavailable" && (
                                             <td><div className="status-container" style={{ backgroundColor: "#FA1809" }}>{row.ph_status}</div></td>
                                     )} 
                                     {row.ph_status === "pending" && (
                                             <td><div className="status-container" style={{ backgroundColor: "#F5FA09" }}>{row.ph_status}</div>
                                                 </td>
                                     )} 
                                     </>
                                     {row.ph_status === "processing" && (
                                               
                                                 <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>View</button></Link> </td>
                                             
                                         )} 
                                         {row.ph_status === "pending" && (
                                              
                                                 <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>View</button></Link> </td>
                                            
                                         )} 
                                         {row.ph_status === "unavailable" && (
                                             <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc52" }}>View</button></Link> </td>
                                         )} 
                        
                                 <>              
                                         {row.ph_status === "processing" && (
                                             <div>    
                                                  <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc52" }}>Accept</button></Link></td>
                                                  <td><Link to = {"#"}><button className="order-button"style={{ backgroundColor: "#0464fc52" }}>Deny</button></Link></td> 
                                             </div>
                                         )} 
                                         {row.ph_status === "unavailable" && (
                                             <div>    
                                                 <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc52" }} >Accept</button></Link></td>
                                                 <td><Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}
                                                 onClick={() =>onDelete(row.id)}>Deny</button></Link></td> 
                                            </div>
                                         )} 
                                         {row.ph_status === "pending" && (
                                             <div>    
                                                 <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>Accept</button></Link></td>
                                                 <td><Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}
                                                 onClick={() =>onDelete(row.id)}>Deny</button></Link></td> 
                                            </div>
                                         )} 
                                 </> 
                             </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </form>
    );
}


function Orders() {
    const [orderCount, setOrderCount] = useState(0);
    const [processingCount, setProcessingCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [{user}] = useStateValue();

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
        axios.get('http://localhost:4003/order/pendingCount/'+user)
        .then(response => {
            setPendingCount(response.data.length);
        })
        .catch(function (error) {
            console.log(error);
        });
}, []);

// useEffect(() => {

//     axios.get('http://localhost:4003/order/count/'+user)
//     .then(response => {
//         setProcessingCount(response.data.length);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// }, []);
   

    return (<>
        {!user?(<div>
            <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user1} className='user' />
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
                <h1>
                    Log In
                </h1>
            </div>
        </div>
        </div>
        ):(
            <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user1} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>
            
            <div className="ordersMiniBox1">
                <p10>Processing</p10>
                <p16>{processingCount}</p16>

            </div>
            <div className="ordersMiniBox2">
                <p9>Pending</p9>
                <p17>{pendingCount}</p17>

            </div>
            <div className="ordersMiniBox3">
                <p8>Orders</p8>
                <p15>{orderCount}</p15>
                
            </div>
            <div className="ordersTable">
               <ToDo todo={todos}/>
            </div>
        </div>
        )}
    </>)



}

export default Orders
