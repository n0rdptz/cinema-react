import React, {useEffect} from "react";
import {connect, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {resetSeances} from '../../store/seances/actions';
import {thunkGetSeancesByFilmId} from "../../store/seances/thunks";
import {AppState} from "../../store/rootReducer";
import {FilmsState} from "../../store/films/types";
import {SeancesState} from "../../store/seances/types";
import FilmInfo from '../FilmInfo/FilmInfo';
import PageContent from '../PageContent/PageContent';

const mapStateToProps = (state: AppState) => {
  return {
    films: state.films,
    seances: state.seances
  }
};

interface FilmPageProps {
  films: FilmsState,
  seances: SeancesState
}

const FilmPage: React.FC<FilmPageProps> = (props) => {
  const {filmId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSeances());
    dispatch(thunkGetSeancesByFilmId(Number(filmId)));
  }, [filmId]);

  const films = props.films.films.byId;
  const isFilmsFetching: boolean = props.films.isFetching;

  let film = null;
  if (filmId) {
    film = films[filmId];
  }

  return (
    <PageContent entity={film} isFetching={isFilmsFetching}>
      {film && <FilmInfo film={film}/>}
    </PageContent>
  );
};

export default connect(mapStateToProps)(FilmPage);
