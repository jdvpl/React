import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { FirebaseContext } from "../firebase";
import Router from "next/router";

import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearProducto from "../validacion/validarCrearProducto";

const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  // imagen: "",
  url: "",
  descripcion: "",
};

const NuevoProducto = () => {
  const [error, seterror] = useState(false);

  // colocar el state inicial
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBLur,
  } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);

  const { nombre, empresa, imagen, url, descripcion } = valores;

  async function crearProducto() {}

  return (
    <Layout>
      <>
        <Titulo>Nuevo Producto</Titulo>

        <Formulario onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}

          <fieldset>
            <legend>Informacion General</legend>
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
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                placeholder="Empresa o Compañia"
                name="empresa"
                value={empresa}
                onChange={handleChange}
                onBlur={handleBLur}
              />
            </Campo>
            {errores.empresa && <Error>{errores.empresa}</Error>}

            {/* <Campo>
              <label htmlFor="imagen">Imagen</label>
              <input
                type="file"
                id="imagen"
                name="imagen"
                value={imagen}
                onChange={handleChange}
                onBlur={handleBLur}
              />
            </Campo>
            {errores.imagen && <Error>{errores.imagen}</Error>} */}

            <Campo>
              <label htmlFor="url">Repositorio</label>
              <input
                type="url"
                id="url"
                name="url"
                value={url}
                placeholder="Url del repositorio"
                onChange={handleChange}
                onBlur={handleBLur}
              />
            </Campo>
            {errores.url && <Error>{errores.url}</Error>}
          </fieldset>

          {errores.descripcion && <Error>{errores.descripcion}</Error>}
          <fieldset>
            <legend>Sobre tu Producto</legend>

            <Campo>
              <label htmlFor="descripcion">Descripcion</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
                onBlur={handleBLur}
              ></textarea>
            </Campo>
          </fieldset>

          <InputSubmit type="submit" value="Crear Producto" />
        </Formulario>
      </>
    </Layout>
  );
};

export default NuevoProducto;
