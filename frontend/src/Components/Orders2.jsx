import React,{useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider';
import logo from "../images/logo.png";
import Sidebar from "./Sidebar";
import axios from 'axios'
import logout from "../images/logout.png";
import { Link, useHistory } from "react-router-dom";
import dateFormat from 'dateformat';
import user1 from "../images/user.png";

function TableTow(props){
    const [row, setRow] = useState(props.row);
    const history = useHistory();

    useEffect(() => {
        setRow(props.row);
    },[props.row])

    const onDelete = (id) => {
        axios.delete('http://localhost:4003/order/'+id)
        .then((response) => {
            alert(id+" Order Denied");
            history.push("/home");
            // window.location.reload(false);
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    return(
        <tr>
            <td>{row.id}</td>
            <td>{dateFormat(row.createdAt,"HH.MM",false)}</td>
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
                        
                            <td> <Link to = {"/invoiceView/"+row.id}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>View</button></Link> </td>
                        
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
}

function Orders() {
    const [tableMode, setTableMode] = useState(false);
        const [mode, setMode] = useState("");
    const [orderCount, setOrderCount] = useState(0);
    const [processingCount, setProcessingCount] = useState([]);
    const [pendingCount, setPendingCount] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [{user}] = useStateValue();
    const [q, setQ] = useState("");
    const [row, setRow] = useState();

    useEffect(() => {
    /*    
        axios.get('http://localhost:4003/order/'+user)
        .then(response => {
            
        })
        .catch(function (error) {
            console.log(error);
        });
        
        axios.get('http://localhost:4003/order/count/'+user)
        .then(response => {
            
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://localhost:4003/order/pendingCount/'+user)
        .then(response => {
            
        })
        .catch(function (error) {
            console.log(error);
        });
    */


    axios.get('http://localhost:4003/order/'+user)
        .then(res => {
            setTableData(res.data);
            setOrderCount(res.data.length);
            if(res.data){
                let pendings = res.data.filter((row)=>{
                    return row.ph_status === "pending"
                });
                setPendingCount(pendings.length);
                let processing = res.data.filter((row)=>{
                    return row.ph_status === "processing"
                });
                setProcessingCount(processing.length);
            }
        });
            
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    function search(rows) {
        //return rows.filter((row) =>row.id.toLowerCase().indexOf(q) > -1); 
        
    }

    const HandleStatus = (e) =>{
        let value = parseInt(e.target.value)
        if(value === 0){
            setTableMode(false);
        } else {
            setTableMode(true);
            if(value === 1){
                setMode(
                    tableData.filter((data)=>{
                        return data.ph_status === "processing";
                    })
                )
            } else if (value === 2){
                setMode(
                    tableData.filter((data)=>{
                        return data.ph_status === "pending";
                    })
                )
            } else if (value === 3){
                setMode(
                    tableData.filter((data)=>{
                        return data.ph_status === "unavailable";
                    })
                )
            } else {
                alert("OMG you got root");
            }
        }
    }

    const HandleSearch = async (e) =>{
        setQ(e.target.value);
        var value = await parseInt(e.target.value);
        var match = await tableData.filter((data)=>{
            return data.id === value;
        })
        if(match.lenght !== 0){
            setRow(match[0]);
        } else {
            setRow();
        }
    }

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
            <div className="selectBar">
                <select onChange={HandleStatus}>
                    <option value="0" selected>View All</option>
                    <option value="1">Processing</option>
                    <option value="2">Pending</option>
                    <option value="3">Unavailable</option>
                </select>  
            </div>
            <div className="searchbar">
                <search><input type="text" placeholder="Search Order ID..." value={q} onChange={HandleSearch} /></search>
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
                                {q?(
                                    <>
                                        {row?(
                                            <TableTow row={row} />
                                        ):(
                                            <tr>
                                                <td> </td>
                                            </tr>
                                        )}
                                    </>
                                ):(
                                <>
                                    {tableMode?(<>
                                        {mode.map((row)=>{
                                            return(
                                                <TableTow row={row} />
                                            )
                                        })}
                                    </>):(<>
                                        {tableData.map((row)=>{
                                            return(
                                                <TableTow row={row} />
                                            )
                                        })}
                                    </>)}
                                    
                                </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </form>

            </div>
        </div>
        )}
    </>)



}

export default Orders
