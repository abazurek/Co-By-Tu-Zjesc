import React from "react";

import Category from "./Category";

function Nav({extraSmall, recipes, categories}) {

    return (
        <section>
            <div className='nav-bar'>
                <div className='nav container'>
                    {categories.map((element) =>
                        <Category key={element} category={element} recipes={recipes}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Nav