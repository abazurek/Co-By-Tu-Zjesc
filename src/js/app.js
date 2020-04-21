import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Switch, NavLink, useParams} from "react-router-dom";

import './../sass/style.scss';

import Nav from "./Nav";
import Recipes from "./Recipes";
import Footer from "./Footer";

function Recipe(props) {
    console.log(props.match.params.category, props.match.params.subcategory);
    return <h1>ddd</h1>
}



function App() {

    const [recipes, setRecipes]=useState(false);

    useEffect(()=>{
        fetch('http://localhost:3000/recipes')
            .then(resp=>resp.json())
            .then(data=>setRecipes(data))
            .catch(err=>{console.log(err)});
    },[]);

    let lastCategory=null;
    const elements=[];

    if(recipes){
        recipes.forEach(function (recipe) {
            if(recipe.category!==lastCategory){
                elements.push(recipe.category)
            }
            lastCategory=recipe.category
        });


    }

    return (
        <Router>
            <Nav recipes={recipes} categories={elements}/>
            <Switch>
                <Route exact path="/">
                    <Recipes recipes={recipes} categories={elements}/>
                </Route>
                <Route path="/recipes/:category/:subcategory" render={props => <Recipe {...props}></Recipe>}></Route>
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