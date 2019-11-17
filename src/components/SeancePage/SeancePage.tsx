import React, {useEffect} from "react";
import {useParams} from "react-router";
import {AppState} from "../../store/rootReducer";
import {FilmsState} from "../../store/films/types";
import {SeancesState} from "../../store/seances/types";
import {connect, useDispatch} from "react-redux";
import {resetSeance, resetSeances} from "../../store/seances/actions";
import {thunkGetSeanceById, thunkGetSeancesByFilmId} from "../../store/seances/thunks";
import SeanceInfo from "../SeanceInfo/SeanceInfo";
import PageContent from "../PageContent/PageContent";

const mapStateToProps = (state: AppState) => {
  return {
    films: state.films,
    seances: state.seances
  }
};

interface SeancePageProps {
  films: FilmsState,
  seances: SeancesState
}

const SeancePage: React.FC<SeancePageProps> = (props) => {
  const {seanceId} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSeance());
    dispatch(thunkGetSeanceById(Number(seanceId)));
  }, [seanceId]);

  const seance = props.seances.seance;
  const isSeancesFetching: boolean = props.seances.isFetching;

  return (
    <PageContent entity={seance} isFetching={isSeancesFetching}>
      {seance && <SeanceInfo seance={seance}/>}
    </PageContent>
  );
};

export default connect(mapStateToProps)(SeancePage);
