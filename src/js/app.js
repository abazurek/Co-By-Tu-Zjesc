import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Switch, NavLink, useParams} from "react-router-dom";

import './../sass/style.scss';

import Nav from "./Nav";
import Recipes from "./Recipes";
import Footer from "./Footer";
import ChooseRecipes from "./ChooseRecipes";
import ChooseRecipe from "./ChooseRecipe";
import ChooseCategory from "./ChooseCategory";
import SearchedRecipe from "./Searched";


function App() {

    const [recipes, setRecipes] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
            .then(resp => resp.json())
            .then(data => setRecipes(data))
            .catch(err => {
                console.log(err)
            });
    }, []);

    let lastCategory = null;
    const elements = [];

    if (recipes) {
        recipes.forEach(function (recipe) {
            if (recipe.category !== lastCategory) {
                elements.push(recipe.category)
            }
            lastCategory = recipe.category;
        });
    }

    return (
        <Router>
            <Nav recipes={recipes} categories={elements}/>
            <Switch>
                <Route exact path="/">
                    <Recipes recipes={recipes} categories={elements}/>
                </Route>
                <Route path="/recipes/:category/:subcategory"
                       render={props => <ChooseRecipes elem={props} recipes={recipes}/>}/>
                <Route path="/recipe/:name" render={props => <ChooseRecipe elem={props} recipes={recipes}/>}/>
                <Route path="/category/:category" render={props => <ChooseCategory elem={props} recipes={recipes}/>}/>
                <Route path="/search/:name" render={props => <SearchedRecipe elem={props} recipes={recipes}/>}/>
            </Switch>

            <Footer/>
        </Router>
    )
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <>
            <App/>
        </>,
        document.getElementById('app')
    )
});