import React from "react";

import Recipe from "./Recipe";

function Recipes({update,info, name,recipes,categories}) {

    return(
        <>
          <h2 className='recipes-title container'> - Nasze przepisy - </h2>
            <section className='recipes'>
                {categories.map( (element) => (
                    <div key={element}>
                        <h3 className='category-name container' key={element}> - {element} - </h3>
                        {recipes.map(function (recipe) {
                            if(element===recipe.category){
                                return(
                                    <Recipe  update={update} info={info} name={name} key={recipe.name} recipe={recipe}/>
                                )
                            }
                        })}
                    </div>
                ))}
            </section>
        </>

    )
}

export default Recipes