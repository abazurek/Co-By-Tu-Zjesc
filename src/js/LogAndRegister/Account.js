import React from "react";
import {NavLink} from "react-router-dom";

function Account({info,elem,recipes}) {
    let fav=[];
    if(info && recipes){
        fav=info.favourite;
    }



    return(
        <div className='container my-account'>
            <div className='account-fav'>
                <span>Ulubione przepisy</span>
                {fav.length!==0? fav.map(elem=> {
                       return  recipes.map(function (item) {
                            if(item.name===elem){
                                return(<NavLink className='navLink ' key={fav.indexOf(elem)}  to={`/recipe/${item.name}`}>
                                    <li  key={fav.indexOf(elem)}>{elem}</li></NavLink>)
                            }
                        })
                    })
                    :
                    <span className='problems'>
                    Nie masz jeszcze żadnych ulubionych przepisów. Aby dodać przepis do ulubionych
                        kliknij na serduszko znajdujące się przy nazwie przepisu.
                </span>}
          </div>
           <div className='account-myRec'>
               <span>Moje przepisy</span>
               <span className='problems'>Nie masz jeszcze swoich przepisów..</span>
           </div>
        </div>
    )
}

export default Account