import React,{useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider';
import {Link,useParams} from 'react-router-dom'
import dateFormat from 'dateformat';
import backNav from "../images/back.png";
import axios from 'axios'

function Invoice() {

    const [{user}] = useStateValue();
    const [id, setId] = useState();
    const [orderId, setOrderId] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [amount, setAmount] = useState();
    const params = useParams();
    const invoiceid = params.id;
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:4003/invoice/view/'+invoiceid)
        .then(response => {
            setId(response.data[0].invoice_id);
            setOrderId(response.data[0].order_id);
            setCreatedAt(response.data[0].createdAt);
            setAmount(response.data[0].amount);
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
            <div className="invoiceView">
            <Link to ="/orders" ><img src={backNav} className='backNav2' /></Link>
              <p17>Invoice</p17>
            </div>
            <div className="invoiceViewMiniBox1">     
               <p className="invoiceViewMiniBoxTopic1">Date</p>            
            <p className="invoiceViewMiniBoxValue1">{dateFormat(createdAt,"dd-mm-yyyy")} </p>                 
            </div>
            <div className="invoiceViewMiniBox2">
                <p className="invoiceViewMiniBoxTopic">Amount</p>
            <p className="invoiceViewMiniBoxValue2"> {amount} </p> 
            </div>
            <div className="invoiceViewMiniBox3">
                <p className="invoiceViewMiniBoxTopic">Invoice ID</p>
            <p className="invoiceViewMiniBoxValue3"> {id} </p>  
            </div>
            <div className="invoiceViewMiniBox4">
                <p className="invoiceViewMiniBoxTopic">Order ID</p>
            <p className="invoiceViewMiniBoxValue4"> {orderId} </p>  
            </div>
            <div className="invoiceViewTable">
                <form >
                    <div >
                        <table>
                            <thead>
                                <tr>
                                    <th>medicine</th>
                                    <th>quantity</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo)=>{
                                    return(
                                        <tr>
                                            <td>{todo.med_name}</td>
                                            <td>{todo.quantity}</td>
                                            <td>{todo.total}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
               
        </div>
        )}
    </>)



}

export default Invoice
