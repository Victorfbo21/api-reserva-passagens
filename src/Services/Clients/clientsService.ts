import ClientsModel from "../../Models/Clients/clientsModel";
import { ICreateClient } from "../../Interfaces/Clients/create-client.interface";


export default class ClientsService {

    private ClientsModel: ClientsModel

    constructor() {
        this.ClientsModel = new ClientsModel();
    }

    public createClient = async (client: ICreateClient) => {
        try {
            const created = await this.ClientsModel.createClient(client)
            if (!created) {
                throw new Error("Erro ao inserir Usuário")
            }

            return created
        }
        catch (err) {
            console.error('Error inserting client:', err);
        }
    }

    public getClients = async (filter, skip, limit) => {
        try {
            const find = await this.ClientsModel.getClients(filter, skip, limit);

            if (!find) {
                throw new Error("Erro em retornar Usuário(s)")
            }
            return find
        } catch (error) {
            console.error('Error getting clients:', error);
        }
    }

    public deleteClient = async (id: string) => {
        try {
            const clientDeleted = await this.ClientsModel.deleteClient(id);
            if (!clientDeleted) {
                throw new Error("Erro ao deletar Usuário")
            }
            return clientDeleted

        } catch (error) {
            console.error('Error deleting client:', error);
        }
    }

    public updateClient = async (req: any, res: any) => {
        try {
            const id = req.query.id;
            const update: Partial<ICreateClient> = req.body;
            const clientUpdate = await this.ClientsModel.updateClient(id, update);

            if (!clientUpdate) {
                throw new Error("Erro ao atualizar usuário")
            }

            return clientUpdate
        } catch (error) {
            console.error('Error updating client:', error);
        }
    }

}