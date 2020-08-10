import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo_1.png";

import "./styles.css";

function Menu() {

    return (

        <nav className = "Menu">

            <Link to = "/">

                <img src = { Logo } className = "Logo" alt = "LuizaFlix"/>

            </Link>
 
        </nav>

    );

 }

 export default Menu;