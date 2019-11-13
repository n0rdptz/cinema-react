import {
  FilmsState,
  FilmsActionTypes,
  REQUEST_FILMS,
  ERROR_REQUEST_FILMS,
  RECEIVE_FILMS
} from './types';

const initialState: FilmsState = {
  isFetching: false,
  isError: false,
  films: []
};

export function filmsReducer(state = initialState, action: FilmsActionTypes) {
  switch (action.type) {
    case REQUEST_FILMS:
      return {
        ...state,
        isFetching: true
      };
    case ERROR_REQUEST_FILMS:
      return {
        ...state,
        isFetching: false
      };
    case RECEIVE_FILMS:
      return {
        ...state,
        films: action.films,
        isFetching: false
      };
    default:
      return state;
  }
}
