import {FaLock, FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import React from "react";
import "../styles/Login.css";

const Register = () => {
    return(
        <div>
            <form className = {"wrapper"}>
                <h1> Registration </h1>
                <div className = {"input-box"}>
                    <input type = {"text"} placeholder = {"Username"} required = {true}/>
                    <FaUser className = {"icon"}/>
                </div>
                <div className = {"input-box"}>
                    <input type = {"text"} placeholder = {"Email"} required = {true}/>
                    <MdEmail className = {"icon"}/>
                </div>
                <div className = {"input-box"}>
                    <input type = {"password"} placeholder = {"Password"} required = {true}/>
                    <FaLock className = {"icon"}/>
                </div>
                <div className = {"remember-me"}>
                    <label>
                        <input type = {"checkbox"} placeholder = {"Remember me"} required = {true}/>
                        I agree to sell my soul
                    </label>
                </div>
                <button type = {"submit"}> Register </button>
                <div className = {"register-link"}>
                    <p> Already have an account? <a href = {"/login"}> Log In </a> </p>
                </div>
            </form>
        </div>
    )
}

export default Register;