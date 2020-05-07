import React from "react";

import SearchTitle from "./SearchTitleAndRecipe/SearchTitle";
import SearchIngredients from "./SearchTitleAndRecipe/SerachIngredients";
import RandomRecipe from "./RandomRecipe";
import Recipes from "./Recipes";

function MainSection({update,info, name,recipes,categories}) {

    return(
        <>
            {name===null?
                <span className='container information'> Zaloguj się aby dodawać przepisy do ulubionych i tworzyć własne !</span>
            : ""}
            <SearchTitle/>
            <SearchIngredients/>
            <RandomRecipe update={update} info={info}  name={name} recipes={recipes}/>
           <Recipes update={update} info={info} name={name} recipes={recipes} categories={categories}/>

        </>

    );
}

export default MainSection