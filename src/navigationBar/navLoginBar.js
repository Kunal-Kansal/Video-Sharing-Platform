import React from "react";
import { Link } from 'react-router-dom';


const NavLoginBar = () => {
    return (
        <div id="navLoginBar">
            <span id="logo">
                <Link to="/">
                    <a>Tuner</a>
                </Link>
            </span>
            <span>
                <input type="text" id="search" placeholder='Search' />
            </span>
            <span id="tologin">
                <Link to="/SignInPage">
                    <a>Login</a>
                </Link>
            </span>
            <span id="stick"> | </span>
            <span id="toregister">
                <Link to="/RegisterPage">
                    <a>Register</a>
                </Link>
            </span>
        </div>
    )
}

export default NavLoginBar