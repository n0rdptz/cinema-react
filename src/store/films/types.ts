import { NormalizedObjects } from '../types';

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const STOP_FILMS_FETCHING = 'STOP_FILMS_FETCHING';

export interface Film {
  id: number
  title: string
  description: string
  cover: string
}

export interface FilmsState {
  isFetching: boolean,
  isError: boolean,
  films: NormalizedObjects<Film>
}

interface RequestFilmsAction {
  type: typeof REQUEST_FILMS
}

interface ReceiveFilmsAction {
  type: typeof RECEIVE_FILMS,
  films: Film[]
}

interface StopFilmsFetchingAction {
  type: typeof STOP_FILMS_FETCHING
}

export type FilmsActionTypes = RequestFilmsAction | StopFilmsFetchingAction | ReceiveFilmsAction
