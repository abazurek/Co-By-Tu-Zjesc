import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import './../sass/style.scss';

import Header from "./Header";
import Nav from "./Nav";
import MainSection from "./MainSection";
import Footer from "./Footer";
import ChooseRecipes from "./ChoosenElements/ChooseRecipes";
import ChooseRecipe from "./ChoosenElements/ChooseRecipe";
import ChooseCategory from "./ChoosenElements/ChooseCategory";
import SearchedRecipe from "./SearchTitleAndRecipe/SearchedRec";
import SearchedIng from "./SearchTitleAndRecipe/SearchedIng";
import Login from "./LogAndRegister/LogIn";
import Register from "./LogAndRegister/Register";
import Account from "./LogAndRegister/Account";
import AddRecipe from "./AddRecipe";
import MyRec from "./ChoosenElements/ChooseMyRec";



function App() {

    const name=localStorage.getItem("name");
    let info=null;

    const [recipes, setRecipes] = useState(false);
    const [logData, setLogData]=useState(false);

    const [logged, setLogged] = useState(false);
    const [register,setRegister]=useState(false);
    const [editedRecipe,setEditedRecipe ]=useState(false);

    function fetchData (){
        fetch('http://localhost:3000/recipes')
            .then(resp => resp.json())
            .then(data => setRecipes(data))
            .catch(err => {
                console.log(err)
            });
    }

    function fetchLog (){
        fetch('http://localhost:3004/log')
            .then(resp=>resp.json())
            .then(data => setLogData(data)
            )
            .catch(err=>{console.log(err)})


    }

    useEffect(() => {
       fetchData();
       fetchLog();

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

    function addUser(user) {
        fetch('http://localhost:3004/log',{
            method:"POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp=>resp.json())
            .catch(err=>console.log(err))
    }

    if(logData){
        logData.forEach(function (element) {
            if(element.name===name){
                info=element;
            }
        })
    }

    function udpateFavourities(id,fav) {
        fetch(`http://localhost:3004/log/${id}`,{
            method:"PATCH",
            body:JSON.stringify(fav),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(resp=>resp.json())
            .catch(err=>console.log(err));

        fetchLog();
    }

    function updateMyRecipes(id,myRecipes) {
        fetch(`http://localhost:3004/log/${id}`,{
            method:"PATCH",
            body:JSON.stringify(myRecipes),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(resp=>resp.json())
            .catch(err=>console.log(err));


        fetchLog();
    }
    function editMyRecipe(id,myRecipes, index) {
        fetch(`http://localhost:3004/log/${id}`,{
            method:"PATCH",
            body:JSON.stringify(myRecipes[index]),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(resp=>resp.json())
            .catch(err=>console.log(err));


        fetchLog();
    }

    return (
        <Router>
            <Header name={name}/>
            <Nav recipes={recipes} categories={elements}/>
            <Switch>
                <Route exact path="/">
                    <MainSection  updateFav={udpateFavourities} info={info} name={name} recipes={recipes} categories={elements}/>
                </Route>
                <Route path="/recipes/:category/:subcategory"
                       render={props => <ChooseRecipes updateFav={udpateFavourities} info={info} name={name} elem={props} recipes={recipes}/>}/>
                <Route path="/recipe/:name" render={props => <ChooseRecipe updateFav={udpateFavourities}  info={info} name={name} elem={props} recipes={recipes}/>}/>
                <Route path="/category/:category" render={props => <ChooseCategory  updateFav={udpateFavourities}  info={info} name={name} elem={props} recipes={recipes}/>}/>
                <Route path="/search/:name" render={props => <SearchedRecipe  updateFav={udpateFavourities} info={info} elem={props} recipes={recipes}/>}/>
                <Route path="/ingredients/:ingred" render={props => <SearchedIng  updateFav={udpateFavourities} info={info} elem={props} recipes={recipes}/>}/>
                <Route path='/log'><Login logged={logged} setLogged={setLogged} logData={logData} recipes={recipes} categories={elements}/></Route>
                <Route path='/register'><Register  register={register} setRegister={setRegister} addUser={addUser} logData={logData} recipes={recipes} categories={elements}/></Route>
                <Route path={'/account/:user'}> <Account info={info} updateFav={udpateFavourities} updateMyRec={updateMyRecipes} setEditedRecipe={setEditedRecipe}  recipes={recipes} /></Route>
                <Route path={'/add/recipe'}>
                    <AddRecipe name={name} info={info} updateMyRec={updateMyRecipes} editedRecipe={editedRecipe} editMyRecipe={editMyRecipe}/>
                </Route>
                <Route path='/my/:name' render={props=><MyRec info={info} elem={props}/>}/>
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