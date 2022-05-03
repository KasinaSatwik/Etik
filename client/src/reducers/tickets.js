import { CREATE_TIC } from '../constants/actionTypes';

export default (tickets = [], action) => {
  switch (action.type) {
    case CREATE_TIC:
      return [...tickets, action.payload];
    default:
      return tickets;
  }
};