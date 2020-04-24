import React from "react";
import {NavLink} from "react-router-dom";

import LogOrRegister from "./LogAndRegister/LogOrRegister";


function Header() {

    return (
        <header>
            <NavLink className='navLink title-link' to='/'>
                <h1 className='title container'> - - co by <span>tu</span> zjeść - -</h1>
            </NavLink>
            <div className='log-or-register'>
                <LogOrRegister/>
            </div>

        </header>
    )
}

export default Header