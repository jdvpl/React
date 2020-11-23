import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {editarProducto} from '../actions/productoActions';
import {useHistory} from 'react-router-dom';

const EditarProducto = () => {
    const dispatch = useDispatch();
    const history=useHistory();


    // ek state para leer los nuevos productos
    const [producto, setproducto] = useState({
        nombre:'',
        precio:'',
        cantidad:'',
        cliente:'',
        vendedor:''
    })
    // producto a editar
    const productoExite = useSelector(state => state.productos.productoeditar);
    
    useEffect(() => {
        setproducto(productoExite);
    }, [productoExite])

    const onChangeForm=e=>{
        setproducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }


    const {nombre,precio,cliente,vendedor,cantidad}=producto;
    const edicion=e=>{
        e.preventDefault();

        dispatch(editarProducto(producto));
        history.push('/');
    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wight-bold">Editar Producto</h2>

                        <form
                            onSubmit={edicion}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className="form-group">
                                <label>Cantidad</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Cantidad"
                                    name="cantidad"
                                    value={cantidad}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className="form-group">
                                <label>Cliente</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="cliente"
                                    name="cliente"
                                    value={cliente}
                                    onChange={onChangeForm}
                                />
                                 </div>
                                <div className="form-group">
                                <label>Vendedor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="vendedor"
                                    name="vendedor"
                                    value={vendedor}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-capitaliza d-block w-100">
                                    Guardar
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;