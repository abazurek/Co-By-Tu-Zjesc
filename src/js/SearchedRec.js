import React from "react";
import Recipe from "./Recipe";

function SearchedRecipe({elem, recipes}) {

    const urlName = {...elem}.match.params.name;
    // const urlCategory={...elem}.match.params.category;


    const recipesTable = [];

    function noRecipes() {
        if(recipesTable.length===0){
            return(<span>Nie znaleziono przepisu</span>)
        }
    }

    return (
        recipes ? <>
                {recipes.map((recipe) => {
                    if (recipe.name.includes(urlName)) {
                        recipesTable.push(recipe);
                        return (<Recipe key={recipe.name} recipe={recipe}/>)
                    }
                })}
                {noRecipes()}
            </>

            : <span>Loading...</span>


    )

}


export default SearchedRecipe