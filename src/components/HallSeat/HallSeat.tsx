import React from "react";
import {AppState} from "../../store/rootReducer";
import {connect} from "react-redux";
import {TicketsState} from "../../store/tickets/types";

const mapStateToProps = (state: AppState) => {
  return {
    tickets: state.tickets
  }
};

interface HallSeatProps {
  ticket: any,
  tickets: TicketsState,
  onSeatClick: (id: number) => void
}

const HallSeat: React.FC<HallSeatProps> = (props) => {
  const {ticket, tickets, onSeatClick} = props;

  function onClickHandler() {
    if (!ticket.reserved) {
      onSeatClick(ticket);
    }
  }

  let className = 'hall__seat';
  if (ticket.reserved) {
    className = `${className} reserved`;
  }
  if (tickets.reservedTickets.allIds.includes(String(ticket.id))) {
    className = `${className} selected`;
  }

  return (
    <div className={className}>
      <div className="hall__seat__number" onClick={onClickHandler}>{ticket.seat}</div>
    </div>
  );
};

export default connect(mapStateToProps)(HallSeat);
