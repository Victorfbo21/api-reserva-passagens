import ClientsSchema from '../../Schemas/Client/clientsSchema'
import { ICreateClient } from '../../Interfaces/Clients/create-client.interface';
export default class ClientsModel {

    public createClient = async (client: ICreateClient) => {
        try {
            const clientCreated = new ClientsSchema({ ...client })
            const savedClient = await clientCreated.save();
            console.log('Client Saved Successfully!');
            return savedClient;
        }
        catch (err) {
            console.log('Error saving client:');
            console.log(err);
        }
    }

    public getClients = async (filter: string, skip: number, limit: number) => {
        try {
            filter = filter || '';
            const clients = await ClientsSchema.find({
                $or: [
                    { name: new RegExp('.*' + filter + '.*', 'i') },
                    { dateOfBirth: new RegExp('.*' + filter + '.*', 'i') },
                    { gender: new RegExp('.*' + filter + '.*', 'i') },
                ],
            })
                .skip(skip || 0)
                .limit(limit || 0);
            return clients;
        } catch (e) {
            console.log('Error Finding Users', e);
            return null;
        }
    };

    public deleteClient = async (id: string) => {
        try {
            const deletedClient = await ClientsSchema.findByIdAndRemove(id);
            return deletedClient;
        } catch (e) {
            console.log('Error on Delete User:', e);
        }
    }

    public updateClient = async (id: string, update: Partial<ICreateClient>) => {
        try {
            const updatedClient = await ClientsSchema.findByIdAndUpdate(id, update);
            return updatedClient;
        } catch (err) {
            console.log('Error on Updated User:', err);
        }
    }
}