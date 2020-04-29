import React from "react";

import SearchTitle from "./SearchTitleAndRecipe/SearchTitle";
import SearchIngredients from "./SearchTitleAndRecipe/SerachIngredients";
import RandomRecipe from "./RandomRecipe";
import Recipes from "./Recipes";

function MainSection({name,recipes,categories}) {


    return(
        <>

            <SearchTitle/>
            <SearchIngredients/>
            <RandomRecipe name={name} recipes={recipes}/>
           <Recipes name={name} recipes={recipes} categories={categories}/>

        </>

    );
}

export default MainSection