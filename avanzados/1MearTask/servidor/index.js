// importando express
const express=require('express');
const conectarDb=require('./config/db');
// crear el servidor
const app=express();
// conectar a la base de datos
conectarDb();
// se crea el puerto
const PORT =process.env.PORT || 4000;

// definir la pagina principal
app.get('/',(req,res)=>{
    res.send(`<h1>Insectos depravados malditos kakarotizados kekeke</h1>`);
});

// arrancar la app
app.listen(PORT,()=>{
    console.log(`corriendo desde el puerto ${PORT}`)
});
