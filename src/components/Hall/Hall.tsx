import React, {useState} from "react";
import {Ticket, TicketsState} from "../../store/tickets/types";
import HallSeat from "../HallSeat/HallSeat";
import HallRow from "../HallRow/HallRow";
import {connect, useDispatch} from "react-redux";
import {setReserveTickets} from '../../store/tickets/actions';
import {AppState} from "../../store/rootReducer";

const mapStateToProps = (state: AppState) => {
  return {
    tickets: state.tickets
  }
};

interface HallProps {
  tickets: TicketsState
  seanceTickets?: []
}

const HALL_DIMS = {
  rows: 10,
  seats: 10
};

const Hall: React.FC<HallProps> = (props) => {
  const {tickets, seanceTickets} = props;
  const dispatch = useDispatch();

  const reservedTickets: { [key: number]: Ticket } = Object.assign({}, tickets.reservedTickets.byId);

  function onSeatClick(ticket: Ticket) {
    if (!reservedTickets.hasOwnProperty(ticket.id)) {
      reservedTickets[ticket.id] = ticket;
    } else {
      delete reservedTickets[ticket.id];
    }
    dispatch(setReserveTickets({...reservedTickets}));
  }

  let seats = [];

  for (let row = 1; row <= HALL_DIMS.rows; row++) {
    seats[row] = [];
    for (let seat = 1; seat <= HALL_DIMS.seats; seat++) {
      // @ts-ignore
      const ticket = seanceTickets[`${row}_${seat}`];
      // @ts-ignore
      seats[row].push((<HallSeat key={`${row}_${seat}`} ticket={ticket} onSeatClick={onSeatClick}/>));
    }
  }

  return (
    <div className="hall">
      {seats.map((row, index) => (<HallRow rowNumber={index} key={index}>{row}</HallRow>))}
    </div>
  );
};

export default connect(mapStateToProps)(Hall);
