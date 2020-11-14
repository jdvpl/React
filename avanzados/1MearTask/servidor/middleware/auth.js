const jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    // leer el token del header
    const token=req.header('x-auth-token');
    // res.json({token})

    // revidar si no hay token
    if(!token){
        return res.status(401).json({msg:'No hay Token, permiso denegado'})
    }


    // validar el token





}