import React from "react";
import {NavLink} from "react-router-dom";

import LogOrRegister from "./LogAndRegister/LogOrRegister";


function Header({name}) {


   function OutLog() {
       localStorage.clear();
       window.location.reload();
   }

   function Reload() {
       window.location.reload();
   }

    return (
        <header>
            <NavLink className='navLink title-link' to='/'>
                <h1 className='title container'> - - co by <span>tu</span> zjeść - -</h1>
            </NavLink>
                    <div className='log-or-register'>
                        {name!==null ?
                            <><div onClick={Reload}><NavLink to={`/account/${name}`}><span className='hello'>Cześć {name} !</span></NavLink></div>
                            <NavLink to={'/'}><button onClick={OutLog} className='outLog'>Wyloguj się</button></NavLink> </>
                            : <LogOrRegister/>}
                    </div>



        </header>
    )
}

export default Header