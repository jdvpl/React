import React, { useState } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import firebase from "../firebase";
import Router from "next/router";
import FileUploader from "react-firebase-file-uploader";

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
  photo: "",
  nombre: "",
  email: "",
  password: "",
  repetir: "",
};

const CrearCuenta = () => {
  const [error, seterror] = useState(false);
  // img
  // nombre
  const [nombreimagen, guardarNombre] = useState("");

  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState("");

  // colocar el state inicial
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBLur,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password, repetir } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password, urlimagen);

      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear ese usuario ", error.message);
      seterror(error.message);
    }
  }

  // handles de las imagenes
  // comenzar a subier
  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };
  // progreso
  const handleProgress = (progreso) => guardarProgreso({ progreso });
  // error de subida
  const handleUploadError = (error) => {
    guardarSubiendo(error);
    console.error(error);
  };
  // se sube correctamente
  const handleUploadSuccess = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("userimg")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        guardarUrlImagen(url);
      });
  };

  return (
    <Layout>
      <>
        <Titulo>Crear Cuenta</Titulo>

        <Formulario onSubmit={handleSubmit}>
          {/* imagen 0 */}
          <Campo>
            <label htmlFor="imagen">Imagen</label>
            <FileUploader
              accept="image/*"
              id="imagen"
              name="imagen"
              randomizeFilename
              storageRef={firebase.storage.ref("userimg")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </Campo>

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

          <Campo>
            <label htmlFor="repetir">Repetir Contraseña</label>
            <input
              type="password"
              id="repetir"
              placeholder="Repetir Contraseña"
              name="repetir"
              value={repetir}
              onChange={handleChange}
              onBlur={handleBLur}
            />
          </Campo>
          {errores.repetir && <Error>{errores.repetir}</Error>}

          <InputSubmit type="submit" value="Crear Cuenta" />
        </Formulario>
      </>
    </Layout>
  );
};

export default CrearCuenta;
