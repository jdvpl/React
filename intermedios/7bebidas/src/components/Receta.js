import React from "react";

const Receta = ({ receta }) => {
  const { strDrinkThumb,strDrink } = receta;

  return (
      <div className="col-md-4 mt-3">
    <div className="card ">
      <img src={strDrinkThumb} className="card-img-top img-fluid" alt={`Imagen de ${strDrink}`} title={strDrink}/>
      <div className="card-body">
        <h6 className="card-title text-center truncate text-info font-weight-bold">{strDrink}</h6>
        <a href="#" className="btn btn-success btn-block">
          Receta
        </a>
      </div>
    </div>
    </div>
  );
};

export default Receta;
