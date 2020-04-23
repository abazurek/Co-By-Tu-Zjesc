import React from "react";

import Recipe from "./Recipe";
import SearchTitle from "./SearchTitle";
import SearchIngredients from "./SerachIngredients";
import RandomRecipe from "./RandomRecipe";

function Recipes({recipes,categories}) {


    return(
        <>

            <SearchTitle/>
            <SearchIngredients/>
            <RandomRecipe recipes={recipes}/>
          <h2 className='recipes-title container'> - Nasze przepisy - </h2>
            <section className='recipes'>
                {categories.map( (element) => (
                    <>
                        <h3 className='category-name container' key={element}> - {element} - </h3>
                        {recipes.map(function (recipe) {
                            if(element===recipe.category){
                                return(
                                    <Recipe key={recipe.name} recipe={recipe}/>
                                )
                            }
                        })}
                    </>
                ))}
            </section>
        </>

    )
}

export default Recipes