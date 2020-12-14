import React,{ useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";

import {faAlignRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import LogOrRegister from "./LogAndRegister/LogOrRegister";


function Header({extraSmall, setLogged}) {

    const [visibleLogSection, setVisibleLogSection]=useState(false);

    let history = useHistory();

    const name=localStorage.getItem('name');

    useEffect(function () {},[name]);

   function OutLog() {
       localStorage.clear();
       setLogged(false);
       history.push('/')
   }

   function changeVisibleLogBox(){
       setVisibleLogSection(!visibleLogSection)
   }

   function showLogBox(name){
       return(
           <div className='log-or-register'>
               { name ?
                   <><div ><NavLink to={`/account/${name}`}><span className='hello'>Cześć {name} !</span></NavLink></div>
                       <button onClick={OutLog} className='outLog'>Wyloguj się</button>
                   </>
                   : <LogOrRegister/>}
           </div>
       )
   }

    return (
        <header>
            <section>
                <NavLink className='navLink title-link' to='/'>
                    <h1 className='title container'> - - co by <span>tu</span> zjeść - -</h1>
                </NavLink>
                {
                    extraSmall? <FontAwesomeIcon onClick={changeVisibleLogBox} icon={faAlignRight} className='fontIcon'/>
                        : showLogBox(name)

                }
            </section>

            {visibleLogSection? <div className='logBoxAdded' onClick={changeVisibleLogBox}>{showLogBox(name)}</div>: ''}


        </header>
    )
}

export default Header