import mongoose, {model} from "mongoose";
import factory from "mongoose-sequence"


const conection = mongoose.createConnection('mongodb://localhost:27017/TICKET')
const BoletoSchema= mongoose.Schema({
    Documentopasajero:{
        type:Number,
        
    },
    Nombrepasajero:{
        type:String
    },
    Placavehiculo:{
        type:String
    },
    origen:{
        type:String
    },
    destino:{
        type:String
    }
})
 export default conection.model('model', BoletoSchema)