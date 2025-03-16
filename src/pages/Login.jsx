import React, { useState } from 'react';
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice.jsx";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const manejarLogin = (e) => {
        e.preventDefault();
        const user = {username: username, password: password};
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(login(user));
        navigate("/usuario");
    }

    return (
        <div>
            <form className = {"wrapper"} onSubmit = {manejarLogin}>
                <h1> Login </h1>
                <div className = {"input-box"}>
                    <input type = {"text"} placeholder = {"Username"} required = {true} value = {username} onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className = {"icon"}/>
                </div>
                <div className = {"input-box"}>
                    <input type = {"password"} placeholder = {"Password"} required = {true} value = {password} onChange={(e) => setPassword(e.target.value)}/>
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