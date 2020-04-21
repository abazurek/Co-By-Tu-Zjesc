import React from "react";
import {NavLink} from "react-router-dom";


import Category from "./Category";

function Nav({recipes, categories}) {

    return (
        <header>
            <NavLink className='navLink' to='/'><h1 className='title container'> - - co by <span>tu</span> zjeść - -
            </h1></NavLink>
            <div className='nav-bar'>
                <div className='nav container'>
                    {categories.map((element) =>
                        <Category key={element} category={element} recipes={recipes}/>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Nav