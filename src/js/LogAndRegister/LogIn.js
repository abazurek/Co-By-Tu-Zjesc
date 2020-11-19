import React, {useState} from "react";

import {useHistory} from "react-router-dom";

const information = {name: '', password: ''};

function Login({ setLogged, logData}) {

    let history = useHistory();

    const [info, setInfo] = useState(information);
    const [dontLogged, setDontLogged] = useState(true);

    function submitForm(e) {

        if (logData) {
            logData.forEach(function (item) {
                if (item.name === info.name && item.password === info.password) {
                   setLogged(true);
                   localStorage.setItem("name",item.name);
                }
            });
        }

        setDontLogged(false);
        setInfo(information);
        e.preventDefault();
        history.push('/')
    }

    return (
            <div className='container log-register-section'>
                {dontLogged ? '' :
                    <span className='no-log problems'>Niepoprawna nazwa użytkownika lub hasło. Spróbuj ponownie lub zarejestruj się</span>}
                <form onSubmit={submitForm}>
                    <label> <span>Wpisz nazwę użytkownika</span>
                        <input type='text' value={info.name}
                               onChange={({target}) => setInfo(prev => ({...prev, name: target.value}))}/>
                    </label>
                    <label><span>Wpisz hasło</span>
                        <input type='password' value={info.password}
                               onChange={({target}) => setInfo(prev => ({...prev, password: target.value}))}/>
                    </label>
                    <button type='submit'>Zaloguj się</button>
                </form>
            </div>


    )
}

export default Login