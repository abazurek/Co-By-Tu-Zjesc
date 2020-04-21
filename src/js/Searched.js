import React from "react";
import Recipe from "./Recipe";

function SearchedRecipe({elem,recipes}) {

    const urlName={...elem}.match.params.name;
    console.log(urlName)

    const names=[];

    if(recipes){
        recipes.forEach(function (recipe) {
            if(recipe.name.includes(urlName)){
                names.push(recipe)
            }
        })
    }

    return(<>
            {recipes? recipes.forEach( (recipe) =>(
                recipe.name.includes(urlName)?  <Recipe recipes={names} category={recipe.category}/> :  <span>Nie znaleziono takiego przepisu</span>

            )) : <span>Loading...</span>}

        </>
    )

}

export default SearchedRecipe