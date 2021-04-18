import React, { useState } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import firebase from "../firebase";
import Router from "next/router";

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
  const [error, seterror] = useState(false);

  // colocar el state inicial
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBLur,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear ese usuario ", error.message);
      seterror(error.message);
    }
  }

  return (
    <Layout>
      <>
        <Titulo>Crear Cuenta</Titulo>

        <Formulario onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBLur}
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
              onBlur={handleBLur}
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
              onBlur={handleBLur}
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
