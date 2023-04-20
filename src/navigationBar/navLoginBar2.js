import React from "react";


const NavLoginBar2 = ()=>{
    return (
        <div id="navLoginBar">
        <span id="logo">
            <a>Tuner</a>
        </span>
        <span>
            <input type="text" id="search" placeholder='Search'/>
        </span>
        <span id="myvideos"><a>My Videos</a></span>
        <span id="stick"> | </span>
        <span id="upload"><a>Upload</a></span>
        <span id="stick"> | </span>
        <span id="SignOut"><a>Sign out</a></span>
    </div>
    )
}

export default NavLoginBar2