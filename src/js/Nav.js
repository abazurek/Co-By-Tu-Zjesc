import React, {Component, useEffect, useState} from "react";
// import ReactDOM from "react-dom";

import Category from "./Category";

function Nav({recipes, categories}) {

    return(
        <>
            <h1>co by tu zjeść</h1>
            <div className='nav'>
                {categories.map((element) =>
                    <Category key={element} category={element} recipes={recipes}/>
                )}
            </div>
        </>
    )
}

export default Nav