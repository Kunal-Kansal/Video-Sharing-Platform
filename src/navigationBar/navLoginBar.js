import React from "react";


const NavLoginBar = ()=>{
    return (
        <div id="navLoginBar">
        <span id="logo">
            <a>Tuner</a>
        </span>
        <span>
            <input type="text" id="search" placeholder='Search'/>
        </span>
        <span id="tologin">
            <a>Login</a>
        </span>
        <span id="stick"> | </span>
        <span id="toregister">
            <a>Register</a>
        </span>
    </div>
    )
}

export default NavLoginBar