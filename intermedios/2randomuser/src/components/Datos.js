import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const IMG = styled.div`
  margin: auto;
  text-align: center;

  img {
    width: 100%;
  }
`;

const Datos = ({ resultado, img }) => {
  const { name } = resultado;
  if (!name) return null;
  return (
    <div className="row">
      <div className="card-panel col s12 m3">
        <div className="black-text">
          <div class="card">
            <IMG class="card-image waves-effect waves-block waves-light">
              <img src={`${resultado.picture.large}`} />
            </IMG>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Nombre: {resultado.name.first} {resultado.name.last}
                <i class="material-icons right">more_vert</i>
              </span>
              <p>Telefono: {resultado.phone}</p>
              <p>Celular: {resultado.cell}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Descripcion<i class="material-icons right">close</i>
              </span>
              <p>Genero: {resultado.gender}</p>
              <p>Edad: {resultado.dob.age}</p>
              <h5 className="center">Ubicacion</h5>
              <p>Pais: {resultado.location.country}</p>
              <p>Estado: {resultado.location.state}</p>
              <p>Ciudad: {resultado.location.city}</p>
              <h5 className="center">Datos</h5>
              <p>Correo: {resultado.email}</p>
              <p>Usuario: {resultado.login.username}</p>
              <p>Clave: {resultado.login.password}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datos;
