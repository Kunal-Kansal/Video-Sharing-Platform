import React from "react";

const RegisterPage = () => {
    return (
        <div id="signinpage">
            <div id="signInimage">
                <div id="signintuner">Tuner</div>
                <div id="enjoymultiplevideos">Enjoy Multiple videos</div>
                <div id="atoneplace">at one place</div>
                <div  id="signinregister">
                <a>Sign In</a>
                </div>
            </div>
            <div id="registertitle">
                Register
            </div>
            <div id="registertocontinue">
            Register to continue access pages
            </div>
            <input type="text" id="nameInputfield" placeholder="Name" ></input>
            <input type="email" id="registeremailInputfield" placeholder="Email" ></input>
            <input type="text" maxLength="10" id="phoneInputfield"  placeholder="Phone"></input>
            <input type="text" id="professionInputfield" placeholder="Profession" ></input>
            <input type="password" id="registerpasswordInputfield" placeholder="Password"></input>
            <button id="registerpagebutton">Register</button>
        </div>
    )
}
export default RegisterPage

