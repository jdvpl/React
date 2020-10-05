import React from 'react';


function Header({titulo}){

    return(
       <h1 className="encabezado">{titulo}</h1>
       


    );
}
/**se exporta para utilizarlo en el index.js */
export default Header;