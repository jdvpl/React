import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';

const ListaRecetas = () => {
    // extraer las recetas
    const {recetas}=useContext(RecetasContext);
    console.log(recetas)
    return ( 
        <div className="row">
            {recetas.map(receta=>(
                
            ))}
        </div>
     );
}
 
export default ListaRecetas;