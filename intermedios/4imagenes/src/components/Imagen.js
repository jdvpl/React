import React from 'react';

const Imagen = ({imagen}) => {
    const {user,largeImageURL,views,downloads,favorites,likes,previewURL,tags}=imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top img-fluid" />
            </div>
        </div>
      );
}
 
export default Imagen;
