import React, { createContext, useEffect, useState } from 'react';

// crear el context
export const ModalContext=createContext();

const ModalProvider = (props) => {
    // state del provider VA ASE nullo porque asi debe ser inicial hasta que el usuario presion una que el guste
    const [idreceta,guardarIdReceta]=useState(null);
    // una vez que ya tenemos la receta llamar la api

    useEffect(()=>{

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