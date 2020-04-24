import React from "react";
import {NavLink} from "react-router-dom";

function LogOrRegister() {

    return(
        <>
            <NavLink className='log' to='/log'><span>Zaloguj się</span></NavLink>
            <span className='text'>Nie masz jeszcze konta?</span>
            <NavLink className='register' to='/register'><span>Zarejestruj się</span></NavLink>
        </>
    )
}
export default LogOrRegister