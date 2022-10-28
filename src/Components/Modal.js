import React, { useEffect, useState } from "react";
import "./Modal.css";
import axios from 'axios';


function Modal({ setOpenModal, props }) {
    const [allUsers, setAllUsers] = useState([])
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            setAllUsers(response.data)
            

        })
        .catch(err =>{
            console.log(err)
            setAllUsers(undefined)
        })
    })


    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <h1 className="title">Modal</h1>
                    <button onClick={() => {setOpenModal(false);}}>x</button>
                </div>
                <div className="body">
                    {allUsers.map((user) =>{
                        return(
                            <div className="results" key={user.id}>
                                <div>
                                    <img src='https://picsum.photos/200/300?random=1' className="userPic"></img>
                                </div>                                    
                                <div>
                                    <p className="user_name">{user.name}</p>
                                    <p className="street">{user.address['street']}, {user.address['suite']} {user.address['city']}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Modal;