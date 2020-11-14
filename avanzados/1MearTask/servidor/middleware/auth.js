const jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    // leer el token del header
    const token=req.header('x-auth-token');
    console.log(token)


    // revidar si no hay token



    // validar el token





}