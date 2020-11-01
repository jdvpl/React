import React, { createContext } from 'react';

export const RecetasContext=createContext();
const RecetasProvider = (props) => {
    return (  
        <RecetasContext.Provider>
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;