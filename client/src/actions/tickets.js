
import * as api from '../api/index.js';
import { CREATE_TIC } from '../constants/actionTypes';

export const createTicket = (ticket) => async (dispatch) => {
    try {
      const { data } = await api.createTicket(ticket);
  
      dispatch({ type: CREATE_TIC, payload: data });
    } catch (error) {
      console.log(error);
    }
  };