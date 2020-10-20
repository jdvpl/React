import React,{useState} from 'react';
import Error from './Error';

const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {
    // state del formulario
 
    const [error,guardarError]=useState(false);
    // extraer ciudad y pais
    const {ciudad,pais}=busqueda;
    // funcion quye coloca los elemento en el state
    const handleChange=e=>{
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    // cuando el usuario da submit
    const handleSubmit=e=>{
        e.preventDefault();
        // validacion
        if(ciudad.trim()==='' || pais.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsultar(true);
        // pasarlo al componente principal
    }
    return ( 
        <form
            onSubmit={handleSubmit}
        >  
         {error?<Error mensaje="Todos los campos son obligatorios"/>:null}
             <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">Seleccione</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="CA">Canadá</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
export default Formulario;