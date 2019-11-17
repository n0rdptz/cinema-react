import React from "react";
import {AppState} from "../../store/rootReducer";
import {connect} from "react-redux";
import {Film} from "../../store/films/types";
import {SeancesState} from "../../store/seances/types";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Loader from '../Loader/Loader';
import SeancesTable from '../SeancesTable/SeancesTable';

const mapStateToProps = (state: AppState) => {
  return {
    seances: state.seances
  }
};

interface FilmInfoProps {
  film: Film,
  seances: SeancesState
}

const FilmInfo: React.FC<FilmInfoProps> = (props) => {
  const film: Film = props.film;
  const seances = Object.values(props.seances.seances.byId);
  const isSeancesFetching: boolean = props.seances.isFetching;
  const breadcrumbItems = [
    {label: 'Films', pathname: `/`},
    {label: `Film ${film.title}`, active: true}
  ];

  return (
    <div className="film-info">
      <Breadcrumbs items={breadcrumbItems}/>
      <div className="film__cover">
        <img className="film__cover__image" src={film.cover} alt={`cover-${film.id}`}/>
      </div>

      <h2 className="film__title">{film.title}</h2>

      <p className="film__description">{film.description}</p>

      <div className="film-info__seances">
        <h3>Seances</h3>

        {isSeancesFetching ? (
          <Loader/>
        ) : (
          <SeancesTable seances={seances}/>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(FilmInfo);
