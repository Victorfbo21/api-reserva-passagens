import ClientsModel from "../../Models/Clients/clientsModel";
import { ICreateClient } from "../../Interfaces/Clients/create-client.interface";
import ClientsService from '../../Services/Clients/clientsService'

export default class ClientsController {

    private ClientsService: ClientsService

    constructor() {
        this.ClientsService = new ClientsService();
    }

    public createUser = async (req: any, res: any) => {
        try {
            const client = req.body
            const created = await this.ClientsService.createClient(client)
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
            const { filter, skip, limit } = req.query

            const find = await this.ClientsService.getClients(filter, skip, limit);
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
            const clientDeleted = await this.ClientsService.deleteClient(id);

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
            const clientUpdate = await this.ClientsService.updateClient(id, update);
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