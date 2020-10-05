import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {

    const {nombre,precio,id}=producto
    // agregar producto al carrito
    const seleccionarProducto=id=>{
        const producto=productos.filter(producto => producto.id===id);
        agregarProducto([
            ...carrito,
            ...producto
        ]);
    }
    // eliminando producto del carrito
    const EliminarProducto =id=>{
        const productos=carrito.filter(producto=>producto.id !==id);
        // colocar los productos en el state

        agregarProducto(productos)

    }

    return ( 
        <div>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            
             {productos
             ?
            (
                <button
                    type="button"
                    onClick={()=>seleccionarProducto(id)}
                    >
                    Comprar
                </button>
             )
             :
             (
                <button
                    type="button"
                    onClick={()=>EliminarProducto(id)}
                    >
                    Eliminar
                </button>
             )
             }
        </div>
     );
}
 
export default Producto;