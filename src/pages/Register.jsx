import {FaLock, FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import React, { useState } from "react";
import "../styles/Login.css";
import {Link} from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const manejarRegistro = (e) => {
        e.preventDefault();
        const userData = {
            username,
            password,
            email,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Usuario registrado con éxito");
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return(
        <div>
            <form className = {"wrapper"} onSubmit = {manejarRegistro}>
                <h1> Registration </h1>
                <div className = {"input-box"}>
                    <input type = {"text"} placeholder = {"Username"} required = {true} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className = {"icon"}/>
                </div>
                <div className = {"input-box"}>
                    <input type = {"text"} placeholder = {"Email"} required = {true} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <MdEmail className = {"icon"}/>
                </div>
                <div className = {"input-box"}>
                    <input type = {"password"} placeholder = {"Password"} required = {true} value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                    <p> Already have an account? <Link to = "/login" className = {"link"}> Log In </Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Register;