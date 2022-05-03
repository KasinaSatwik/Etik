const mongoose = require("mongoose");

//import EventMessage from '../models/eventMessage.js';
const EventMessage = require("../models/eventMessage.js");

const router = require("express").Router();

const getEvents = async (req, res) => { 
    try {
        const eventMessages = await EventMessage.find();
                
        res.status(200).json(eventMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getEvent = async (req, res) => { 
    const { id } = req.params;

    try {
        const event = await EventMessage.findById(id);
        
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createEvent = async (req, res) => {
    const { title, description, selectedFile, creator, tags , location , city } = req.body;

    const newEventMessage = new EventMessage({ title, description, selectedFile, creator, tags , location , city })

    try {
        await newEventMessage.save();

        res.status(201).json(newEventMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, description, selectedFile, creator, tags , location , city } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    const updatedEvent = { title, description, selectedFile, creator, tags , location , city, _id: id };

    await EventMessage.findByIdAndUpdate(id, updatedEvent, { new: true });

    res.json(updatedEvent);
}

const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await EventMessage.findByIdAndRemove(id);

    res.json({ message: "Event deleted successfully." });
}

const likeEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    
    const event = await EventMessage.findById(id);

    const updatedEvent = await EventMessage.findByIdAndUpdate(id, { likeCount: event.likeCount + 1 }, { new: true });
    
    res.json(updatedEvent);
}


module.exports = { getEvents, getEvent, createEvent, updateEvent, likeEvent, deleteEvent };