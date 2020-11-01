import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// crear el context
export const ModalContext=createContext();

const ModalProvider = (props) => {
    // state del provider VA ASE nullo porque asi debe ser inicial hasta que el usuario presion una que el guste
    const [idreceta,guardarIdReceta]=useState(null);
    // una vez que ya tenemos la receta llamar la api

    useEffect(()=>{
        
        const obtenerIngredientes=async()=>{
            if(!idreceta)return;
            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const ingrediente=await axios(url);
            console.log(ingrediente.data.drinks[0]);

        }
        obtenerIngredientes();
        

    },[idreceta])
    return ( 
        <ModalContext.Provider
        value={{
            guardarIdReceta

        }}>
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;