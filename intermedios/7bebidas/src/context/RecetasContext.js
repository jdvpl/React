import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const RecetasContext=createContext();
const RecetasProvider = (props) => {
    const [recetas,guardarRecetas]=useState([]);
    const [busqueda,buscarRecetas]=useState({
        nombre:'',
        categoria:''
    });
    // state para la consulta
    const [consultar,guardarConsultar]=useState(false);
    // aplicando destructuring para los datos: categoria y bebida
    const{nombre,categoria}=busqueda;

    useEffect(()=>{
        if(consultar){
            const obtenerRecetas=async()=>{
                const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const receta=await Axios(url);
                // console.log(receta.data.drinks);
                guardarRecetas(receta.data.drinks)
            }
            obtenerRecetas();
        }
        
    },[busqueda])
    return (  
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;