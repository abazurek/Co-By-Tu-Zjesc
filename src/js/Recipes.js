import React, {Component,useEffect,useState} from "react";

import Recipe from "./Recipe";

function Recipes({recipes,categories}) {



    return(
        <>
          <h2> - Nasze przepisy - </h2>
            {categories.map( (element) => (
                <>
                    <h3 key={element}> - {element} - </h3>
                    <Recipe  recipes={recipes} category={element}/>
                </>
            ))}
        </>

    )
}

export default Recipes