import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

// validaciones
import useValidacion from "../hooks/useValidacion";

const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;
const CrearCuenta = () => {
  const STATE_INICIAL = {
    nombre: "",
    email: "",
    password: "",
  };

  // colocar el state inicial
  const {} = useValidacion(STATE_INICIAL);

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
