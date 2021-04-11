import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;
const CrearCuenta = () => {
  return (
    <Layout>
      <>
        <Titulo>Crear Cuenta</Titulo>

        <Formulario>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
            />
          </Campo>

          <Campo>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Tu Email"
              name="email"
            />
          </Campo>

          <Campo>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Tu Contraseña"
              name="password"
            />
          </Campo>

          <InputSubmit type="submit" value="Crear Cuenta" />
        </Formulario>
      </>
    </Layout>
  );
};

export default CrearCuenta;
