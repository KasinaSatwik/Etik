import axios from 'axios';

const url = 'http://localhost:8080/events';
const url1 = 'http://localhost:8080/tickets';

export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);
export const likeEvent = (id) => axios.patch(`${url}/${id}/likeEvent`);
export const updateEvent = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteEvent = (id) => axios.delete(`${url}/${id}`);
export const createTicket = (newTicket) => axios.post(url1, newTicket);