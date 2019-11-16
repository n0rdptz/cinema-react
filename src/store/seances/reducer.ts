import {
  Seance,
  SeancesState,
  SeancesActionTypes,
  REQUEST_SEANCES,
  RECEIVE_SEANCES,
  RESET_SEANCES
} from './types';
import { normalizeArray } from "../../services/utils";

const initialState: SeancesState = {
  isFetching: false,
  seances: {
    byId: {},
    allIds: []
  }
};

export function seancesReducer(state: SeancesState = initialState, action: SeancesActionTypes): SeancesState {
  switch (action.type) {
    case REQUEST_SEANCES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SEANCES:
      return {
        ...state,
        seances: {
          byId: normalizeArray<Seance>(action.seances),
          allIds: action.seances.map((seance) => String(seance.id))
        },
        isFetching: false
      };
    case RESET_SEANCES:
      return {
        ...state,
        seances: {
          byId: {},
          allIds: []
        }
      };
    default:
      return state;
  }
}
