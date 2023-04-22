import React from "react";
import { Link } from "react-router-dom";

const NavLoginBar2 = () => {
    return (
        <div id="navLoginBar">
            <span id="logo">
                <Link to="/signinedpage">
                    <a>Tuner</a>
                </Link>
            </span>
            <span>
                <input type="text" id="search" placeholder='Search' />
            </span>
            <span id="myvideos">
                <Link to="/MyVideos">
                    <a>My Videos</a>
                </Link>
            </span>
            <span id="stick"> | </span>
            <span id="upload">
                <Link to="/UploadWindow">
                    <a>Upload</a>
                </Link>
            </span>
            <span id="stick"> | </span>
            <span id="SignOut">
                <Link to="/">
                    <a>Sign out</a>
                </Link>
            </span>
        </div>
    )
}

export default NavLoginBar2