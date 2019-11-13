export const REQUEST_FILMS = 'REQUEST_FILMS';
export const ERROR_REQUEST_FILMS = 'ERROR_REQUEST_FILMS';
export const RESET_ERRORS = 'RESET_ERRORS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';

export interface Film {
  id: number
  title: string
  description: string
  cover: string
}

export interface FilmsState {
  isFetching: boolean,
  isError: boolean,
  films: Film[]
}

interface RequestFilmsAction {
  type: typeof REQUEST_FILMS
}

interface ErrorRequestFilmsAction {
  type: typeof ERROR_REQUEST_FILMS
}

interface ResetErrorsAction {
  type: typeof RESET_ERRORS
}

interface ReceiveFilmsAction {
  type: typeof RECEIVE_FILMS,
  films: Film[]
}

export type FilmsActionTypes = RequestFilmsAction | ErrorRequestFilmsAction | ResetErrorsAction | ReceiveFilmsAction
