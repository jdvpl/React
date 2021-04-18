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
import validarLogin from "../validacion/validarLogin";

const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const STATE_INICIAL = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, seterror] = useState(false);

  // colocar el state inicial
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBLur,
  } = useValidacion(STATE_INICIAL, validarLogin, login);

  const { email, password } = valores;

  async function login() {
    try {
      const usuario = await firebase.login(email, password);
      console.log(usuario);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al iniciar Sesion", error.message);
      seterror(error.message);
    }
  }

  return (
    <Layout>
      <>
        <Titulo>Iniciar Sesión</Titulo>

        <Formulario onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}

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

          <InputSubmit type="submit" value="Iniciar Sesion" />
        </Formulario>
      </>
    </Layout>
  );
};

export default Login;
