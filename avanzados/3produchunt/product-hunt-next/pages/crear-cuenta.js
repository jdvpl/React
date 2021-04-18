import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};

const CrearCuenta = () => {
  // colocar el state inicial
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearcuenta);

  const { nombre, email, password } = valores;

  function crearcuenta() {
    console.log("creando cuenta..." + nombre + email + password);
  }

  return (
    <Layout>
      <>
        <Titulo>Crear Cuenta</Titulo>

        <Formulario onSubmit={handleSubmit} noValidate>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </Campo>

          {errores.nombre && <Error>{errores.nombre}</Error>}

          <Campo>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Tu Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Campo>
          {errores.email && <Error>{errores.email}</Error>}

          <Campo>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Tu Contraseña"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Campo>
          {errores.password && <Error>{errores.password}</Error>}

          <InputSubmit type="submit" value="Crear Cuenta" />
        </Formulario>
      </>
    </Layout>
  );
};

export default CrearCuenta;
