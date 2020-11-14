const mongoose = require("mongoose");

const ProyectoSchema=mongoose.Schema({
    nombre:{
        type:String,
    },
    creador:{

    },
    creado:{

    }
})

module.exports=mongoose.model('Proyecto',ProyectoSchema);