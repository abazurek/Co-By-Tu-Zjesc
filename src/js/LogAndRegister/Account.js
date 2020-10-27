import React,{useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'


function Account({info, updateFav, updateMyRec, setEditedRecipe, recipes}) {

    const[favRecipes, setFavRecipes]=useState('');
    const [myRec, setMyRec]=useState('');


    useEffect(function () {
        if (info){
            setFavRecipes(info.favourite);
            setMyRec(info.myRecipes)
        }

    },[info]);

    const FavRecipes = (elem) => recipes.map(function (item) {
        if (item.name === elem) {
            return (<div className='account-single-recipe-title' key={info.favourite.indexOf(elem)}>
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
            updateFav(info.id, newFav);
        }
    }

    function removeFromOwnRecipes(recipeName) {
        if (info) {
            let recipeObject = {};
            info.myRecipes.forEach(item => item.name === recipeName ? recipeObject = item : false);
            const recipeIndex = info.myRecipes.indexOf(recipeObject);
            info.myRecipes.splice(recipeIndex, 1);
            const newMyRecipes = {myRecipes: [...info.myRecipes]};
            updateMyRec(info.id, newMyRecipes)
        }
    }

    function editRecipe(recipe) {
        setEditedRecipe(recipe);
    }

    const showMyRecipes = (recipe) => (
        <div className='recipe container' key={recipe.name}>
            <div className='recipe-name-block'>
                <NavLink className='navLink' to={`/my/${recipe.name}`}>
                    <h3 className='recipe-name recipe-link'>{recipe.name} </h3>
                </NavLink>
                <div onClick={() => editRecipe(recipe)}>
                    <NavLink className='navLink' to="/add/recipe">
                        <FontAwesomeIcon title="edytuj przepis" className='edit-icon' icon={faEdit}/>
                    </NavLink>
                </div>
                <div onClick={() => removeFromOwnRecipes(recipe.name)}>
                    <FontAwesomeIcon title="usuń z moje przepisy" className='trash-icon' icon={faTrashAlt}/>
                </div>
            </div>
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
                    { favRecipes.length !== 0 ? favRecipes.map(elem => FavRecipes(elem))
                        :
                        <span className='problems'>
                    Nie masz jeszcze żadnych ulubionych przepisów. Aby dodać przepis do ulubionych
                        kliknij na serduszko znajdujące się przy nazwie przepisu.
                </span>}
                </div>
                <div className='account-myRec'>
                    <div className='title-box'>
                        <span className='title'>Moje przepisy</span>
                        <NavLink className='navLink' to="/add/recipe">
                            <button>Dodaj przepis</button>
                        </NavLink>
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

