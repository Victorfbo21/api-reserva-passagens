import { Router } from "express";
import ClientsController from "../../Controllers/Clients/clientsController";

const ClientsRouter = Router();

const clientsController = new ClientsController();


ClientsRouter.get('/list', (req, res) => {
    return clientsController.getClients(req, res)
})

ClientsRouter.put('/create', (req, res) => {
    return clientsController.createClient(req, res)
})

ClientsRouter.delete('/delete', (req, res) => {
    return clientsController.deleteClient(req, res)
})

ClientsRouter.patch('/update', (req, res) => {
    return clientsController.updateClient(req, res)
})


export default ClientsRouter;