import FlightsModel from "../../Models/Flights/flightsModel"

export default class FlightsController {
    private FlightsModel: FlightsModel

    constructor() {
        this.FlightsModel = new FlightsModel()
    }

    public createFlight = async (req: any, res: any) => {
        try {
            const flight = req.body
            const created = await this.FlightsModel.createFlight(flight)

            if (created) {
                res.status(201).send(created);
            } else {
                res.status(500).json({ error: 'Error on create flight' })
            }
        }
        catch (err) {
            res.status(500).json({ error: 'Error on create flight' })
        }
    }
}