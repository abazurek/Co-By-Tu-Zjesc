import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

function ChooseRecipe({update,info,name,elem, recipes}) {

    const urlName = {...elem}.match.params.name;

    const tableRecipe = [];

    if (recipes) {
        recipes.map((recipe) => {
            if (urlName === recipe.name) {
                tableRecipe.push(recipe);
            }

        })
    }

    function addToFavourite(recipeName) {
        if(info){
            const fav={favourite:[...info.favourite,recipeName]};
            if(!info.favourite.includes(recipeName)){
                update(info.id,fav);
                console.log(info)
            }
        }
    }

    return (
        tableRecipe.map(recipe => (
            <div className=' recipe recipe-longVersion container' key={recipe.name}>
                <div className='recipe-name-block'>
                    <h3 className='recipe-name'>{recipe.name}</h3>
                    {name !== null ? <div className='addFavourite' onClick={()=>addToFavourite(recipe.name)}>
                        <FontAwesomeIcon title='dodaj do ulubionych' className='recipe-icon' icon={faHeart}/></div> :""}</div>
                <img src={recipe.image} alt={recipe.name}/>
                <div className='container'>
                    <ul><strong>Składniki: </strong>{recipe.longDesc.ingredients.split('\n').map(item => <li
                        key={item}>{item}</li>)}</ul>
                    <article className='longDesc'>
                        <strong>Przygotowanie: </strong>
                        <div className='prepareDesc'>{recipe.longDesc.prepare.split('\n').map(item => <p key={item}
                                                                                                         className='longDescParagraph'>{item}</p>)}</div>
                    </article>
                </div>
            </div>
        ))

    )
}


export default ChooseRecipe;