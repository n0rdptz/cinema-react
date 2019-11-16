import React from "react";
import FilmItem from '../FilmItem/FilmItem';
import * as FilmTypes from "../../store/films/types";

interface FilmsProps {
  films: any[]
}

const Films: React.FC<FilmsProps> = (props) => {
  const filmItems = props.films.map(film => (
    <FilmItem film={film} key={film.id}/>
  ));
  return (
    <div className="films-wrapper">
      {filmItems}
    </div>
  );
};

export default Films;
