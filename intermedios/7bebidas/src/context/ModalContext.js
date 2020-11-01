import React, { createContext } from 'react';

// crear el context
export const ModalContext=createContext();

const ModalProvider = (props) => {
    return ( 
        <ModalContext.Provider
        value={{
            
        }}>
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;