import React from "react";
import {NavLink} from "react-router-dom";
import Recipe from "./Recipe";

function ChooseRecipes({elem,recipes }) {

    const urlCategory={...elem}.match.params.category;
    const urlSubCategory={...elem}.match.params.subcategory;

    const tableCategory=[];
    const tableRecipes=[];

    if(recipes){
        recipes.map((recipe) =>{
            if(urlCategory===recipe.category && urlSubCategory===recipe.subCategory){
                tableRecipes.push(recipe);
                if(!tableCategory.includes(recipe.category)){
                    tableCategory.push(recipe.category);
                }
            }

        })
    }

    return(
        <>
            <h2 className='recipes-title container'> - Nasze przepisy - </h2>
            {tableCategory.map(title=><h3 className='category-name container' key={title}> - {title} - </h3>)}
            {tableRecipes.map(recipe=>(
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


            ))}

            {/*<Recipe recipes={tableRecipes} category={tableCategory}/>*/}
        </>

    )
}

export default ChooseRecipes;