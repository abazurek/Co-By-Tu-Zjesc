import React, {useState} from "react";

import Recipes from "../Recipes";

const information = {name: '', password: ''};

function Login({data, recipes, categories}) {

    const [info, setInfo] = useState(information);

    const [logged, setLogged] = useState(false);
    const [dontLogged, setDontLogged] = useState(true);

    function submitForm(e) {
        e.preventDefault();

        data.forEach(function (item) {
            if (item.name === info.name && item.password === info.password) {
                setLogged(true);
            }
        });
        setDontLogged(false);
        setInfo(information);
    }

    return (<>
            {logged ? <Recipes recipes={recipes} categories={categories}/> :
                <div className='container log-register-section'>
                    {dontLogged? '' : <span className='no-log problems'>Niepoprawna nazwa użytkownika lub hasło. Spróbuj ponownie lub zarejestruj się</span>}
                    <form onSubmit={submitForm}>
                        <label> <span>Wpisz nazwę użytkownika</span> <br/>
                            <input type='text' value={info.name}
                                   onChange={({target}) => setInfo(prev => ({...prev, name: target.value}))}/>
                        </label>
                        <label><span>Wpisz hasło</span> <br/>
                            <input type='password' value={info.password}
                                   onChange={({target}) => setInfo(prev => ({...prev, password: target.value}))}/>
                        </label>
                        <button type='submit'>Zaloguj się</button>
                    </form>
                </div>
            }
        </>

    )
}

export default Login