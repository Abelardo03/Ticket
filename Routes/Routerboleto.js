import { Router } from "express";
import{   
listar,
craerboleto,
editarboleto,
eliminarboleto,
} from "../Controllers/BoletoController.js"

const Routerboleto = new Router()

Routerboleto.get('/buscar',listar)
Routerboleto.post('/crear',craerboleto)
Routerboleto.put('/editar',editarboleto)
Routerboleto.delete('/:id',eliminarboleto)

export default Routerboleto