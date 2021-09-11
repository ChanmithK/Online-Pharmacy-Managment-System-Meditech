import React,{useEffect} from "react";
import logo from "../images/logo.png";
import user1 from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import axios from 'axios'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import makeOrdervector from "../images/makeOrdervector.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from '../StateProvider';

function ImageViwer() {
    const [{user}] = useStateValue();
    const history = useHistory();
    const [imagelink, setImagelink] = useState(null);

    useEffect(()=>{

        axios.get('http://localhost:4003/images/show/'+user)
        .then((reply) => {
            let link = "http://localhost:4003/uploads/"+reply.data.image.prescription+".png";
            setImagelink(link);
        })
        .catch ((reply) => {

        })

    },[user])

    return (
        <div className='MainContainer'>
            <div className='containermini'>
                <img src={logo} className='logo' />
                <img src={user1} className='user' />
                <Sidebar />
                <img src={logout} className='logout' />
            </div>
            <div className="ImageBox">
               <img className="ImageViewe" src={imagelink} />
            </div>
            
        </div>
    )
}

export default ImageViwer
