import React,{useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider';

import axios from 'axios'

function ToDo (props){
    const [{user}] = useStateValue();
    const [tableData, setTableData] = useState([]);
    
    const [id, setID] = useState();
    const [order_id, setOrderId] = useState();
    const [createdAt, setDate] = useState();
    const [amount, setAmount] = useState();

    useEffect(() => {
            // const id = res.params.id
            axios.get('http://localhost:4003/invoice/view/2')
            .then(res => {
            setTableData(res.data);
            setID(props.todo.id);
            setOrderId(props.todo.order_id);
            setDate(props.todo.createdAt);
            setAmount(props.todo.amount);
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
                            <th>{id}</th>
                            <th>quantity</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row)=>{
                            return(
                                <tr>
                                    <td>{row.med_name}</td>
                                    <td>{row.quantity}</td>
                                    <td>{row.total}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </form>
    );
}

function Invoice() {

    const [todos, setTodos] = useState([]);
    const [{user}] = useStateValue();
    const [id, setId] = useState();
    const [order_id, setOrder_id] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [amount, setAmount] = useState();

    useEffect(() => {

        axios.get('http://localhost:4003/invoice/view/2')
        .then(response => {
            setId(response.data.id);
            setOrder_id(response.data.order_id);
            setCreatedAt(response.data.createdAt);
            setAmount(response.data.amount);
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
              <p17>Invoice</p17>
            </div>
            <div className="invoiceViewMiniBox1">                 
               <p></p>                  
            </div>
            <div className="invoiceViewMiniBox2">
                
            </div>
            <div className="invoiceViewMiniBox3">
                
            </div>
            <div className="invoiceViewMiniBox4">
                
            </div>
            <div className="invoiceViewTable">
            <ToDo todo={todos}/>
            </div>
               
        </div>
        )}
    </>)



}

export default Invoice
