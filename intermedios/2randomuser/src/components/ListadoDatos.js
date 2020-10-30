import React from "react";
import Datos from "./Datos";

const ListadoDatos = ({ resultado }) => (
  <div className="row">
    {resultado &&
      resultado.map((res) => <Datos key={res.login.uuid} res={res} />)}
  </div>
);
export default ListadoDatos;
