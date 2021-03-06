import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import './../sass/style.scss';

import {useMediaQuery} from "react-responsive";


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

    // const isTablet = useMediaQuery({
    //     query: '(min-device-width: 768px) and (max-device-width: 1023px)'
    // });
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-width:1024px) and (max-width:2000px)'
    // });
    // const isBigScreen = useMediaQuery({
    //     query: '(min-device-width:2001px)'
    // });

    const isExtraSmall = useMediaQuery({
        query: '(max-width:520px)'
    });

    // const isSmall = useMediaQuery({
    //     query: '(min-device-width:521px) and (max-width:767px)'
    // });

    let name = localStorage.getItem("name");
    let info = null;

    const [recipes, setRecipes] = useState(false);
    const [logData, setLogData] = useState(false);

    const [logged, setLogged] = useState(false);
    const [register, setRegister] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState(false);

    function fetchData() {
        fetch('http://localhost:3000/recipes')
            .then(resp => resp.json())
            .then(data => setRecipes(data))
            .catch(err => {
                console.log(err)
            });
    }

    function fetchLog() {
        fetch('http://localhost:3004/log')
            .then(resp => resp.json())
            .then(data => setLogData(data)
            )
            .catch(err => {
                console.log(err)
            })


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
        fetch('http://localhost:3004/log', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .catch(err => console.log(err))
    }

    if (logData) {
        logData.forEach(function (element) {
            if (element.name === name) {
                info = element;
            }
        })
    }

    function udpateFavourities(id, fav) {
        fetch(`http://localhost:3004/log/${id}`, {
            method: "PATCH",
            body: JSON.stringify(fav),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .catch(err => console.log(err));
        fetchLog();

    }

    function updateMyRecipes(id, myRecipes) {
        fetch(`http://localhost:3004/log/${id}`, {
            method: "PATCH",
            body: JSON.stringify(myRecipes),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .catch(err => console.log(err));

        fetchLog();
    }


    return (
        <Router>
            <Header extraSmall={isExtraSmall} setLogged={setLogged}/>
            <Nav recipes={recipes} categories={elements}/>
            <Switch>
                <Route exact path="/">
                    <MainSection updateFav={udpateFavourities} logged={logged} info={info} recipes={recipes}
                                 categories={elements}/>
                </Route>
                <Route path="/recipes/:category/:subcategory"
                       render={props => <ChooseRecipes updateFav={udpateFavourities} info={info} name={name}
                                                       elem={props} recipes={recipes}/>}/>
                <Route path="/recipe/:name"
                       render={props => <ChooseRecipe updateFav={udpateFavourities} info={info} name={name} elem={props}
                                                      recipes={recipes}/>}/>
                <Route path="/category/:category"
                       render={props => <ChooseCategory updateFav={udpateFavourities} info={info} name={name}
                                                        elem={props} recipes={recipes}/>}/>
                <Route path="/search/:name"
                       render={props => <SearchedRecipe updateFav={udpateFavourities} info={info} elem={props}
                                                        recipes={recipes}/>}/>
                <Route path="/ingredients/:ingred"
                       render={props => <SearchedIng updateFav={udpateFavourities} info={info} elem={props}
                                                     recipes={recipes}/>}/>
                <Route path='/log'><Login setLogged={setLogged} logData={logData}/></Route>
                <Route path='/register'><Register register={register} setRegister={setRegister} addUser={addUser}
                                                  logData={logData} recipes={recipes} categories={elements}/></Route>
                <Route path={'/account/:user'}> <Account info={info} updateFav={udpateFavourities}
                                                         updateMyRec={updateMyRecipes} setEditedRecipe={setEditedRecipe}
                                                         recipes={recipes}/></Route>
                <Route path="/add/recipe"
                       render={props => <AddRecipe name={name} info={info} updateMyRec={updateMyRecipes}
                                                   editedRecipe={editedRecipe} elem={props}/>}/>
                <Route path='/my/:name' render={props => <MyRec info={info} elem={props}/>}/>
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