import React,{useState} from 'react';

const Formulario = () => {
    // state del formulario
    const [busqueda,guardarBusqueda]=useState({
        ciudad:'',
        pais:''
    });
    // extraer ciudad y pais
    const {ciudad,pais}=busqueda;
    
    return ( 
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
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

        </form>
     );
}
 
export default Formulario;