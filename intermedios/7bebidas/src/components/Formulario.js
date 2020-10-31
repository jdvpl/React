import React,{useContext} from "react";
import { CategoriasContext } from "../context/CategoriaContext";

const Formulario = () => {
    const {hola}=useContext(CategoriasContext);
    alert(hola)
  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoria o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="nombre"
            placeholder="Buscar por Ingrediente"
          />
        </div>
        <div className="col-md-4">
        <select 
        className="form-control"
        name="categoria"
        >
            <option value="">Seleccione</option>
        </select>
      </div>
      
      <div className="col-md-4">
          <input
            className="btn btn-block btn-outline-primary"
            type="submit"
            value="Buscar Bebidas"
          />
        </div>
      </div>
      
    </form>
  );
};

export default Formulario;
