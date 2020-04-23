import React from "react";
import Recipe from "./Recipe";
import SearchIngredients from "./SerachIngredients";

function SearchedIng({elem, recipes}) {

    const urlIngredients = {...elem}.match.params.ingred;

    const recipesNeedTable = urlIngredients.split(', ');


    const recipesTable = [];


    function noRecipes() {
        if (recipesTable.length === 0) {
            return (<div className='container no-recipe'><span >Nie znaleziono przepisu z podanymi składnikami.</span>
            <p>Spórbuj zapisać składniki inaczej
                (powinny to być rzeczowniki napisane z małej litery
                z przecinkiem i spacją pomiędzy), lub podać mniejszą ilość składników</p>
            <SearchIngredients/>
            </div>)
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