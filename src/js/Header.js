import React from "react";
import {NavLink} from "react-router-dom";


function Header() {

    return (
        <header>
            <NavLink className='navLink' to='/'><h1 className='title container'> - - co by <span>tu</span> zjeść - -
            </h1></NavLink>
        </header>
    )
}

export default Header