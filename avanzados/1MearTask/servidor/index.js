// importando express
const express=require('express');

// crear el servidor
const app=express();

// se crea el puerto
const PORT =process.env.PORT || 4000;

// definir la pagina principal
app.get('/',(req,res)=>{
    res.send(`<h1>Insectos depravados</h1>`);
});

// arrancar la app
app.listen(PORT,()=>{
    console.log(`corriendo desde el puerto ${PORT}`)
});
