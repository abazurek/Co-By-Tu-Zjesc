import React, {Component, useEffect, useState} from "react";


function Category({category, recipes}) {

    const [option, setOption] = useState('');

    const table = [];

    const changeSelect = ({target}) => {
        setOption((target.value));
        window.scrollTo(option);
    };


    return (
        <div className='nav'>
            <label className='labels'>{category}<br/>
                <select  onChange={() => changeSelect(target)}>
                    {recipes.map(function (recipe) {
                        if (!table.includes(recipe.subCategory) && recipe.category === category) {
                            table.push(recipe.subCategory);
                            return (<><option key={recipe.name} value={recipe.name}>{recipe.subCategory}</option><br/></>);
                        }
                    })}
                </select>
            </label>
        </div>

    )
}


export default Category