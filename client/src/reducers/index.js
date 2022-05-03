import { combineReducers } from 'redux';

import events from './events';
import tickets from './tickets';

export const reducers = combineReducers({ events },{tickets});