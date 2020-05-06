import React from "react";
import Recipe from "../Recipe";

function ChooseCategory({update,info,elem, recipes}) {

    const urlName = {...elem}.match.params.category;


    return (recipes ?
        <>
            <h3 className='single-category category-name container' key={urlName}> - {urlName} - </h3>
            <section className='recipes'>
                {recipes.map(function (recipe) {
                    if (urlName === recipe.category) {
                        return (
                            <Recipe update={update} info={info} key={recipe.name} recipe={recipe}/>
                        )
                    }
                })}</section>

        </>

        : <span className='loading container'>Loading..</span>)
}

export default ChooseCategory