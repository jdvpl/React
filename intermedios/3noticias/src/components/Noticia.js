import React from "react";
import styled from '@emotion/styled';
import Imagen from '../imagen.jpg';

const Img = styled.img`
    height:15rem;
    
`


const Noticia = ({ noticia }) => {
  // extraer los datos
  const { urlToImage, url, title, description, source } = noticia;
  const imagen = urlToImage ? (
    <div class="card-image waves-effect waves-block waves-light">
      <Img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : 
  <div class="card-image waves-effect waves-block waves-light">
      <Img src={Imagen} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  return (
    <div className="col s12 m6">
      <div class="card">
        {imagen}
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4 truncate">
            {title}
            <i class="material-icons right">more_vert</i>
          </span>
          <p>
            <a href={url}
            target="_blank"
            rel="noreferrer"
            >Ver Noticia Completa</a>
          </p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
          {title}<i class="material-icons right">close</i>
          </span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
