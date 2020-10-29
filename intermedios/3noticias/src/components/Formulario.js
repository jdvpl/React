import React from 'react';
import styles from './Fomulario.module.css';
import useSelect from '../hooks/useSelect';
import usePais from '../hooks/usePais';




const Formulario = ({guardarPais,guardarCategoria}) => {
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
    // paises disponibles
    const OPCIONESPAIS=[
        {value:'co',label:'Colombia'},
        {value:'us',label:'Estados Unidos'},
        {value:'at',label:'Austria'},
        {value:'fr',label:'Francia'},
        {value:'ve',label:'Venezuela'},
        {value:'za',label:'Sudafrica'},
        {value:'ru',label:'Rusia'},
        {value:'br',label:'Brazil'},
        {value:'ca',label:'Canada'},
        {value:'de',label:'Alemania'},
        {value:'mx',label:'Mexico'},
        {value:'ch',label:'Suiza'},
        {value:'ae',label:'Emiraros Arabes'},
        {value:'jp',label:'Japon'},
        {value:'it',label:'Italia'},
        {value:'ar',label:'Argentina'},
        {value:'be',label:'Belgica'},
        {value:'cn',label:'China'},
        {value:'pt',label:'Portugal'},
        {value:'rs',label:'Serbia'},
        {value:'tr',label:'Turquia'},
        {value:'sa',label:'Arabia Saudita'},

    ]
    // utilizar el customHool 
    const [categoria,SelecNoticias]=useSelect('general',OPCIONESCATE);
    // utilizar el customhookde pais
    const [pais,SelectPais]=usePais('co',OPCIONESPAIS);
    // submir al form pasar categoria y pais
    const buscarNoticias=e=>{
        e.preventDefault();
        guardarCategoria(categoria);
        guardarPais(pais);
    }
    
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2"> 
                <form
                    onSubmit={buscarNoticias}
                >
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