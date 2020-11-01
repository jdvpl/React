import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const RecetasContext=createContext();
const RecetasProvider = (props) => {
    const [recetas,guardarRecetas]=useState([]);
    const [busqueda,buscarRecetas]=useState({
        nombre:'',
        categoria:''
    });
    // aplicando destructuring para los datos: categoria y bebida
    const{nombre,categoria}=busqueda;

    useEffect(()=>{
        const obtenerRecetas=async()=>{
            const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${nombre}&c=${categoria}`;
            const receta=await Axios(url);
            console.log(receta);
        }
        obtenerRecetas();
    },[busqueda])
    return (  
        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;