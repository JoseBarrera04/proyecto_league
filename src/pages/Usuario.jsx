import React from "react";
import User from "../components/User.jsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Usuario = () => {
    const { isAuthenticated } = useSelector((state) => state.user);
    const navigate = useNavigate();

    if(!isAuthenticated) {
        navigate("/login");
        return null;
    }

    return (
        <div>
            <h1> Usuario: </h1>
            <User/>
        </div>
    );
};

export default Usuario;