import React from 'react';
import styles from './Fomulario.module.css';
import useSelect from '../hooks/useSelect';
import usePais from '../hooks/usePais';




const Formulario = () => {
    // opciones de categorias
    const OPCIONESCATE=[
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertainment',label:'Entretenimiento'},
        {value:'health',label:'Salud'},
        {value:'science',label:'Ciencia'},
        {value:'technology',label:'Tecnologia'},
        {value:'sports',label:'Deportes'},
    ]
    // utilizar el customHool 
    const [categoria,SelecNoticias]=useSelect();
    const [paises,SelectPais]=usePais();
    
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2"> 
                <form>
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelecNoticias/>
                    <SelectPais/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="buscar"
                        />

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;