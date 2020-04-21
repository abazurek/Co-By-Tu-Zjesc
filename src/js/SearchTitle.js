import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function SearchTitle() {

    const [data, setData] = useState('');
    const [submitData, setSubmitData] = useState('');

    function submitForm(e) {
        e.preventDefault();
        setSubmitData(data);
        // setData('');
    }

    return (<>
            <div className='container searchBox'>
                <span>Wyszukaj danie po nazwie</span>
                <form onSubmit={submitForm}>
                    <label>
                        <input type='text' placeholder='Wpisz nazwę dania' value={data}
                               onChange={({target}) => (setData(target.value))}/>
                    </label>
                    <NavLink to={`/search/${data}`}>
                        <button type='submit'>Szukaj</button>
                    </NavLink>
                </form>
            </div>
        </>

    )
}

export default SearchTitle