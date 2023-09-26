import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
    flight_number: { type: String },
    flight_date: { type: String },
    number_of_seats: { type: String },
    value : {type : String},
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },
}, {
    timestamps: true
})

const Flight = mongoose.model('Flight', FlightSchema)

export default Flight

