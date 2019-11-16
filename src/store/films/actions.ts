import {Film, REQUEST_FILMS, RECEIVE_FILMS, STOP_FILMS_FETCHING, FilmsActionTypes} from './types'

export function requestFilms(): FilmsActionTypes {
  return {type: REQUEST_FILMS}
}

export function receiveFilms(films: Film[]): FilmsActionTypes {
  return {
    type: RECEIVE_FILMS,
    films
  }
}

export function stopFilmsFetching(): FilmsActionTypes {
  return {type: STOP_FILMS_FETCHING}
}
