import React from "react";
import styled from '@emotion/styled';
import Imagen from '../imagen.jpg';
import PropTypes from 'prop-types';

const Img = styled.img`
    height:15rem;
    
`
const Noticia = ({ noticia }) => {

  // extraer los datos
  const { urlToImage, url, title, description, source,content,publishedAt} = noticia;
  const fecha=publishedAt.slice(0,-10)
  const hora=publishedAt.slice(12,-1)

  const imagen = urlToImage ? (
    <div className="card-image waves-effect waves-block waves-light">
      <Img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : 
  <div className="card-image waves-effect waves-block waves-light">
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
        <div className="card-reveal">
          <strong className="card-title grey-text text-darken-4 center heading">
          {title}<i className="material-icons right">close</i>
          </strong>
          <p>{description}</p>
          <p>{content}</p>
          <h5 className="center">Fecha y hora de publicacion</h5>
          <span>Publicado el: {fecha} a las {hora}</span> 
        </div>
        
      </div>
    </div>
  );
};
Noticia.propTypes={
  noticia: PropTypes.object.isRequired
}

export default Noticia;
