import React,{useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

import LogOrRegister from "./LogAndRegister/LogOrRegister";


function Header({name}) {
    const [logged, setLogged]=useState(true);

    useEffect(function () {
        console.log(logged);
        console.log(name)
    },[logged, name]);

   function OutLog() {
       name=null;
       localStorage.clear();
       setLogged(false);
   }


    return (
        <header>
            <NavLink className='navLink title-link' to='/'>
                <h1 className='title container'> - - co by <span>tu</span> zjeść - -</h1>
            </NavLink>
                    <div className='log-or-register'>
                        {logged && name ?
                            <><div ><NavLink to={`/account/${name}`}><span className='hello'>Cześć {name} !</span></NavLink></div>
                            <button onClick={OutLog} className='outLog'>Wyloguj się</button> </>
                            : <LogOrRegister/>}
                    </div>



        </header>
    )
}

export default Header