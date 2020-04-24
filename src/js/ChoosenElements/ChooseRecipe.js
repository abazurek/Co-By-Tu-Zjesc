import React from "react";

function ChooseRecipe({elem,recipes }) {

    const urlName={...elem}.match.params.name;

    const tableRecipe=[];

    if(recipes){
        recipes.map((recipe) =>{
            if(urlName === recipe.name){
                tableRecipe.push(recipe);
            }

        })
    }
    return(
        tableRecipe.map(recipe=>(
            <div className=' recipe recipe-longVersion container' key={recipe.name}>
                <h3 className='recipe-name'>{recipe.name}</h3>
               <img src={recipe.image} alt={recipe.name}/>
                <div  className='container'>
                    <ul><strong>Składniki: </strong>{recipe.longDesc.ingredients.split('\n').map(item => <li key={item}>{item}</li>)}</ul>
                    <article className='longDesc'>
                        <strong>Przygotowanie: </strong>
                        <div className='prepareDesc'>{recipe.longDesc.prepare.split('\n').map(item => <p key={item} className='longDescParagraph'>{item}</p>)}</div>
                        </article>
                </div>
            </div>
        ))

    )
}


export default ChooseRecipe;