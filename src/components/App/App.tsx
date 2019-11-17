import React, {useState, useEffect} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Page from '../Page/Page';
import Films from '../Films/Films';
import FilmPage from '../FilmPage/FilmPage';
import SeancePage from '../SeancePage/SeancePage';
import {connect, useDispatch} from "react-redux";
import {thunkGetFilms} from '../../store/films/thunks';
import {AppState} from '../../store/rootReducer';
import {FilmsState} from "../../store/films/types";

const mapStateToProps = (state: AppState) => {
  return {
    films: state.films
  }
};

interface AppProps {
  films: FilmsState
}

const App: React.FC<AppProps> = (props) => {
  const films = Object.values(props.films.films.byId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetFilms());
  }, []);

  return (
    <div className="App">
      <Route exact path="/" render={() => (
        <Page>
          <Films films={films}/>
        </Page>
      )}/>

      <Route exact path="/:filmId" render={() => (
        <Page>
          <FilmPage/>
        </Page>
      )}/>

      <Route path="/:filmId/:seanceId" render={() => (
        <Page>
          <SeancePage/>
        </Page>
      )}/>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(App));
