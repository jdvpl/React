// importando express
const express=require('express');
const conectarDb=require('./config/db');
// crear el servidor
const app=express();
// conectar a la base de datos
conectarDb();
// se crea el puerto
const PORT =process.env.PORT || 4000;

// importar rutas
app.use('/api/usuarios',require('./routes/usuarios'));

// arrancar la app
app.listen(PORT,()=>{
    console.log(`corriendo desde el puerto ${PORT}`)
});