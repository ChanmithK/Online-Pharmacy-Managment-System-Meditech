import React, {Component} from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import axios from 'axios'

const Todo = props => (
    <tr>
        <td>{props.todo.orderId}</td>
        <td>{props.todo.invoiceID}</td>
        <td>{props.todo.date}</td>
        <td>{props.todo.amount}</td>
        <td>{props.todo.pharmacistName}</td>
        {/* <td>
            <Link to = {"props.nic"}>Accept</Link>
        </td>
        <td>
            <Link to = {"props.nic"}>Deny</Link>
        </td> */}
    </tr>
)



class History extends Component{

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
    
    historyList(){
        return this.state.todos.map(function(currentHistory, i) {
            return <Todo todo={currentHistory} key={i}/>
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
            <div className="historyTable">
            <table>
                    <thead>
                        <tr>
                            <th style={{paddingLeft: "24px"}}>Order ID</th>
                            <th style={{paddingLeft: "24px"}}>Invoice ID</th>
                            <th style={{paddingLeft: "74px"}}>Date</th>
                            <th style={{paddingLeft: "24px"}}>Amount</th>
                            <th style={{paddingLeft: "24px"}}>Pharmacist</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.historyList() }
                    </tbody>
                </table>
            </div>
        </div>
    )
    }
}

export default History
