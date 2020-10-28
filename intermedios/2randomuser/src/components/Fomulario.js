import React,{useState} from 'react';

import usePais from '../hook/usePais';


const Formulario = () => {

    const PAISES = [
        { codigo: 'AM', nombre: 'Armenia' },
        { codigo: 'ES', nombre: 'España' },
        { codigo: 'FI', nombre: 'Finlandia' },
        { codigo: 'FR', nombre: 'Francia' },


    ];
    const [pais,Selectpais]=usePais('Elige tu moneda','',PAISES);
    return (  
        <form>
        <div className="row">

         <div className="input-field col s12 m6">
            <input
                type="number"
                name="ciudad"
            />
            <label htmlFor="ciudad">Cantidad de usuarios: </label>
        </div>

        <div class="col s12 m6">
            <Selectpais/>
            </div>

        <div className="input-field col s12 center">
            <input
                type="submit"
                value="Buscar"
                className="waves-effect waves-light btn-large btn-block  white-text "
            />
        </div>
        </div> 
        
    </form>
    );
}
 
export default Formulario;