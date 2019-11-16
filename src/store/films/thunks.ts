import {getFilms} from '../../backend/data';
import {Action, Dispatch} from 'redux';
import {FilmsActionTypes} from './types';
import {requestFilms, receiveFilms, stopFilmsFetching} from './actions';
import {AppState} from '../rootReducer';
import {ThunkAction} from "redux-thunk";

export const thunkGetFilms = (): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: Dispatch<FilmsActionTypes>) => {
    dispatch(requestFilms());
    try {
      const films = await getFilms();
      dispatch(receiveFilms(films));
    } catch (e) {
      dispatch(stopFilmsFetching());
    }
  };
};
