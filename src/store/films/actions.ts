import {Film, REQUEST_FILMS, RECEIVE_FILMS, STOP_FETCHING_FILMS, FilmsActionTypes} from './types'

export function requestFilms(): FilmsActionTypes {
  return {type: REQUEST_FILMS}
}

export function receiveFilms(films: Film[]): FilmsActionTypes {
  return {
    type: RECEIVE_FILMS,
    films
  }
}

export function stopFetchingFilms(): FilmsActionTypes {
  return {type: STOP_FETCHING_FILMS}
}
