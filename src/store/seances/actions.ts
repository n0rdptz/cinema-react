import {RECEIVE_SEANCES, REQUEST_SEANCES, RESET_SEANCES, Seance, SeancesActionTypes} from './types'

export function requestSeances(): SeancesActionTypes {
  return {type: REQUEST_SEANCES}
}

export function receiveSeances(seances: Seance[]): SeancesActionTypes {
  return {
    type: RECEIVE_SEANCES,
    seances
  }
}

export function resetSeances(): SeancesActionTypes {
  return {type: RESET_SEANCES}
}
