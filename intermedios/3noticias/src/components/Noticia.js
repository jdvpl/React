import React from "react";
import styled from '@emotion/styled';
import Imagen from '../imagen.jpg';

const Img = styled.img`
    height:15rem;
    
`
const Noticia = ({ noticia }) => {
  
  // extraer los datos
  const { urlToImage, url, title, description, source,content,publishedAt} = noticia;
  const fecha=publishedAt.slice(0,-10)
  console.log(fecha)

  const imagen = urlToImage ? (
    <div className="card-image waves-effect waves-block waves-light">
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
      <div className="card">
        {imagen}
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 truncate">
            {title}
            <i className="material-icons right">more_vert</i>
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
          <p>{content}</p>
          <span>Fecha: {fecha}</span> 
        </div>
        
      </div>
    </div>
  );
};

export default Noticia;
