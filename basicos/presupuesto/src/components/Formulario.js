import React,{useState} from 'react';

const Formulario = () => {
    return (

        <form>
            <h3>Agrega tus gastos aqui</h3>
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. carne"
                     />

            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 8000"
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