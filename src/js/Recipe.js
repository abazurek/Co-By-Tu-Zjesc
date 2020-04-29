import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'


function Recipe({name,recipe}) {

    return(
        <>
            <div className='recipe container' key={recipe.name}>
                <div className='recpe-name-block'>
                    <NavLink className='navLink' to={`/recipe/${recipe.name}`}>
                    <h3 className='recipe-name recipe-link'>{recipe.name}</h3>
                </NavLink>
                    {name!==null? <FontAwesomeIcon icon={faHeart}/>:""}</div>

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

export default Recipe;