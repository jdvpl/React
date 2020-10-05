import React from 'react';
import './carrito.css';
import Producto from './Producto';


const Carrito = ({carrito}) =>  (  
    <div className="carrito">
        <h3>Tu carrito de compras</h3>
        {carrito.length===0
        ?
            <p>No hay elementos</p>
        :
        carrito.map(producto => (
            <Producto
                key={producto.id}
                producto={producto}
            />
        ))}

    </div>
);

 
export default Carrito;