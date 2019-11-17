import {Ticket, SET_RESERVED_TICKETS, RESET_RESERVED_TICKETS, TicketsActionTypes} from './types'

export function setReserveTickets(tickets: { [key: number]: Ticket }): TicketsActionTypes {
  return {type: SET_RESERVED_TICKETS, tickets}
}

export function resetReservedTickets(): TicketsActionTypes {
  return {type: RESET_RESERVED_TICKETS}
}
