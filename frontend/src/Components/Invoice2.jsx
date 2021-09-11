import React,{useEffect, useState} from 'react'
import SignUpVector from "../images/signUpVector.png";
import signUpEllipse from "../images/signUpEllipse.png";
import logo2 from "../images/logo.png";
import axios from 'axios'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { Link, useHistory } from "react-router-dom";

function ToDo (props){
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
            <div class="SignUpContainer">
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
                                    <td>{row.orderId}</td>
                                    <td>{row.invoiceID}</td>
                                    <td>{row.date}</td>
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
                <div className= "signUplink">
                    <img src={logo2} className='logo2' />
                    <img src={SignUpVector} className='SignUpVector' />
                    <img src={signUpEllipse} className='signUpEllipse' />
                </div>
                <div className="signUpBox">
                    <p12>Update Account</p12>
                    <ToDo todo={todos}/>
                </div>
            </div>
        )}
    </>)



}

export default CusUpdate
