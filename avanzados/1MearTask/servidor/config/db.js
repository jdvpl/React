const mongoose  = require("mongoose");

require('dotenv').config({path:'vaiables.env'});

const conectarDb=async()=>{
    try {
        await mongoose.connect();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports=conectarDb;