import React from "react";

import Recipe from "./Recipe";
import SearchTitle from "./SearchTitle";

function Recipes({recipes,categories}) {


    return(
        <>
            <SearchTitle/>
          <h2 className='recipes-title container'> - Nasze przepisy - </h2>
            {categories.map( (element) => (
                <>
                    <h3 className='category-name container' key={element}> - {element} - </h3>
                    <Recipe  recipes={recipes} category={element}/>
                </>
            ))}
        </>

    )
}

export default Recipes