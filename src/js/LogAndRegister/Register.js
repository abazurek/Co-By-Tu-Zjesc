import React,{useState} from "react";

const user={
    "name":"",
    "password":"",
    "repeatPassword":"",
    "email":"",
    "favourite":"",

};

function Register({addUser,data, recipes, categories}) {

    const [info,setInfo]=useState(user);


    function submitForm(e){
        e.preventDefault();
        addUser(info);
        setInfo(user);
    }


    return (
        <div className='container log-register-section'>
            <form onSubmit={submitForm}>
                <label> <span>Wpisz nazwę użytkownika</span> <br/>
                    <input type='text' value={info.name} onChange={({target})=>setInfo(prev=>({...prev, name:target.value}))}/>
                </label>
                <label><span>Wpisz hasło</span> <br/>
                    <input type='password' value={info.password} onChange={({target})=>setInfo(prev=>({...prev,password: target.value}))}/>
                </label>
                <label><span>Powtórz hasło</span> <br/>
                    <input type='password' value={info.repeatPassword} onChange={({target})=>setInfo(prev=>({...prev,repeatPassword: target.value}))}/>
                </label>
                <label><span>Wpisz email</span> <br/>
                    <input type='emal'  value={info.email} onChange={({target})=>setInfo(prev=>({...prev,email: target.value}))}/>
                </label>
                <button type='submit'>Zarejestruj się</button>
            </form>
        </div>

    )
}

export default Register