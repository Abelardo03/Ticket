import express, {json } from "express";
import "dotenv/config"
import dbconnection from "../Database/config.js"
import Routerboleto from "../Routes/Routerboleto.js"


class server{
    constructor(){
        this.app=express()
        this.listen()
        this.route()
        this.dbconnection()
    }
    route(){
        this.app.use(json())
        this.app.use('/jopo', Routerboleto)
    }
    async dbconnection(){
        await dbconnection()
    }
    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`escuchando puerto ${process.env.PORT}` )
        })
    }
}
export default server