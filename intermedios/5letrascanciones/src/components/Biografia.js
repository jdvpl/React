import React,{Fragment} from 'react';

const Biografia = ({biografia}) => {
    if(Object.keys(biografia),strArtistWideThumb.length===0)return null;
    const {strBiographyES,strArtistWideThumb}=biografia;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
            Informacion Artista
            </div>
            <div className="card-body">
                <img src={strArtistWideThumb} alt="Logo Artista"/>
            </div>
           

            <p className="letra">{strBiographyES}</p>
        </div>
     );
}
 
export default Biografia;