import ClientsModel from "../../Models/Clients/clientsModel";
import { ICreateClient } from "../../Interfaces/Clients/create-client.interface";

export default class ClientsController {

    private ClientsModel: ClientsModel

    constructor() {
        this.ClientsModel = new ClientsModel();
    }


    public createClient = async (req: any, res: any) => {
        try {
            const client = req.body
            const created = await this.ClientsModel.createClient(client)

            if (created) {
                res.status(201).send(created);
            } else {
                res.sendStatus(500).json({ error: 'Error on create client' })
            }
        }
        catch (err) {
            console.error('Error inserting client:', err);
            res.sendStatus(500).json({ error: 'Error inserting client' })
        }
    }

    public getClients = async (req: any, res: any) => {
        try {
            const find = await this.ClientsModel.getClients(req.query.filter, req.query.skip, req.query.limit);
            if (find) {
                res.status(200).send(find);
            } else {
                res.sendStatus(500);
            }
        } catch (error) {
            console.error('Error getting clients:', error);
            res.sendStatus(500);
        }
    }

    public deleteClient = async (req: any, res: any) => {
        try {
            const id = req.query.id;
            const clientDeleted = await this.ClientsModel.deleteClient(id);
            if (clientDeleted) {
                res.send(`Usuário ${clientDeleted._id} Foi Deletado`);
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        } catch (error) {
            console.error('Error deleting client:', error);
            res.sendStatus(500);
        }
    }

    public updateClient = async (req: any, res: any) => {
        try {
            const id = req.query.id;
            const update: Partial<ICreateClient> = req.body;
            const clientUpdate = await this.ClientsModel.updateClient(id, update);
            if (clientUpdate) {
                res.send(clientUpdate);
            } else {
                res.sendStatus(500);
            }
        } catch (error) {
            console.error('Error updating client:', error);
            res.sendStatus(500);
        }
    }

}