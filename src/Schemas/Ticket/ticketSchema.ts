import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
    flight_number: { type: String },
    flight_date: { type: String },
    seat: { type: String },
    value : {type : String},
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },
}, {
    timestamps: true
})

const Ticket = mongoose.model('Ticket', TicketSchema)

export default Ticket

