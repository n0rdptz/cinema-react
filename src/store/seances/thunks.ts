import {getSeancesByFilmId, getSeanceById, reserveTicketsById} from '../../backend/data';
import {Action, Dispatch} from 'redux';
import {SeancesActionTypes} from './types';
import {
  requestSeance,
  receiveSeance,
  requestSeances,
  receiveSeances,
  stopFetchingSeances,
  stopFetchingTickets,
  reserveSeanceTickets,
  updateSeanceTickets
} from './actions';
import {AppState} from '../rootReducer';
import {ThunkAction} from "redux-thunk";
import {Ticket} from "../tickets/types";

export const thunkGetSeanceById = (id: number): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: Dispatch<SeancesActionTypes>) => {
    dispatch(requestSeance());
    try {
      const seance = await getSeanceById(id);
      dispatch(receiveSeance(seance));
    } catch (e) {
      dispatch(stopFetchingSeances());
    }
  };
};

export const thunkGetSeancesByFilmId = (filmId: number): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: Dispatch<SeancesActionTypes>) => {
    dispatch(requestSeances());
    try {
      const seances = await getSeancesByFilmId(filmId);
      dispatch(receiveSeances(seances));
    } catch (e) {
      dispatch(stopFetchingSeances());
    }
  };
};

export const thunkReserveTicketsBy = (seanceId: number, ticketIds: number[]): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: Dispatch<SeancesActionTypes>) => {
    dispatch(requestSeances());
    try {
      const tickets = await reserveTicketsById(seanceId, ticketIds);
      dispatch(updateSeanceTickets(tickets));
    } catch (e) {
      dispatch(stopFetchingTickets());
    }
  };
};
