import React from 'react';
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <form className = {"wrapper"}>
                <h1> Login </h1>
                <div className = {"input-box"}>
                    <input type = {"text"} placeholder = {"Username"} required = {true}/>
                    <FaUser className = {"icon"}/>
                </div>
                <div className = {"input-box"}>
                    <input type = {"password"} placeholder = {"Password"} required = {true}/>
                    <FaLock className = {"icon"}/>
                </div>
                <div className = {"remember-me"}>
                    <label>
                        <input type = {"checkbox"} placeholder = {"Remember me"} required = {false}/>
                        Remember me
                    </label>
                </div>
                <button type = {"submit"}> Login </button>
                <div className = {"register-link"}>
                    <p> Don´t have an account? <Link to = "/register" className = {"link"}> Register </Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;