import React, {useState} from "react";
import {useHistory} from "react-router-dom";


const newRecipe = {
    "name": "",
    "shortDesc": "",
    "need":"",
    "ingredients": "",
    "longDesc": ""

};

const style={
    color:"red",
    fontSize:"18px"
};

function AddRecipe(name) {
    let history = useHistory();

    const [recipe, setRecipe]=useState(newRecipe);
    const [message, setMessage]=useState(newRecipe);
    function submitForm(e) {
        e.preventDefault();
        if(recipe.name.length<3 ){
            setMessage(prev=>({...prev, name:"Nazwa dania nie moźe być krótsza niż 3 znaki"}));
            return;
        } else  setMessage(prev=>({...prev, name:""}));


        history.push(`/account/${name}`)

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
                    <input type="text" placeholder="Wpisz nazwę dania" onChange={({target})=>setRecipe(prev=>({...prev, name:target.value}))}/>
                    <span style={style}>{message.name}</span>
                </label>
                <label>
                    {" "}
                    <span>Potrzebne składniki </span>
                    <input
                        type="text"
                        placeholder="Wpisz potrzebne składniki po porzecinkach np. jajka, mleko"
                    />
                    <span style={style}>{message.need}</span>
                </label>
                <label>
                    {" "}
                    <span>Krótki opis dania</span>
                    <textarea placeholder="Wpisz krótki opis dania"/>
                    <span style={style}>{message.shortDesc}</span>
                </label>
                <label>
                    {" "}
                    <span>Składniki</span>
                    <input
                        type="text"
                        placeholder="Wpisz składniki po porzecinkach np. 4 jajka, pół litra mleka"
                    />
                    <span style={style}>{message.ingredients}</span>
                </label>
                <label>
                    {" "}
                    <span> Dokładny opis opis dania</span>
                    <textarea placeholder="Wpisz dokładny opis dania"/>
                    <span style={style}>{message.longDesc}</span>
                </label>
                <button type="submit">Dodaj przepis</button>
            </form>
        </div>
    );
}

export default AddRecipe;
