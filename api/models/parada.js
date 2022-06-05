const mongoose = require('mongoose')

const paradaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    coordenadas:{
        type: [String],
        required: true,
        trim: true 
    },
    lineas: [{
        linea: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Linea'
        }  
    }]
})

const Parada = mongoose.model('Parada', paradaSchema)

module.exports = Parada