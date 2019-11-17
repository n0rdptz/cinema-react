import {
  Film,
  FilmsState,
  FilmsActionTypes,
  REQUEST_FILMS,
  STOP_FETCHING_FILMS,
  RECEIVE_FILMS
} from './types';
import {normalizeArray} from "../../services/utils";

const initialState: FilmsState = {
  isFetching: false,
  isError: false,
  films: {
    byId: {},
    allIds: []
  }
};

export function filmsReducer(state: FilmsState = initialState, action: FilmsActionTypes): FilmsState {
  switch (action.type) {
    case REQUEST_FILMS:
      return {
        ...state,
        isFetching: true
      };
    case STOP_FETCHING_FILMS:
      return {
        ...state,
        isFetching: false
      };
    case RECEIVE_FILMS:
      return {
        ...state,
        films: {
          byId: normalizeArray(action.films),
          allIds: action.films.map((film) => String(film.id))
        },
        isFetching: false
      };
    default:
      return state;
  }
}
