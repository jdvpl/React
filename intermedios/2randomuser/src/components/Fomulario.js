import React, { useState } from "react";
import useGenero from '../hooks/useGenero';
import usePais from '../hooks/usePais';


const Formulario = ({ }) => {

  const GENEROS=[
    {value:'male',label:'Hombre'},
    {value:'female',label:'Mujer'},
    {value:'1',label:'Cualquiera'},
  ]
      // paises disponibles
  const OPCIONESPAIS=[
    {value:'US',label:'Estados Unidos'},
    {value:'BR',label:'Brazil'},
    {value:'IE',label:'Irlanda'},
    {value:'TR',label:'Turquia'},
    {value:'ES',label:'España'},
    {value:'DE',label:'Alemania'},
    {value:'CA',label:'Canada'},
    {value:'AU',label:'Australia'},
    {value:'CH',label:'Suiza'},
    {value:'FI',label:'Finlandia'},
    {value:'DK',label:'Dinamarca'},
    {value:'IR',label:'Iran'},
    {value:'FR',label:'Francia'},
    {value:'NO',label:'Noruega'},
    {value:'NL',label:'Holanda'},
    {value:'GB',label:'Reino Unido'},
    {value:'NZ',label:'Nueva Zelanda'},
    
  ]
      

   // utilizar el customhookde pais
   const [pais,SelectPais]=usePais('US',OPCIONESPAIS);
  // utilizar el customHook de generos
  const [genero,SelectGenero]=useGenero('1',GENEROS);
  

  return (
    <form>
      <div className="row">
        <div className="input-field col s12 m4 mt-5">
          <input
            type="number"
            name="cantidad"
            id="cantidad"/>
          <label htmlFor="ciudad">Cantidad de usuarios: </label>
        </div>

        <div className="input-field col s12 m4 mt-5">
          <SelectGenero/>
        </div>
        <div className="input-field col s12 m4 mt-5">
        <div className="col m1 s2">
        <p>Pais:</p>
        </div>
        <div className="col s10 m11">
        <SelectPais/>
        </div>
          
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
