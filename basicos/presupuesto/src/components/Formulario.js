import React,{useState} from 'react';
import Error from './Error';

const Formulario = () => {
    
    const [nombre,guardarNombre]=useState('')
    const [cantidad,guardarCantidad]=useState(0)
    const [error, guardarError]=useState(false)

    // cuando el usuario agrega un gasto
    const agregarGasto=e=>{
        e.preventDefault();

        // validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        // costruir gasto
        const gasto={
            nombre,
            cantidad,
            id:
        }

    }
    return (

        <form
            onSubmit={agregarGasto}
            >
            <h3>Agrega tus gastos aqui</h3>
            {error ? <Error mensaje="Ambos campos son obligatorios"/>:null}
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. carne"
                    value={nombre}
                    onChange={e=> guardarNombre(e.target.value)}
                     />

            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 8000"
                    value={cantidad}
                    onChange={e=> guardarCantidad(parseInt(e.target.value,10))}
                     />

            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
           
        </form>
      );
}
 
export default Formulario;