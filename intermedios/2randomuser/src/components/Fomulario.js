import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  // state del formulario

  const [error, guardarError] = useState(false);
  // extraer ciudad y pais
  const { ciudad, pais, genero } = busqueda;
  // funcion quye coloca los elemento en el state
  const handleChange = (e) => {
    // actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  // cuando el usuario da submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion
    if (ciudad.trim() === "" || pais.trim() === "" || genero.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarConsultar(true);
    // pasarlo al componente principal
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="row">
        <div className="input-field col s12 m4 mt-5">
          <input
            type="number"
            name="ciudad"
            id="ciudad"
            value={ciudad}
            onChange={handleChange}
          />
          <label htmlFor="ciudad">Cantidad de usuarios: </label>
        </div>

        <div className="input-field  col s12 m4 mt-5">
          <select name="pais" id="pais" value={pais} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="US">Estados Unidos</option>
            <option value="BR">Brazil</option>
            <option value="IE">Irlanda</option>
            <option value="TR">Turquia</option>
            <option value="ES">España</option>
            <option value="DE">Alemania</option>
            <option value="CA">Canadá</option>
            <option value="AU">Australia</option>
            <option value="CH">Suiza</option>
            <option value="FI">Finalandia</option>
            <option value="DK">Dinamarca</option>
            <option value="IR">Iran</option>
            <option value="FR">Francia</option>
            <option value="NO">Noruega</option>
            <option value="NL">Holanda</option>
            <option value="GB">Reino Unido</option>
            <option value="NZ">Nueva Zelanda</option>
          </select>
          <label htmlFor="pais">Pais: </label>
        </div>
        
        <div className="input-field col s12 m4 mt-5">
          <select
            name="genero"
            id="genero"
            value={genero}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="male">Hombre</option>
            <option value="female">mujer</option>
            <option value="1">cualquiera</option>
          </select>
          <label htmlFor="genero">Genero: </label>
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
};

export default Formulario;
