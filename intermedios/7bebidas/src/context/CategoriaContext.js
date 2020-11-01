import React, { createContext, useState } from 'react';

// crear el context
export const CategoriasContext=createContext();
// provider es donde se encuentran las funciones y state

const CategoriasProvider=(props)=>{
    // crear el state del context
    const [categorias,guardarCategorias]=useState([]);

    // lo quye va a devolver
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