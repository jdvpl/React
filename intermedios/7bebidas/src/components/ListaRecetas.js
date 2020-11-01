import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';

const ListaRecetas = () => {
    // extraer las recetas
    const {recetas}=useContext(RecetasContext);
    console.log(recetas)
    return ( 
        <div className="row">
            {recetas.map(receta=>(
                <Receta/>
            ))}
        </div>
     );
}
 
export default ListaRecetas;