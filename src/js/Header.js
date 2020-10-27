import React,{useState, useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom";

import LogOrRegister from "./LogAndRegister/LogOrRegister";


function Header() {
    const [logged, setLogged]=useState(true);

    let history = useHistory();

    const name=localStorage.getItem('name');

    useEffect(function () {},[logged, name]);

   function OutLog() {
       localStorage.clear();
       setLogged(false);
       history.push('/')
   }


    return (
        <header>
            <NavLink className='navLink title-link' to='/'>
                <h1 className='title container'> - - co by <span>tu</span> zjeść - -</h1>
            </NavLink>
                    <div className='log-or-register'>
                        { name ?
                            <><div ><NavLink to={`/account/${name}`}><span className='hello'>Cześć {name} !</span></NavLink></div>
                            <button onClick={OutLog} className='outLog'>Wyloguj się</button>
                            </>
                            : <LogOrRegister/>}
                    </div>



        </header>
    )
}

export default Header