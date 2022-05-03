const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    eventid: String,
    quantity: Number,
    type: String,
    price: Number,
    PhnNo : Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Tickets = mongoose.model('Tickets', ticketSchema);

module.exports = Tickets;