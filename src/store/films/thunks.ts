import {getFilms} from '../../backend/data';
import {Action, Dispatch} from 'redux';
import {FilmsActionTypes} from './types';
import {requestFilms, errorRequestFilms, receiveFilms} from './actions';
import {AppState} from '../rootReducer';
import {ThunkAction} from "redux-thunk";

export const thunkGetFilms = (): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: Dispatch<FilmsActionTypes>) => {
    dispatch(requestFilms());
    try {
      const films = await getFilms();
      console.log(films);
      dispatch(receiveFilms(films));
    } catch (e) {
      dispatch(errorRequestFilms());
    }
  };
};
