import React from "react";
import Recipe from "../Recipe";

function ChooseRecipes({update,info, name, elem,recipes }) {

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
            {tableCategory.map(title=> <h3 className='category-name container' key={title}> - {title} - </h3>)}
            {tableRecipes.map(recipe=>(
                <Recipe update={update} info={info} name={name} key={recipe.name} recipe={recipe} />
            ))}

        </>

    )
}

export default ChooseRecipes;