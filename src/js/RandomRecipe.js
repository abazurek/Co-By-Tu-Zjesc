import React from "react";
import Recipe from "./Recipe";

function RandomRecipe({recipes}) {

    const currentDayNumber = require('current-day-number');
    const indexOfRecipe = currentDayNumber() % (recipes.length);

    return (
        <div className='for-today container'>
            <span>Przepis na dziś:</span>
            {recipes ? <div className='recipe-for-today'>
                <Recipe recipe={recipes[indexOfRecipe]}/>
            </div> : <span className='loading container'>Loading...</span>}
        </div>
    )
}

export default RandomRecipe
