import React from "react";

import Recipe from "./Recipe";
import SearchTitle from "./SearchTitle";
import SearchIngredients from "./SerachIngredients";

function Recipes({recipes,categories}) {


    return(
        <>
            <SearchTitle/>
            <SearchIngredients/>
          <h2 className='recipes-title container'> - Nasze przepisy - </h2>
            {categories.map( (element) => (
                <>
                    <h3 className='category-name container' key={element}> - {element} - </h3>
                    {recipes.map(function (recipe) {
                        if(element===recipe.category){
                            return(
                                <Recipe recipe={recipe}/>
                            )
                        }
                    })}
                </>
            ))}
        </>

    )
}

export default Recipes