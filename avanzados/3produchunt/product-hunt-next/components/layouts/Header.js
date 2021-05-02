import React, { useContext } from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";
import styled from "@emotion/styled";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Logo = styled.a`
  color: #000;
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
  cursor: pointer;
`;

const Header1 = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
`;

const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-right: 2rem;
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
  return (
    <Header1>
      <ContenedorHeader>
        <Div1>
          <Link href="/">
            <Logo>JDVPL</Logo>
          </Link>

          <Buscar />

          <Navegacion />
        </Div1>

        <Div2>
          {usuario ? (
            <>
              <P>Hola: {usuario.displayName}</P>
              <Boton
                bgColor="true"
                onClick={() => {
                  firebase.cerrarSesion();
                }}
                href="/"
              >
                Cerrar Sesion
              </Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </>
          )}
        </Div2>
      </ContenedorHeader>
    </Header1>
  );
};

export default Header;
