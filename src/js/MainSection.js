import React from "react";

import SearchTitle from "./SearchTitleAndRecipe/SearchTitle";
import SearchIngredients from "./SearchTitleAndRecipe/SerachIngredients";
import RandomRecipe from "./RandomRecipe";
import Recipes from "./Recipes";

function MainSection({recipes,categories}) {


    return(
        <>

            <SearchTitle/>
            <SearchIngredients/>
            <RandomRecipe recipes={recipes}/>
           <Recipes recipes={recipes} categories={categories}/>

        </>

    );
}

export default MainSection