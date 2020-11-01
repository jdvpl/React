import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Receta = ({ receta }) => {

    // extrayendo los valores del context
    const {guardarIdReceta}=useContext(ModalContext);

  const { strDrinkThumb,strDrink,idDrink } = receta;

  return (
      <div className="col-md-4 mt-3">
    <div className="card ">
      <img src={strDrinkThumb} className="card-img-top img-fluid" alt={`Imagen de ${strDrink}`} title={strDrink}/>
      <div className="card-body">
        <h6 className="card-title text-center truncate text-info font-weight-bold">{strDrink}</h6>
        <button 
        className="btn btn-primary btn-block"
        onClick={()=>{
            guardarIdReceta(idDrink)
        }}
        >
          Ver Receta
        </button>
      </div>
    </div>
    </div>
  );
};

export default Receta;
