import {
  SeancesActionTypes,
  SeancesState,
  RECEIVE_SEANCE,
  RECEIVE_SEANCES,
  REQUEST_SEANCE,
  REQUEST_SEANCES,
  RESERVE_SEANCE_TICKETS,
  RESET_SEANCE,
  RESET_SEANCES,
  STOP_FETCHING_SEANCES,
  STOP_FETCHING_TICKETS,
  UPDATE_SEANCE_TICKETS
} from './types';
import {normalizeArray, normalizeTicketsArray} from "../../services/utils";

const initialState: SeancesState = {
  isFetching: false,
  isTicketsFetching: false,
  seance: null,
  seances: {
    byId: {},
    allIds: []
  }
};

export function seancesReducer(state: SeancesState = initialState, action: SeancesActionTypes): SeancesState {
  switch (action.type) {
    case REQUEST_SEANCE:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_SEANCES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SEANCE:
      return {
        ...state,
        seance: {
          ...action.seance,
          tickets: normalizeTicketsArray(action.seance.tickets)
        },
        isFetching: false
      };
    case RECEIVE_SEANCES:
      return {
        ...state,
        seances: {
          byId: normalizeArray(action.seances),
          allIds: action.seances.map((seance) => String(seance.id))
        },
        isFetching: false
      };
    case STOP_FETCHING_SEANCES:
      return {
        ...state,
        isFetching: false
      };
    case RESET_SEANCE:
      return {
        ...state,
        seance: null
      };
    case RESERVE_SEANCE_TICKETS:
      return {
        ...state,
        isTicketsFetching: true
      };
    case UPDATE_SEANCE_TICKETS:
      let {seance} = state;
      if (seance) {
        seance = {
          ...seance,
          tickets: normalizeTicketsArray(action.tickets)
        };
      } else {
        seance = null;
      }
      return {
        ...state,
        seance,
        isTicketsFetching: false
      };
    case STOP_FETCHING_TICKETS:
      return {
        ...state,
        isTicketsFetching: false
      };
    case RESET_SEANCES:
      return {
        ...state,
        seances: {
          byId: {},
          allIds: []
        }
      };
    default:
      return state;
  }
}
