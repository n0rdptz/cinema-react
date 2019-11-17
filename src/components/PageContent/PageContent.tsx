import React from "react";
import {connect} from 'react-redux';
import {AppState} from "../../store/rootReducer";
import {Film} from "../../store/films/types";
import {Seance} from "../../store/seances/types";
import Loader from '../Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const mapStateToProps = (state: AppState) => {
  return {
    films: state.films,
    seances: state.seances
  }
};

interface PageContentProps {
  entity: Film | Seance | null,
  isFetching: boolean,
  children: JSX.Element | null
}

const PageContent: React.FC<PageContentProps> = (props) => {
  const {entity, isFetching} = props;

  if (!entity && isFetching) {
    return (
      <div className="flex-center">
        <Loader/>
      </div>
    );
  }

  if (!entity) {
    return (
      <div className="flex-center">
        <NotFoundPage/>
      </div>
    );
  }

  return (
    <div className="page__content">{props.children}</div>
  );
};

export default connect(mapStateToProps)(PageContent);
