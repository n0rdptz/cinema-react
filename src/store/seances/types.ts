export const REQUEST_FILMS = 'REQUEST_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';

export interface Film {
  id: number
  title: string
  description: string
  cover: string
}

export interface FilmsState {
  isFetching: boolean
  films: Film[]
}

interface RequestFilmsAction {
  type: typeof REQUEST_FILMS
}

interface ReceiveFilmsAction {
  type: typeof RECEIVE_FILMS,
  films: Film[]
}

export type FilmsActionTypes = RequestFilmsAction | ReceiveFilmsAction
