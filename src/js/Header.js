import React from "react";
import {NavLink} from "react-router-dom";

import LogOrRegister from "./LogAndRegister/LogOrRegister";


function Header() {

   const name=localStorage.getItem("name");

    return (
        <header>
            <NavLink className='navLink title-link' to='/'>
                <h1 className='title container'> - - co by <span>tu</span> zjeść - -</h1>
            </NavLink>


                    <div className='log-or-register'>
                        {name!==null ? <span className='hello'>Cześć {name} !</span> : <LogOrRegister/>}
                    </div>



        </header>
    )
}

export default Header