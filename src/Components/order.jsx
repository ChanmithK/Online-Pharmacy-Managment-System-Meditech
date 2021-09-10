import React, {Component} from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import axios from 'axios'
import logout from "../images/logout.png";
import { Link } from "react-router-dom";

const Todo = props => (
    <tr>
        <td>{props.todo.orderId}</td>
        <td>{props.todo.time}</td>
        <td>{props.todo.amount}</td>
        <>              

            {props.todo.pharmacistStatus === "processing" && (
                    <td><div className="status-container" style={{ backgroundColor: "#92EF00" }}>{props.todo.pharmacistStatus}
                    </div></td>
            )} 
            {props.todo.pharmacistStatus === "unavailable" && (
                    <td><div className="status-container" style={{ backgroundColor: "#FA1809" }}>{props.todo.pharmacistStatus}</div></td>
            )} 
            {props.todo.pharmacistStatus === "pending" && (
                    <td><div className="status-container" style={{ backgroundColor: "#F5FA09" }}>{props.todo.pharmacistStatus}</div>
                        </td>
            )} 
            </>
        
        <td>
            <Link to = {"props.nic"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>View</button></Link>
        </td>
        
        <>              

                {props.todo.pharmacistStatus === "processing" && (
                    <div>    
                         <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc52" }}>Accept</button></Link></td>
                         <td><Link to = {"props.nic"}><button className="order-button"style={{ backgroundColor: "#0464fc" }}>Deny</button></Link></td> 
                    </div>
                )} 
                {props.todo.pharmacistStatus === "unavailable" && (
                    <div>    
                        <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }} >Accept</button></Link></td>
                        <td><Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>Deny</button></Link></td> 
                   </div>
                )} 
                {props.todo.pharmacistStatus === "pending" && (
                    <div>    
                        <td> <Link to = {"props.nic"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>Accept</button></Link></td>
                        <td><Link to = {"props.nic"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>Deny</button></Link></td> 
                   </div>
                )} 
        </>
           
        
    </tr>
)


class Order extends Component {

    constructor(props){
        super(props);
        

        this.state = {todos:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:4003/order/')
        .then(response => {
            this.setState ({todos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    orderList(){
        return this.state.todos.map(function(currentOrders, i) {
            return <Todo todo={currentOrders} key={i}/>
        });
    }

    render(){
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
                        { this.orderList() }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
}

export default Order

