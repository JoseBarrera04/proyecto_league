import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { logout } from "../redux/slice/userSlice.jsx";

const User = () => {
    const { nombreInvocador, imagenPerfil } = useSelector((state) => state);
    const dispatch = useDispatch();

    const manejarLogOut = () => {
        dispatch(logout());
    }

    return (
        <div>
            <h2> {nombreInvocador} </h2>
            <img src = {imagenPerfil} alt="" />
            <button onClick = {manejarLogOut}> Cerrar Sesion </button>
        </div>
    );
};

export default User;