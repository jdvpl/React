import React,{useContext, useState} from "react";
import { CategoriasContext } from "../context/CategoriaContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
    const {categorias}=useContext(CategoriasContext);
    const {buscarRecetas,guardarConsultar}=useContext(RecetasContext);
    
    // el state para guarda lo que el usuario selecciona
    const [busqueda,guardarBusqueda]=useState({
      nombre:'',
      categoria:''
    })
    // funcion para leer los contenidos
    const obtenerReceta=e=>{
      guardarBusqueda({
        ...busqueda,
        [e.target.name]:e.target.value
      })
    }
    

  return (
    <form className="col-12"
      onSubmit={e=>{
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoria o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            className="form-control mb-3"
            type="text"
            name="nombre"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerReceta}
          />
        </div>
        <div className="col-md-4">
        <select 
          className="form-control mb-3"
          name="categoria"
          onChange={obtenerReceta}
        >
            <option value="">Seleccione</option>
            {categorias.map(categoria=>(
              <option
                key={categoria.strCategory}
                value={categoria.strCategory}
              >
                {categoria.strCategory}
              </option>
            ))}
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
