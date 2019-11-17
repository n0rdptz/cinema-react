import React from "react";
import {AppState} from "../../store/rootReducer";
import {connect, useDispatch} from "react-redux";
import {Ticket, TicketsState} from "../../store/tickets/types";
import {setReserveTickets} from "../../store/tickets/actions";

const mapStateToProps = (state: AppState) => {
  return {
    tickets: state.tickets
  }
};

interface ReservedTicketProps {
  ticket: Ticket
  tickets: TicketsState
}

const ReservedTicket: React.FC<ReservedTicketProps> = (props) => {
  const {ticket, tickets} = props;
  const dispatch = useDispatch();

  const reservedTickets: { [key: number]: Ticket } = Object.assign({}, tickets.reservedTickets.byId);

  function remove() {
    delete reservedTickets[ticket.id];
    dispatch(setReserveTickets({...reservedTickets}));
  }

  return (
    <span className="reserved-ticket" onClick={remove}>Row {ticket.row} seat {ticket.seat}</span>
  );
};

export default connect(mapStateToProps)(ReservedTicket);
