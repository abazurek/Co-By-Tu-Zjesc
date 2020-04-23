import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function SearchIngredients() {

    const [ingred, setIngred] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (<>
            <div className='container searchBox'>
                <span> - Wpisz składniki a znajdziemy danie dla Ciebie ! - </span>
                <p>Wypisuj składniki po przecinku, ze spacjami z małych liter np. (jajka, masło, olej)</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type='text' placeholder='Wpisz składniki' value={ingred}
                               onChange={({target}) => (setIngred(target.value))}/>
                    </label>
                    <NavLink to={`/ingredients/${ingred}`}>
                        <button type='submit'>Szukaj</button>
                    </NavLink>
                </form>
            </div>
        </>
    )

}

export default SearchIngredients