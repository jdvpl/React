import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';



function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {
  // configuracion del modal de materialUi
  const [modalStyle]=useState(getModalStyle);
  const [open,setOpen]=useState(false);
  const classes=useStyles();

  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }

    // extrayendo los valores del context
    const {info,guardarIdReceta,guardarReceta}=useContext(ModalContext);


  const { strDrinkThumb,strDrink,idDrink } = receta;
  // muestra los ingredientes
  const mostrarIngredientes=info=>{
    let ingredientes=[];
    for(let i=1;i<16;i++){
      if(info[`strIngredient${i}`]){
        ingredientes.push(
          <li>{info[`strIngredient${i}`]}  {info[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes;
  }

  return (
      <div className="col-md-4 mt-3">
    <div className="card ">
      <img src={strDrinkThumb} className="card-img-top img-fluid" alt={`Imagen de ${strDrink}`} title={strDrink}/>
      <div className="card-body">
        <h6 className="card-title text-center truncate text-info font-weight-bold">{strDrink}</h6>
        <button 
        className="btn btn-primary btn-block"
        onClick={()=>{
            guardarIdReceta(idDrink);
            handleOpen();
        }}
        >
          Ver Receta
        </button>
        <Modal
         aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={()=>{
          guardarIdReceta(null);
          guardarReceta({});
          handleClose();
          
        }}
          open={open}
          >
          <div style={modalStyle} className={classes.paper}>
            <h2>{info.strDrink}</h2>
            <h4 className="mt-4">Instrucciones:</h4>
            <p>
              {info.strInstructions}
            </p>
            <img src={info.strDrinkThumb} className="img-fluid my-4"/>
          
          <h3>Ingredientes y Cantidades</h3>
            <ul>
              {mostrarIngredientes(info)}
            </ul>
          </div>

        </Modal>
      </div>
    </div>
    </div>
  );
};

export default Receta;
