import React from 'react';


function Header(){
    //algo de jsx
    //este codigo solo debe ir antes del return
    const edad=18;
    let mensaje;

    if (edad>=18){
        mensaje='Eres mayor de edad';
    }else{
        mensaje='Eres menor de edad';
    }

    return( /** lo que se va a ver en el navegador */
        <div>
            <h2>Desde el Header {mensaje} jiren</h2>
        </div>
       


    );
}
/**se exporta para utilizarlo en el index.js */
export default Header;