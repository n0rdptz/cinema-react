import React from "react";
import {Seance, SeancesState} from "../../store/seances/types";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Hall from "../Hall/Hall";
import TicketsReserve from "../TicketsReserve/TicketsReserve";
import {useParams} from "react-router";
import {AppState} from "../../store/rootReducer";
import {connect} from "react-redux";
import {TicketsState} from "../../store/tickets/types";
import Loader from "../Loader/Loader";
import SeancesTable from "../SeancesTable/SeancesTable";

const mapStateToProps = (state: AppState) => {
  return {
    seances: state.seances,
    tickets: state.tickets
  }
};

interface SeanceInfoProps {
  seance: Seance,
  seances: SeancesState,
  tickets: TicketsState
}

const SeanceInfo: React.FC<SeanceInfoProps> = (props) => {
  const {filmId} = useParams();
  const {seance, seances, tickets} = props;
  const {isTicketsFetching} = seances;
  const breadcrumbItems = [
    {label: 'Films', pathname: `/`},
    {label: `${seance.filmTitle}`, pathname: `/${filmId}`},
    {label: `${seance.time}`, active: true}
  ];
  return (
    <div className="seance-info">
      <Breadcrumbs items={breadcrumbItems}/>
      <h2 className="film__title">{seance.filmTitle}</h2>

      <p className="film__description">{seance.filmDescription}</p>

      {!!tickets.reservedTickets.allIds.length && <TicketsReserve/>}

      <h4>Seats</h4>
      {isTicketsFetching ? (
        <Loader/>
      ) : (
        <Hall seanceTickets={seance.tickets}/>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(SeanceInfo);
