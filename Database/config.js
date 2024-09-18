import { connect } from "mongoose";
const dbconnection = async()=>{
    try{
        await connect(process.env.MONGO_CNN)
        console.log("conectado a mongo")

    }catch(error){
        console.log('problemas al conectar al mongo')
    }
}
 export default dbconnection