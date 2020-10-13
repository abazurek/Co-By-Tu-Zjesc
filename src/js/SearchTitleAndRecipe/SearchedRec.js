import React from "react";
import Recipe from "../Recipe";
import SearchTitle from "./SearchTitle";

function SearchedRecipe({update, info,elem, recipes}) {

    const urlName = {...elem}.match.params.name;

    const recipesTable = [];

    function noRecipes() {
        if(recipesTable.length===0){
            return(<div className='container no-recipe'>
                <span className='problems'>Nie znaleziono przepisu</span>
                <p className='problems'>Spróbuj wpisać krótszą frazę lub inaczej sformułować zapytanie</p>
                <SearchTitle/>
            </div>)
        }
    }

    return (
        recipes ? <>
                {recipes.map((recipe) => {
                    if (recipe.name.toLowerCase().includes(urlName.toLowerCase())) {
                        recipesTable.push(recipe);
                        return (<Recipe update={update} info={info} key={recipe.name} recipe={recipe}/>)
                    }
                })}
                {noRecipes()}
            </>

            : <span className='loading container'>Loading...</span>


    )

}


export default SearchedRecipe
