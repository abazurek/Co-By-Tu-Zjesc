import React from "react";
import Recipe from "../Recipe";
import SearchTitle from "./SearchTitle";

function SearchedRecipe({elem, recipes}) {

    const urlName = {...elem}.match.params.name;
    // const urlCategory={...elem}.match.params.category;


    const recipesTable = [];

    function noRecipes() {
        if(recipesTable.length===0){
            return(<div className='container no-recipe'>
                <span className='problems'>Nie znaleziono przepisu</span>
                <p className='problems'>Spróbuj wpisać krótszą frazę lub słowo z wielkiej/małej litery</p>
                <SearchTitle/>
            </div>)
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

            : <span className='loading container'>Loading...</span>


    )

}


export default SearchedRecipe