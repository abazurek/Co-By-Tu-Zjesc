import React from "react";
import {NavLink} from "react-router-dom";

function Recipe({recipe}) {

    return(
        <>
            <div className='recipe container' key={recipe.name}>
                <NavLink className='navLink' to={`/recipe/${recipe.name}`}>
                    <h3 className='recipe-name recipe-link'>{recipe.name}</h3>
                </NavLink>
                <div className='recipe-section'><img src={recipe.image} alt={recipe.name}/>
                    <div className='recipe-text'>
                        <p className='shortDesc'>{recipe.shortDesc}</p>
                        <span className='shortDesc-Ingred'><strong>Potrzebne składniki:</strong> {recipe.need}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recipe