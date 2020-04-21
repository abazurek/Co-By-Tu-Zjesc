import React, {Component,useEffect,useState} from "react";

function Recipe({recipes, category}) {

    return(
        <>
            {recipes.map(function (recipe) {
                if(category===recipe.category){
                    return(
                        <div className='recipe container' key={recipe.name}>
                            <div><img src={recipe.image} alt={recipe.name}/></div>
                            <div>
                                <h3>{recipe.name}</h3>
                                <p>{recipe.shortDesc}</p>
                                <span>Potrzebne składniki: {recipe.need}</span>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default Recipe