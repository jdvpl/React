import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // extraer si un poryecto esta activo
     const proyectosContext = useContext(proyectoContext);
    // extraer el proyecto del context
     const {proyecto}=proyectosContext;
    //  si no hay proyecto seleccionado
     if(!proyecto)return null;
    const [proyectoActual]=proyecto;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        placeholder="Nombre Tarea..."
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;