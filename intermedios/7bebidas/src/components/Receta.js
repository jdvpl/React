import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalConsumer } from '../context/ModalContext';


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
      width: 400,
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
    const {guardarIdReceta}=useContext(ModalContext);

  const { strDrinkThumb,strDrink,idDrink } = receta;

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
          open={open}
          >
          <div style={modalStyle} className={classes.paper}>
            <h1>Desde Modal</h1>
          </div>
        </Modal>
      </div>
    </div>
    </div>
  );
};

export default Receta;
