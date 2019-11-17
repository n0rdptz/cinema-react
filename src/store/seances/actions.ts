import {
  RECEIVE_SEANCE,
  RECEIVE_SEANCES,
  REQUEST_SEANCE,
  REQUEST_SEANCES,
  RESERVE_SEANCE_TICKETS,
  UPDATE_SEANCE_TICKETS,
  RESET_SEANCE,
  RESET_SEANCES,
  STOP_FETCHING_SEANCES,
  STOP_FETCHING_TICKETS,
  Seance,
  SeancesActionTypes
} from './types';
import {Ticket} from "../tickets/types";

export function requestSeance(): SeancesActionTypes {
  return {type: REQUEST_SEANCE}
}

export function receiveSeance(seance: Seance): SeancesActionTypes {
  return {
    type: RECEIVE_SEANCE,
    seance
  }
}

export function requestSeances(): SeancesActionTypes {
  return {type: REQUEST_SEANCES}
}

export function receiveSeances(seances: Seance[]): SeancesActionTypes {
  return {
    type: RECEIVE_SEANCES,
    seances
  }
}

export function resetSeance(): SeancesActionTypes {
  return {type: RESET_SEANCE}
}

export function resetSeances(): SeancesActionTypes {
  return {type: RESET_SEANCES}
}

export function reserveSeanceTickets(): SeancesActionTypes {
  return {type: RESERVE_SEANCE_TICKETS}
}

export function updateSeanceTickets(tickets: any[]): SeancesActionTypes {
  return {
    type: UPDATE_SEANCE_TICKETS,
    tickets
  }
}

export function stopFetchingSeances(): SeancesActionTypes {
  return {type: STOP_FETCHING_SEANCES}
}

export function stopFetchingTickets(): SeancesActionTypes {
  return {type: STOP_FETCHING_TICKETS}
}
