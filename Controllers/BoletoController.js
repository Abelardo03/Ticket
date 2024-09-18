import { blob } from "stream/consumers"
import Boleto from "../Module/Boleto.js"
import cuenta from "../Module/Boleto.js"

export async function listar(req, res) {
    const boleto = await Boleto.find()
    res.json(boleto)
    
}

export async function craerboleto(req, res) {
    try {
        const{
            Documentopasajero,
            Nombrepasajero,
            Placavehiculo,
            origen,
            destino
        }= req.body
        const nuevoboleto = new Boleto({
            Documentopasajero,
            Nombrepasajero,
            Placavehiculo,
            origen,
            destino
        })
        await nuevoboleto.save()
        res.json("boleto creado efectivamente")
    } catch (error) {
        res.json("error al crear el boleto")
    }
    
}
export async function editarboleto(req, res) {
    try {
        const{
            Documentopasajero,
Nombrepasajero,
Placavehiculo,
origen,
destino
        }= req.body
        const edit = await Boleto.findOne({Documentopasajero:Documentopasajero,Nombrepasajero:Nombrepasajero,Placavehiculo:Placavehiculo,origen:origen,destino:destino})

    } catch (error) {
        res.json("error al editar boleto")
    }
}

export async function eliminarboleto(req, res) {
    try {
        const _id = req.params._id
        const boletoroto = await Boleto.findOneId(_id)
        await Boleto.findOneIdAndDelete(_id)
        res.json("boleto elimnado exitosamente papu ricoooo")
    } catch (error) {
        res.json("no se pudo eliminar cuenta")
    }
    
}