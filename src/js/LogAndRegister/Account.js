import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'


function Account({info, update, elem, recipes}) {


    let fav = [];
    let myRec = [];
    if (info && recipes) {
        fav = info.favourite;
        myRec = info.myRecipes;
    }

    const FavRecipes = (elem) => recipes.map(function (item) {
        if (item.name === elem) {
            return (<div className='account-single-recipe-title' key={fav.indexOf(elem)}>
                <NavLink className='navLink ' to={`/recipe/${item.name}`}>
                    <li>{elem}</li>
                </NavLink>
                <div onClick={() => removeFromFavourite(item.name)}>
                    <FontAwesomeIcon title="usuń przepis" className="trash-icon" icon={faTrashAlt}/>
                </div>
            </div>)
        }
    });

    function removeFromFavourite(itemName) {
        if (info) {
            const index = info.favourite.indexOf(itemName);
            info.favourite.splice(index, 1);
            const newFav = {favourite: [...info.favourite]};
            update(info.id, newFav);
        }

    }

    const showMyRecipes = (recipe) => (
        <div className='recipe container' key={recipe.name}>
            <div className='recipe-name-block'>
                <NavLink className='navLink' to={`/my/${recipe.name}`}>
                    <h3 className='recipe-name recipe-link'>{recipe.name} </h3>
                </NavLink></div>
            <div className='recipe-section'>
                <div className='recipe-text'>
                    <p className='shortDesc'>{recipe.shortDesc}</p>
                    <span className='shortDesc-Ingred'><strong>Potrzebne składniki:</strong> {recipe.need}</span>
                </div>
            </div>
        </div>
    );


    return (<>
            <div className='container my-account'>
                <div className='account-fav'>
                    <span className='title'>Ulubione przepisy</span>
                    {fav.length !== 0 ? fav.map(elem => FavRecipes(elem))
                        :
                        <span className='problems'>
                    Nie masz jeszcze żadnych ulubionych przepisów. Aby dodać przepis do ulubionych
                        kliknij na serduszko znajdujące się przy nazwie przepisu.
                </span>}
                </div>
                <div className='account-myRec'>
                    <div className='title-box'>
                        <span className='title'>Moje przepisy</span>
                        <NavLink className='navLink' to="/add/recipe"> <button>Dodaj przepis</button></NavLink>
                    </div>
                    {myRec.length !== 0 ? myRec.map(recipe => showMyRecipes(recipe))
                        : <span className='problems'>Nie masz jeszcze swoich przepisów . . .</span>
                    }


                </div>
            </div>
        </>
    )
}

export default Account;

