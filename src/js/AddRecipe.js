import React, {useState} from "react";
import {useHistory} from "react-router-dom";


const newRecipe = {
    "name": "",
    "ingredients": "",
    "shortDesc": "",
    "longDesc": ""

};

function AddRecipe(name) {
    let history = useHistory();


    function submitForm(e) {
        e.preventDefault();
        history.push(`/account/${name}`)

    }

    return (
        <div className="container my-recipe">
            <h2>Dodaj własny przepis</h2>
            <form className="my-recipe_form" onSubmit={submitForm}>
                <label>
                    {" "}
                    <span>Nazwa dania</span>
                    <input type="text" placeholder="Wpisz nazwę dania"/>
                </label>
                <label>
                    {" "}
                    <span>Potrzebne składniki </span>
                    <input
                        type="text"
                        placeholder="Wpisz potrzebne składniki po porzecinkach np. jajka, mleko"
                    />
                </label>
                <label>
                    {" "}
                    <span>Krótki opis dania</span>
                    <textarea placeholder="Wpisz krótki opis dania"/>
                </label>
                <label>
                    {" "}
                    <span>Składniki</span>
                    <input
                        type="text"
                        placeholder="Wpisz składniki po porzecinkach np. 4 jajka, pół litra mleka"
                    />
                </label>
                <label>
                    {" "}
                    <span> Dokładny opis opis dania</span>
                    <textarea placeholder="Wpisz dokładny opis dania"/>
                </label>
                <button type="submit">Dodaj przepis</button>
            </form>
        </div>
    );
}

export default AddRecipe;
