import React,{useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider';
import logo from "../images/logo.png";
import Sidebar from "./Sidebar";
import axios from 'axios'
import logout from "../images/logout.png";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat';
import user1 from "../images/user.png";

function ToDo (){
    const [{user}] = useStateValue();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {

            axios.get('http://localhost:4003/invoice/'+user)
            .then(res => {
                setTableData(res.data);
            });
        
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form >
            <div >
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
                        {tableData.map((row)=>{
                            return(
                                <tr>
                                    <td>{row.id}</td>
                                    <td>{row.invoice_id}</td>
                                    <td>{dateFormat(row.createdAt,"dd-mm-yyyy")}</td>
                                    <td>{row.amount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </form>
    );
}

function CusUpdate() {

    const [todos, setTodos] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {

        axios.get('http://localhost:4003/invoice/'+user)
        .then(response => {
            setTodos(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })

    }, []);

    return (<>
        {!user?(<div>
            <h1>No user</h1>
        </div>
        ):(
            <div className='MainContainer'>
                <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user1} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>
            <div className="invoiceTable">
               <ToDo todo={todos}/>
            </div>
            </div>
        )}
    </>)



}

export default CusUpdate
