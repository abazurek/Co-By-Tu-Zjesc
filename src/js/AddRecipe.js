import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";

const newRecipe = {
    name: "",
    shortDesc: "",
    need: "",
    ingredients: "",
    longDesc: "",
};


function AddRecipe({name, info, updateMyRec, editedRecipe, elem}) {

    const urlName={...elem}.match.params.name;

    let history = useHistory();

    const [recipe, setRecipe] = useState({...editedRecipe});
    const [message, setMessage] = useState(newRecipe);


    function checkName(name) {
        let checked = false;
        const myRecipesCopy=[...info.myRecipes];
        if(editedRecipe){
            const editedIndex=info.myRecipes.indexOf(editedRecipe);
            myRecipesCopy.splice(editedIndex,1);


        }
        myRecipesCopy.forEach(item => item.name.toLowerCase() === name.toLowerCase() ? checked = true : false);
        return checked;
    }


    function submitForm(e) {
        e.preventDefault();
        if (!recipe.name ||recipe.name.length < 3) {
            setMessage((prev) => ({
                ...prev,
                name: "Nazwa dania nie moźe być krótsza niż 3 znaki",
            }));
            return;
        }
        if (checkName(recipe.name)) {
            setMessage((prev) => ({
                ...prev,
                name: "Danie o podanej nazwie już istnieje, proszę podać inną nazwę",
            }));
            return;
        } else setMessage(newRecipe);
        if (!recipe.need || recipe.need && recipe.need.split(", ").length < 2) {
            setMessage((prev) => ({
                ...prev,
                need: "Musisz wpisać do najmniej dwa składniki",
            }));
            return;
        } else setMessage(newRecipe);
        if (recipe.shortDesc.length < 20) {
            setMessage((prev) => ({
                ...prev,
                shortDesc: "Krótki opis danie musi zawierać do najmniej 20 znaków",
            }));
            return;
        } else setMessage(newRecipe);
        if (recipe.ingredients.split(', ').length < 3) {
            setMessage(prev => ({...prev, ingredients: "Musisz wymienić co najmniej 3 składniki"}));
            return;
        } else setMessage(newRecipe);
        if (recipe.longDesc.length < 100) {
            setMessage(prev => ({...prev, longDesc: "Dokładny opis dania musi zawierać co najmniej 100 znaków"}));
            return;
        } else setMessage(newRecipe);


        let myRecipes;


        if(editedRecipe){
            const editedIndex=info.myRecipes.indexOf(editedRecipe);
            info.myRecipes.splice(editedIndex,1,recipe);
             myRecipes={"myRecipes":info.myRecipes};
        }
        else   myRecipes = {"myRecipes": [...info.myRecipes, recipe]};

        updateMyRec(info.id, myRecipes);

        history.push(`/account/${name}`);
    }

    function backFunction(){
        history.push("/")
    }


    return (
        <div className="container my-recipe">
            <h2>Dodaj własny przepis</h2>
            <form className="my-recipe_form" onSubmit={submitForm}>
                <label>
                    {" "}
                    <span>Nazwa dania</span>
                    <input
                        type="text"
                        value={recipe.name || ""}
                        placeholder="Wpisz nazwę dania"
                        onChange={({target}) =>
                            setRecipe((prev) => ({...prev, name: target.value}))
                        }
                    />
                    <span className="problems">{message.name}</span>
                </label>
                <label>
                    {" "}
                    <span>Potrzebne składniki </span>
                    <input
                        type="text"
                        value={recipe.need || ""}
                        placeholder="Wpisz potrzebne składniki po porzecinkach np. jajka, mleko"
                        onChange={({target}) =>
                            setRecipe((prev) => ({...prev, need: target.value}))
                        }
                    />
                    <span className="problems">{message.need}</span>
                </label>
                <label>
                    {" "}
                    <span>Krótki opis dania</span>
                    <textarea
                        value={recipe.shortDesc || ""}
                        placeholder="Wpisz krótki opis dania"
                        onChange={({target}) =>
                            setRecipe((prev) => ({...prev, shortDesc: target.value}))
                        }
                    />
                    <span className="problems">{message.shortDesc}</span>
                </label>
                <label>
                    {" "}
                    <span>Składniki</span>
                    <input
                        type="text"
                        value={recipe.ingredients || ""}
                        placeholder="Wpisz dokładne ilości składników po porzecinkach np. 4 jajka, pół litra mleka"
                        onChange={({target}) =>
                            setRecipe((prev) => ({...prev, ingredients: target.value}))
                        }
                    />
                    <span className="problems">{message.ingredients}</span>
                </label>
                <label>
                    {" "}
                    <span> Dokładny opis opis dania</span>
                    <textarea
                        value={recipe.longDesc || ""}
                        placeholder="Wpisz dokładny opis dania"
                        onChange={({target}) =>
                            setRecipe((prev) => ({...prev, longDesc: target.value}))
                        }
                    />
                    <span className="problems">{message.longDesc}</span>
                </label>
                <div className='buttons-box'>
                    {editedRecipe ?

                        <button type='submit'>Edytuj przepis</button>
                        :
                        <button type="submit">Dodaj przepis</button>
                    }
                    <NavLink to={`/account/${urlName}`}><button onClick={backFunction} className='button'>Powrót</button></NavLink>
                </div>


            </form>


        </div>
    );
}

export default AddRecipe;
