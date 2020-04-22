import React from "react";
import Recipe from "./Recipe";

function SearchedIng({elem, recipes}) {

    const urlIngredients = {...elem}.match.params.ingred;

    const recipesNeedTable = urlIngredients.split(', ');


    const recipesTable = [];

    function noRecipes() {
        if (recipesTable.length === 0) {
            return (<span>Nie znaleziono przepisu z podanymi składnikami, spórbuj zapisać składniki inaczej
                (porinny to być rzeczowniki napisane z małej litery
                z przecinkiem i spacją pomiędzy), lub podać mniejszą ilość składników</span>)
        }
    }

    let find = [];

    function FindIngredients(recipes) {
        return recipes.map(function (recipe) {
            const changesNeed = recipe.need.split(', ');
            recipesNeedTable.forEach(function (element) {
                if (changesNeed.includes(element)) {
                    find.push(element);
                }
            });

            if(find.length === recipesNeedTable.length){
                recipesTable.push(recipe);
                find=[];
                return(<Recipe key={recipe.name} recipe={recipe}/> )
            } else {find=[]}

        });

    }




    return (
        recipes ? <>

                {FindIngredients(recipes)}

                {noRecipes()}
            </>

            : <span>Loading...</span>


    )


}


export default SearchedIng