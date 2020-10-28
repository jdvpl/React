import React from 'react';


const Formulario = () => {
    return ( 
        <div className="row">
            <div className="col s12 m8 offset-m2"> 
                <form>
                    <h2>Encuantra noticias por categoria</h2>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className="btn-large amber darken-2"
                            value="buscar"
                        />

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;