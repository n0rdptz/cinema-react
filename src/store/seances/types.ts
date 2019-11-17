import {NormalizedObjects} from '../types';
import {Ticket} from '../tickets/types';

export const REQUEST_SEANCE = 'REQUEST_SEANCE';
export const REQUEST_SEANCES = 'REQUEST_SEANCES';
export const RECEIVE_SEANCE = 'RECEIVE_SEANCE';
export const RECEIVE_SEANCES = 'RECEIVE_SEANCES';
export const RESET_SEANCE = 'RESET_SEANCE';
export const RESET_SEANCES = 'RESET_SEANCES';
export const RESERVE_SEANCE_TICKETS = 'RESERVE_SEANCE_TICKETS';
export const UPDATE_SEANCE_TICKETS = 'UPDATE_SEANCE_TICKETS';
export const STOP_FETCHING_SEANCES = 'STOP_FETCHING_SEANCES';
export const STOP_FETCHING_TICKETS = 'STOP_FETCHING_TICKETS';

export interface Seance {
  id: number
  filmId: number
  time: string
  hallNumber: number,
  filmTitle?: string
  filmDescription?: string
  filmCover?: string
  tickets?: []
}

export interface SeancesState {
  isFetching: boolean
  isTicketsFetching: boolean
  seance: Seance | null
  seances: NormalizedObjects<Seance>
}

interface RequestSeanceAction {
  type: typeof REQUEST_SEANCE
}

interface RequestSeancesAction {
  type: typeof REQUEST_SEANCES
}

interface ReceiveSeanceAction {
  type: typeof RECEIVE_SEANCE,
  seance: Seance
}

interface ReceiveSeancesAction {
  type: typeof RECEIVE_SEANCES,
  seances: Seance[]
}

interface ResetSeanceAction {
  type: typeof RESET_SEANCE
}

interface ResetSeancesAction {
  type: typeof RESET_SEANCES
}

interface ReserveSeanceTicketsAction {
  type: typeof RESERVE_SEANCE_TICKETS
}

interface UpdateSeanceTicketsAction {
  type: typeof UPDATE_SEANCE_TICKETS,
  tickets: any[]
}

interface StopFetchingSeancesAction {
  type: typeof STOP_FETCHING_SEANCES
}

interface StopFetchingTicketsAction {
  type: typeof STOP_FETCHING_TICKETS
}

export type SeancesActionTypes = RequestSeanceAction
  | RequestSeancesAction
  | ReceiveSeanceAction
  | ReceiveSeancesAction
  | ResetSeanceAction
  | ResetSeancesAction
  | ReserveSeanceTicketsAction
  | UpdateSeanceTicketsAction
  | StopFetchingSeancesAction
  | StopFetchingTicketsAction
