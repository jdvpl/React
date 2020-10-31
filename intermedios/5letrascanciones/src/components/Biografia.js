import React from 'react';

const Biografia = ({info}) => {
    if(Object.keys(info).length===0)return null;
    const {strBiographyES,strArtistFanart,strArtistWideThumb,strGenre}=info;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
            Informacion Artista
            </div>
            <div className="card-body">

            {strArtistWideThumb==null?<img src={strArtistFanart} alt="Logo Artista"/>: <img src={strArtistWideThumb} alt="Logo Artista"/>}
            </div>
            <p className="card-text">Genero: {strGenre}</p>
            <h3>Biografia</h3>
            <p className="card-text">{strBiographyES}</p>
            <p className="card-text">
            <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lastfm"></i>
            </a>
            </p>
        </div>
     );
}
 
export default Biografia;