import React from "react";
import {NavLink} from "react-router-dom";

function MyRec({info,elem}) {

    const urlName={...elem}.match.params.name;

    const tableRecipe = [];

    if (info) {
        info.myRecipes.map((recipe) => {
            if (urlName === recipe.name) {
                tableRecipe.push(recipe);
            }

        })
    }

    return (
        tableRecipe.map(recipe => (
            <div className=' recipe recipe-longVersion container' key={recipe.name}>
                <div className='recipe-name-block'>
                    <h3 className='recipe-name'>{recipe.name}</h3>
                </div>
                <div className='container'>
                    <ul><strong>Składniki: </strong>{recipe.ingredients.split(', ').map(item => <li
                        key={item}>{item}</li>)}</ul>
                    <article className='longDesc'>
                        <strong>Przygotowanie: </strong>
                        <div className='prepareDesc'>
                            {recipe.longDesc.split('\n').map(item =>
                                <p key={item.split(' ')} className='longDescParagraph'>{item}</p>)}
                        </div>
                    </article>
                </div>
                <div className='button-box'>
                    <NavLink to={`/account/${urlName}`}><button className='button'>Powrót</button></NavLink>
                </div>

            </div>
        ))

    )
}
export default MyRec