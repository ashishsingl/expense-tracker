import React from "react";
import './header.css'

const Header = ({headerText}) =>{
    return (
        <div className="header__container">
            <h2>{headerText}</h2>
        </div>
    )
}

export default Header;