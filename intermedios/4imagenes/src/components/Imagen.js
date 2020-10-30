import React from 'react';

const Imagen = ({imagen}) => {
    const {largeImageURL,views,downloads,likes,tags}=imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
                <img src={largeImageURL} alt={tags} className="card-img-top " />
                
                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <p className="card-text">{downloads} Descargas</p>
                </div>
                <div className="card-footer">
                    <a 
                    href={largeImageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-block btn-primary"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
      );
}
 
export default Imagen;
