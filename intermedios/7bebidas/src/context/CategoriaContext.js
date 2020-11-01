import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// crear el context
export const CategoriasContext=createContext();
// provider es donde se encuentran las funciones y state

const CategoriasProvider=(props)=>{
    // crear el state del context
    const [categorias,guardarCategorias]=useState([]);

    // ejecutar el llamdo a la api

    useEffect(()=>{
        const obtenerCategotias=async()=>{

        }
        obtenerCategotias();
    })
    return(
        <CategoriasContext.Provider
            value={{
                
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;