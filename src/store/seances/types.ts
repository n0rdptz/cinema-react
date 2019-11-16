import { NormalizedObjects } from '../types';

export const REQUEST_SEANCES = 'REQUEST_SEANCES';
export const RECEIVE_SEANCES = 'RECEIVE_SEANCES';
export const RESET_SEANCES = 'RESET_SEANCES';

export interface Seance {
  id: number
  filmId: number
  time: string
  hallNumber: number
}

export interface SeancesState {
  isFetching: boolean
  seances: NormalizedObjects<Seance>
}

interface RequestSeancesAction {
  type: typeof REQUEST_SEANCES
}

interface ReceiveSeancesAction {
  type: typeof RECEIVE_SEANCES,
  seances: Seance[]
}

interface ResetSeancesAction {
  type: typeof RESET_SEANCES
}

export type SeancesActionTypes = RequestSeancesAction | ReceiveSeancesAction | ResetSeancesAction
