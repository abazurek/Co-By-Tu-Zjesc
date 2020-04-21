import React, {Component, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

function Category({category, recipes}) {

    const [option, setOption] = useState('');

    const table = [];

    // const changeSelect = ({target}) => {
    //     setOption((target.value));
    //     window.scrollTo(recipes);
    // };


    return (
        <>
            <ul className='ulCategory'>{category}
            <li></li>
                {recipes.map(function (recipe) {
                    if (!table.includes(recipe.subCategory) && recipe.category === category) {
                        table.push(recipe.subCategory);
                        return (<><li key={recipe.name} value={recipe.name}>{recipe.subCategory}</li></>);
                    }
                })}
            </ul>

            <label className='labels'><span>{category}</span><br/>
                <NavLink to={"/recipes/fish/zupa"}>Finish/zupa</NavLink>
                <select >
                    <option/>

                </select>
            </label>
        </>

    )
}


export default Category