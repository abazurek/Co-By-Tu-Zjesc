import React, {useState,useEffect} from "react";
import Recipe from "./Recipe";


function ChooseCategory({elem,recipes}) {

    const urlName={...elem}.match.params.category;


    return(recipes? <Recipe recipes={recipes} category={urlName}/> : <span>Loading..</span>)
}

export default ChooseCategory