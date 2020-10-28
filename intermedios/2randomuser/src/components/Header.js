import React from "react";
import imagen from '../img/logo.png';
import styled from '@emotion/styled';

const Imagen = styled.img`
    margin-top:1vh;  
    width:45px;
    @media(max-width : 600px) {
    margin-top:1.1vh;
    width:18%;
    }
    @media(max-width : 300px) and (max-width:599px) {
    width:90%;
    }
    
`

const Header = () => {
  return (
    <nav className="blue-grey darken-3" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#!" className="brand-logo">
          <Imagen src={imagen}/>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#!">Usuarios</a>
          </li>
          <li>
            <a href="#footer">Footer</a>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav blue-grey darken-3">
          <li>
            <a href="#!" className="white center">Usuarios</a>
          </li>
        </ul>
        <a href="#!" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
