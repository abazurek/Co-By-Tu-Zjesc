import React from "react";
import Recipe from "./Recipe";
import SearchTitle from "./SearchTitle";


function ChooseCategory({elem,recipes}) {

    const urlName={...elem}.match.params.category;


    return(recipes?
        <>
            {/*<SearchTitle />*/}
            {recipes.map(function (recipe) {
                if(urlName===recipe.category){
                    return(
                        <Recipe recipe={recipe}/>
                    )
                }
            })}
        </>

    : <span>Loading..</span>)
}

export default ChooseCategory