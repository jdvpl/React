import React, { createContext, useState } from 'react';

// crear el context
export const ModalContext=createContext();

const ModalProvider = (props) => {
    // state del provider VA ASE nullo porque asi debe ser inicial hasta que el usuario presion una que el guste
    const [idreceta,guardarIdReceta]=useState(null);
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