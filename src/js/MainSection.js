import React from "react";

import SearchTitle from "./SearchTitleAndRecipe/SearchTitle";
import SearchIngredients from "./SearchTitleAndRecipe/SerachIngredients";
import RandomRecipe from "./RandomRecipe";
import Recipes from "./Recipes";

function MainSection({ updateFav, info,recipes,categories}) {

    const name=localStorage.getItem('name');

    return(
        <>
            {name === null?
                <span className='container information'> Zaloguj się aby dodawać przepisy do ulubionych i tworzyć własne !</span>
            : ""}
            <SearchTitle/>
            <SearchIngredients/>
            <RandomRecipe updateFav={updateFav} info={info}  name={name} recipes={recipes}/>
           <Recipes  updateFav={updateFav} info={info} name={name} recipes={recipes} categories={categories}/>

        </>

    );
}

export default MainSection