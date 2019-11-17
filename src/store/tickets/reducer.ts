import {
  TicketsState,
  TicketsActionTypes,
  SET_RESERVED_TICKETS,
  RESET_RESERVED_TICKETS
} from './types';

const initialState: TicketsState = {
  reservedTickets: {
    byId: {},
    allIds: []
  }
};

export function ticketsReducer(state = initialState, action: TicketsActionTypes): TicketsState {
  switch (action.type) {
    case SET_RESERVED_TICKETS:
      return {
        ...state,
        reservedTickets: {
          byId: action.tickets,
          allIds: Object.keys(action.tickets).map(key => String(key))
        }
      };
    case RESET_RESERVED_TICKETS:
      return {
        ...state,
        reservedTickets: {
          byId: {},
          allIds: []
        }
      };
    default:
      return state;
  }
}
