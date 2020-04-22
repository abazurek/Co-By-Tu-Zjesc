import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function SearchTitle() {

    const [title, setTitle] = useState('');

    function submitForm(e) {
        e.preventDefault();

    }

    return (<>
            <div className='container searchBox'>
                <span>Wyszukaj danie po nazwie</span>
                <form onSubmit={submitForm}>
                    <label>
                        <input type='text' placeholder='Wpisz nazwę dania' value={title}
                               onChange={({target}) => (setTitle(target.value))}/>
                    </label>
                    <NavLink to={`/search/${title}`}>
                        <button type='submit'>Szukaj</button>
                    </NavLink>
                </form>
            </div>
        </>

    )
}

export default SearchTitle