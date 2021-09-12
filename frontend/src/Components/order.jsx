import React, {Component} from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import axios from 'axios'
import logout from "../images/logout.png";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat';

const Todo = props => (
    <tr>
        <td>{props.todo.order_id}</td>
        <td>{dateFormat(props.todo.createdAt,"dd-mm-yyyy")}</td>
        <td>{props.todo.amount}</td>
        <>              

            {props.todo.ph_status === "processing" && (
                    <td><div className="status-container" style={{ backgroundColor: "#92EF00" }}>{props.todo.ph_status}
                    </div></td>
            )} 
            {props.todo.ph_status === "unavailable" && (
                    <td><div className="status-container" style={{ backgroundColor: "#FA1809" }}>{props.todo.ph_status}</div></td>
            )} 
            {props.todo.ph_status === "pending" && (
                    <td><div className="status-container" style={{ backgroundColor: "#F5FA09" }}>{props.todo.ph_status}</div>
                        </td>
            )} 
            </>
        
        <td>
            <Link to = {"props.nic"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>View</button></Link>
        </td>
        
        <>              

                {props.todo.ph_status === "processing" && (
                    <div>    
                         <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc52" }}>Accept</button></Link></td>
                         <td><Link to = {"props.nic"}><button className="order-button"style={{ backgroundColor: "#0464fc" }}>Deny</button></Link></td> 
                    </div>
                )} 
                {props.todo.ph_status === "unavailable" && (
                    <div>    
                        <td> <Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }} >Accept</button></Link></td>
                        <td><Link to = {"#"}><button className="order-button" style={{ backgroundColor: "#0464fc" }}>Deny</button></Link></td> 
                   </div>
                )} 
                {props.todo.ph_status === "pending" && (
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
               <ToDo todo={todos}/>
            </div>
        </div>
    )
}
}

export default Order

