export const SET_RESERVED_TICKETS = 'SET_RESERVED_TICKETS';
export const RESET_RESERVED_TICKETS = 'RESET_RESERVED_TICKETS';

export interface Ticket {
  id: number
  seanceId: number
  price: number
  row: number
  seat: number
  reserved: string
}

export interface TicketsState {
  reservedTickets: {
    byId: { [key: number]: Ticket },
    allIds: string[]
  }
}

interface SetReservedTicketsAction {
  type: typeof SET_RESERVED_TICKETS
  tickets: { [key: number]: Ticket }
}

interface ResetReservedTicketsAction {
  type: typeof RESET_RESERVED_TICKETS
}

export type TicketsActionTypes = SetReservedTicketsAction | ResetReservedTicketsAction
