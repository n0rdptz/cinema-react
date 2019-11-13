import {
  FilmsState,
  FilmsActionTypes,
  REQUEST_FILMS,
  RECEIVE_FILMS
} from './types';

const initialState: FilmsState = {
  isFetching: false,
  films: []
};

export function seancesReducer(state = initialState, action: FilmsActionTypes) {
  switch (action.type) {
    case REQUEST_FILMS:
      return {
        ...state,
        isFetching: true
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
