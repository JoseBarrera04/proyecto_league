import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../database/firebase.js';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const manejarRegistro = async (e) => {
        e.preventDefault();
        setError(""); // Limpia mensajes de error previos
        setSuccess("");

        // Validaciones básicas
        if (!username || !email || !password) {
            setError("Todos los campos son obligatorios");
            return;
        }
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        try {
            // Crear usuario con email y contraseña en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar datos adicionales en Firestore
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                createdAt: new Date().toISOString(),
            });

            setSuccess("Registro exitoso! Redirigiendo...");
            setTimeout(() => {
                navigate("/login"); // Redirige a la página de login después de 2 segundos
            }, 2000);
        } catch (error) {
            console.error("Error al registrar:", error.message);
            setError(error.message || "Error al registrar el usuario");
        }
    };

    return (
        <div>
            <form className="wrapper" onSubmit={manejarRegistro}>
                <h1>Registration</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>
                <div className="remember-me">
                    <label>
                        <input type="checkbox" required />
                        I agree to sell my soul
                    </label>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>
                        Already have an account? <Link to="/login" className="link">Log In</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;