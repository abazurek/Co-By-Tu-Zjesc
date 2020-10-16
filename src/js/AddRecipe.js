import React from "react";

function AddRecipe() {
    return(
        <div className='container my-recipe'>
            <h2>Dodaj władny przepis</h2>
            <form>
                <label> Nazwa dania
                    <input type='text' placeholder='Wpisz nazwę dania'/>
                </label>
                <label> Potrzebne składniki
                    <input type='text' placeholder='Wpisz potrzebne składniki po porzecinkach'/>
                </label>
                <label> Krótki opis dania
                   <textarea placeholder='Wpisz krótki opis dania'/>
                </label><label> Dokładny opis opis dania
                <textarea placeholder='Wpisz dokładny opis dania'/>
                </label>
            </form>
        </div>
    )
}

export default AddRecipe