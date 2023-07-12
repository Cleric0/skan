import "./style.css"
import React from 'react';
import {useNavigate} from "react-router-dom";


function Button() {
    const navigate = useNavigate()
    return (
    <div>
        <button className="first-conteiner-button" onClick={() => navigate('/search')}>Запросить данные</button> 
    </div>
)}

export {Button}