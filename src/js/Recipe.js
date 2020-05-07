import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'


function Recipe({update,info, name,recipe}) {

    function addToFavourite(recipeName) {
        if(info){
            const fav={favourite:[...info.favourite,recipeName]};
            if(!info.favourite.includes(recipeName)){
                update(info.id,fav);
            }
        }
    }

    return(
        <>
            <div className='recipe container' key={recipe.name}>
                <div className='recipe-name-block'>
                    <NavLink className='navLink' to={`/recipe/${recipe.name}`}>
                    <h3 className='recipe-name recipe-link'>{recipe.name} </h3>
                </NavLink>
                    {name!==null && info ? <div className='addFavourite' onClick={()=>addToFavourite(recipe.name)}>
                            {
                                !info.favourite.includes(recipe.name) ? <FontAwesomeIcon title='dodaj do ulubionych' className='recipe-icon' icon={faHeart}/> : ""
                            }
                    </div>
                        :""}</div>

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