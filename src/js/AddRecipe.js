import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const newRecipe = {
    name: "",
    shortDesc: "",
    need: "",
    ingredients: "",
    longDesc: "",
};


function AddRecipe({name, info, updateMyRec}) {
    let history = useHistory();

    const [recipe, setRecipe] = useState(newRecipe);
    const [message, setMessage] = useState(newRecipe);



    function submitForm(e) {
        e.preventDefault();
        if (recipe.name.length < 3) {
            setMessage((prev) => ({
                ...prev,
                name: "Nazwa dania nie moźe być krótsza niż 3 znaki",
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
        if ( recipe.ingredients.split(', ').length < 3) {
            setMessage(prev => ({...prev, ingredients: "Musisz wymienić co najmniej 3 składniki"}));
            return;
        } else setMessage(newRecipe);
        if (recipe.longDesc.length < 100) {
            setMessage(prev => ({...prev, longDesc: "Dokładny opis dania musi zawierać co najmniej 100 znaków"}));
            return;
        } else setMessage(newRecipe);
        const myRecipes={"myRecipes":[...info.myRecipes, recipe]};
        updateMyRec(info.id, myRecipes);
        history.push(`/account/${name}`);
    }

    // function returnError(elem) {
    //     const mess=message;
    //     const info={elem}
    //     return  <span style={style}>{mess.elem}</span>
    //
    // }

    return (
        <div className="container my-recipe">
            <h2>Dodaj własny przepis</h2>
            <form className="my-recipe_form" onSubmit={submitForm}>
                <label>
                    {" "}
                    <span>Nazwa dania</span>
                    <input
                        type="text"
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
                        placeholder="Wpisz dokładny opis dania"
                        onChange={({target}) =>
                            setRecipe((prev) => ({...prev, longDesc: target.value}))
                        }
                    />
                    <span className="problems">{message.longDesc}</span>
                </label>
                <button type="submit">Dodaj przepis</button>
            </form>
        </div>
    );
}

export default AddRecipe;
