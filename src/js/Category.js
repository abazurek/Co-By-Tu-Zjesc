import React,{useState} from "react";
import {NavLink} from "react-router-dom";

function Category({category, recipes}) {


    const table = [];

    const [expandMenu, setExpandMenu]=useState(false);

    function changeVisibleMenu(){
        setExpandMenu(!expandMenu)
    }

    return (
        <>
            <ul onMouseEnter={changeVisibleMenu} onMouseLeave={changeVisibleMenu} className='ulCategory'><NavLink activeStyle={{fontWeight: 'bolder'}} className='navLink'
                                                to={`/category/${category}`}> - {category} - </NavLink>
                {recipes.map(function (recipe) {
                    if (!table.includes(recipe.subCategory) && recipe.category === category) {
                        table.push(recipe.subCategory);

                        return (
                            expandMenu?
                                    <li key={recipe.name} onClick={changeVisibleMenu}>
                                        <NavLink key={recipe.name} activeStyle={{fontWeight: 'bolder'}} className='navLink'
                                                 to={`/recipes/${category}/${recipe.subCategory}`}>
                                            {recipe.subCategory}
                                        </NavLink>
                                    </li>
                            : ''

                        );
                    }
                })}
            </ul>

        </>

    )
}


export default Category