import React, {useState} from "react";
import MainSection from "../MainSection";

const user = {
    "name": "",
    "password": "",
    "repeatPassword": "",
    "email": "",
    "favourite": [],

};

function Register({register,setRegister, addUser, logData, recipes, categories}) {

    const [info, setInfo] = useState(user);
    const [message, setMessage] = useState(false);


    const checkTable=[];
    function submitForm(e) {

        if (info.name.length < 3) {
            setMessage('Nazwa użytkownika musi miec do najmniej 3 znaki');
            return;
        }
        if (info.password.length < 4) {
            setMessage('Hasło musi miec co najmniej 4 znaki');
            return;
        }
        if (info.password !== info.repeatPassword) {
            setMessage('Hasła muszą być identyczne');
            return;
        }
        if (!info.email.includes('@') || info.email.length<3) {
            setMessage("Email nie może być krótszy niż 3 znaki i musi zawierać  @");
            return;
        }

        if(logData){
            logData.forEach(function (dat) {
                if (dat.name === info.name) {
                    checkTable.push(dat);
                }
            });
        }

        if(checkTable.length!==0){
            setMessage("Użytkownik o podanej nazwie instnieje, wpisz inną nazwę");
            return;
        }


        addUser(info);
        e.preventDefault();

        setInfo(user);
        setRegister(true);
        localStorage.setItem("name",info.name);
    }


    return (<>{
            register ? <MainSection recipes={recipes} categories={categories}/> :
                <div className='container log-register-section'>
                    {message ? <span className='container no-log problems'>{message}</span> : ""}s
                    <form onSubmit={submitForm}>
                        <label> <span>Wpisz nazwę użytkownika</span> <br/>
                            <input type='text' value={info.name}
                                   onChange={({target}) => setInfo(prev => ({...prev, name: target.value}))}/>
                        </label>
                        <label><span>Wpisz hasło</span> <br/>
                            <input type='password' value={info.password}
                                   onChange={({target}) => setInfo(prev => ({...prev, password: target.value}))}/>
                        </label>
                        <label><span>Powtórz hasło</span> <br/>
                            <input type='password' value={info.repeatPassword}
                                   onChange={({target}) => setInfo(prev => ({...prev, repeatPassword: target.value}))}/>
                        </label>
                        <label><span>Wpisz email</span> <br/>
                            <input type='emal' value={info.email}
                                   onChange={({target}) => setInfo(prev => ({...prev, email: target.value}))}/>
                        </label>
                        <button type='submit'>Zarejestruj się</button>
                    </form>
                </div>
        }

        </>

    )
}

export default Register