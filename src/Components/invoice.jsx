import React, {Component} from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import axios from 'axios'
import logout from "../images/logout.png";


const Todo = props => (
    <tr>
        <td>{props.todo.orderId}</td>
        <td>{props.todo.invoiceID}</td>
        <td>{props.todo.date}</td>
        <td>{props.todo.amount}</td>
        {/* <td>
            <Link to = {"props.nic"}>Accept</Link>
        </td>
        <td>
            <Link to = {"props.nic"}>Deny</Link>
        </td> */}
    </tr>
)

class Invoice extends Component {

    
    constructor(props){
        super(props);
        

        this.state = {todos:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:4003/invoice/')
        .then(response => {
            this.setState ({todos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    invoiceList(){
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

            <div className="invoiceTable">
            <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Invoice ID</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.invoiceList() }
                    </tbody>
                </table>
            </div>
        </div>
    )
    }
}

export default Invoice
