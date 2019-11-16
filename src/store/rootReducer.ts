import {combineReducers} from 'redux';
import {filmsReducer} from './films/reducer';
import {seancesReducer} from './seances/reducer';
import {ticketsReducer} from './tickets/reducer';

const rootReducer = combineReducers({
  films: filmsReducer,
  seances: seancesReducer,
  // tickets: ticketsReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
