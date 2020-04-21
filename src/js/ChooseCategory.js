import React from "react";
import Recipe from "./Recipe";
import SearchTitle from "./SearchTitle";


function ChooseCategory({elem,recipes}) {

    const urlName={...elem}.match.params.category;


    return(recipes?
        <> <SearchTitle/>
        <Recipe recipes={recipes} category={urlName}/>
        </>

    : <span>Loading..</span>)
}

export default ChooseCategory