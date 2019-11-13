import {Film, REQUEST_FILMS, ERROR_REQUEST_FILMS, RECEIVE_FILMS, FilmsActionTypes} from './types'

export function requestFilms(): FilmsActionTypes {
  return {type: REQUEST_FILMS}
}

export function errorRequestFilms(): FilmsActionTypes {
  return {type: ERROR_REQUEST_FILMS}
}

export function receiveFilms(films: Film[]): FilmsActionTypes {
  return {
    type: RECEIVE_FILMS,
    films
  }
}
