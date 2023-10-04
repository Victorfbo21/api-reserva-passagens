import FlightSchema from "../../Schemas/Flight/flightsSchema"
import { ICreateFlight } from "../../Interfaces/Flights/create-flight.interface"

export default class FlightsModel {

    public createFlight = async (flight: ICreateFlight) => {

        try {
            const flightCreated = new FlightSchema({ ...flight })
            const saveFlight = await flightCreated.save()
            console.log('Flight Saved Successfully!');
            return saveFlight
        }
        catch (err) {
            console.log('Error on create Flight:', err)
        }
    }

    public getFlights = async (filter: string, skip: number, limit: number) => {
        try {
            filter = filter || '';
            const clients = await FlightSchema.find({
                $or: [
                    { flight_number: new RegExp('.*' + filter + '.*', 'i') },
                    { flight_date: new RegExp('.*' + filter + '.*', 'i') },
                    { number_of_seats: new RegExp('.*' + filter + '.*', 'i') },
                ],
            })
                .skip(skip || 0)
                .limit(limit || 0);
            return clients;
        } catch (e) {
            console.log('Error Finding Flights', e);
            return null;
        }
    };

    public deleteFlight = async (id: string) => {
        try {
            const deletedClient = await FlightSchema.findByIdAndRemove(id);
            if (deletedClient)
                return true
            else
                return false
        } catch (e) {
            console.log('Error on Delete User:', e);
        }
    }

    public updateFlight = async (id: string, update: Partial<ICreateFlight>) => {
        try {
            const updatedClient = await FlightSchema.findByIdAndUpdate(id, update);
            return updatedClient;
        } catch (err) {
            console.log('Error on Updated User:', err);
        }
    }

}