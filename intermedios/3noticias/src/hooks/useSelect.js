import React from 'react';

const UseSelect = ({stateInicial,opciones}) => {
    const SelectNoticias=()=>(
        <select className="browser-default">
            <option value="">Seleccione</option>
        </select>
    );
    //! lo que va retornar en el formulario
    return[state,SelectNoticias];
}
 
export default UseSelect;