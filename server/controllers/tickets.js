const mongoose = require("mongoose");

const Tickets = require("../models/ticket.js");

const router = require("express").Router();

const getTickets = async (req, res) => { 
    try {
        const tickets = await Tickets.find();
                
        res.status(200).json(tickets);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createTicket = async (req, res) => {
    const { eventid, quantity, type, price} = req.body;

    const newTicket = new Tickets({ eventid, quantity, type, price})

    try {
        await newTicket.save();

        res.status(201).json(newTicket );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = { getTickets, createTicket };