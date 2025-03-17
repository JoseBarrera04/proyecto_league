import React, { useState } from 'react';
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice.jsx";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../database/firebase.js';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUsername = async (username) => {
        const queryUser = query(collection(db, "users"), where("username", "==", username));
        const queryHelp = await getDocs(queryUser);

        if (!queryHelp.empty) {
            return queryHelp.docs[0].data().email;
        } else {
            return null;
        }
    }

    const manejarLogin = async (e) => {
        e.preventDefault();
        try {
            const userEmail = await getUsername(username);

            if (!userEmail) {
                alert("Usuario no existe");
                return;
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, userEmail, password);
                const fireBaseUser = userCredential.user;

                const queryUser = query(collection(db, "users"), where("email", "==", userEmail));
                const queryHelp = await getDocs(queryUser);
                let userData = null;
                queryHelp.forEach((doc) => {
                    userData = {
                        id: fireBaseUser.uid,
                        username: doc.data().username,
                        email: doc.data().email,
                        password: password,
                        profileIcon: doc.data().profileIcon || null,
                        rankedSolo: doc.data().rankedSolo || {
                            tier: "Esmeralda",
                            rank: "I",
                            lp: 0,
                            wins: 0,
                            loses: 0,
                        },
                        recentMatches: doc.data().recentMatches || [],
                    };
                });

                if (userData) {
                    dispatch(login(userData));
                    navigate("/usuario");
                } else {
                    alert("No se pudieron cargar los datos del usuario");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

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