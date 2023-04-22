import React from "react";

const SignInPage = () => {
    return (
        <div id="signinpage">
            <div id="signInimage">
                <div id="signintuner">Tuner</div>
                <div id="enjoymultiplevideos">Enjoy Multiple videos</div>
                <div id="atoneplace">at one place</div>
                <div  id="signinregister">
                <a>Register</a>
                </div>
            </div>
            <div id="signintitle">
                Sign In
            </div>
            <div id="signintocontinue">
            Sign in to continue access pages
            </div>
            <input type="email" id="emailInputfield" placeholder="Email" ></input>
            <input type="password" id="passwordInputfield" placeholder="Password"></input>
            <button id="signinpagebutton">
                sign in
            </button>
        </div>
    )
}
export default SignInPage

