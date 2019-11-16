import {getSeancesByFilmId} from '../../backend/data';
import {Action, Dispatch} from 'redux';
import {SeancesActionTypes} from './types';
import {requestSeances, receiveSeances} from './actions';
import {AppState} from '../rootReducer';
import {ThunkAction} from "redux-thunk";

export const thunkGetSeancesByFilmId = (filmId: number): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch: Dispatch<SeancesActionTypes>) => {
    dispatch(requestSeances());
    try {
      const seances = await getSeancesByFilmId(filmId);
      dispatch(receiveSeances(seances));
    } catch (e) {
      // todo add error redux module
    }
  };
};
