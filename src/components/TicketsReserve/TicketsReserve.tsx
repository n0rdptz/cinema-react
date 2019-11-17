import React from "react";
import {AppState} from "../../store/rootReducer";
import {connect, useDispatch} from "react-redux";
import {TicketsState} from "../../store/tickets/types";
import {resetReservedTickets} from "../../store/tickets/actions";
import {thunkReserveTicketsBy} from '../../store/seances/thunks';
import {useParams} from "react-router";
import ReservedTicket from "../ReservedTicket/ReservedTicket";

const mapStateToProps = (state: AppState) => {
  return {
    tickets: state.tickets
  }
};

interface ReserveTicketsProps {
  tickets: TicketsState
}

const TicketsReserve: React.FC<ReserveTicketsProps> = (props) => {
  const {tickets} = props;
  const {seanceId} = useParams();
  const dispatch = useDispatch();

  const reservedTicketElements = Object.values(tickets.reservedTickets.byId).map((ticket) => (
    <ReservedTicket key={ticket.id} ticket={ticket}/>
  ));

  function reserve() {
    if (seanceId && tickets.reservedTickets.allIds.length) {
      const reservedTickets = Object.values(tickets.reservedTickets.byId).map((ticket) => ticket.id);
      dispatch(thunkReserveTicketsBy(Number(seanceId), reservedTickets));
      dispatch(resetReservedTickets())
    }
  }

  return (
    <div className="tickets-reserve">
      <h4>Tickets that you choose:</h4>

      <div className="tickets-reserve__tickets">{reservedTicketElements}</div>

      <button className="btn reserve-btn" onClick={reserve}>Reserve</button>
    </div>
  );
};

export default connect(mapStateToProps)(TicketsReserve);
