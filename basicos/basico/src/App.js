import React,{Fragment,useState} from 'react';
import Header from './components/Header'; /** importar el componete header */
import Footer from './components/Footer'; 
import Producto from './components/Producto'; 
import Carrito from './components/Carrito'; 

function App() {
    // listado de productos
    const [productos, guardarProductos ]=useState([
        {id:1,nombre:'MSI GE63 Raider 8RE', precio:5000000},
        {id:2,nombre:'Mac Catalina', precio:10000000},
        {id:3,nombre:'Asus Rog', precio:5000000},
        {id:4,nombre:'Lenovo', precio:5000000},
    ]);

    // state para un carrito de compras
    const [carrito,agregarProducto]=useState([])


    //obtener la fecha
    const fecha=new Date().getFullYear();

    return (
        <Fragment> 
            <Header
            titulo="Tienda Virtual"
            /> 
            <h2>Lista de Prodcutos</h2>
            {productos.map(producto=>(
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    productos={productos}
                    agregarProducto={agregarProducto}
                />
            ))}
            <Carrito
                carrito={carrito}
            />
            
            <Footer
                fecha={fecha}
            />
        </Fragment>
    );
}

export default App;