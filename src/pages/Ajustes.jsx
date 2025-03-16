import React from 'react';
import "../styles/Ajustes.css";
import { FaPen } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

const Ajustes = () => {
    return (
        <div className="card">
            <ul className="list">
                <li className="element">
                    <FaPen className = "lucide lucide-pencil"/>
                    <p className="label"> Rename </p>
                </li>
                <li className="element">
                    <FaUserPlus className = "lucide lucide-user-round-plus"/>
                    <p className="label"> Add Member </p>
                </li>
            </ul>
            <div className = "separator" />
            <ul className = "list">
                <li className = "element">
                    <CiSettings className = "lucide lucide-settings"/>
                    <p className="label"> Settings </p>
                </li>
                <li className="element delete">
                    <FaRegTrashAlt className="lucide lucide-trash-2"/>
                    <p className="label"> Delete </p>
                </li>
            </ul>
            <div className="separator" />
            <ul className="list">
                <li className="element">
                    <RiTeamFill className="lucide lucide-users-round"/>
                    <p className="label"> Team Access </p>
                </li>
            </ul>
        </div>
    );
};

export default Ajustes;