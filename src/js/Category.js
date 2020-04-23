import React from "react";
import {NavLink} from "react-router-dom";

function Category({category, recipes}) {

    const table = [];


    return (
        <>
            <ul className='ulCategory'> <NavLink activeStyle={{fontWeight:'bolder'}} className='navLink' to={`/category/${category}`}> - {category} - </NavLink>
                {recipes.map(function (recipe) {
                    if (!table.includes(recipe.subCategory) && recipe.category === category) {
                        table.push(recipe.subCategory);

                        return (<>
                            <li key={recipe.name}>
                                <NavLink key={recipe.name} activeStyle={{fontWeight:'bolder'}} className='navLink' to={`/recipes/${category}/${recipe.subCategory}`}>
                                    {recipe.subCategory}
                                </NavLink>
                            </li>
                        </>);
                    }
                })}
            </ul>

        </>

    )
}


export default Category