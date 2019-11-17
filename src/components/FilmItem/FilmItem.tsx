import React from "react";
import {Link} from 'react-router-dom';
import * as FilmTypes from "../../store/films/types";

interface FilmProps {
  film: FilmTypes.Film
}

const FilmItem: React.FC<FilmProps> = (props) => {
  const {id, cover, title} = props.film;
  return (
    <div className="film-item">
      <Link className="film-item__link" to={{pathname: `/${id}`}}/>
      <img className="film-item__cover" src={cover} alt={`cover-${id}`}/>
      <div className="film-item__title-wrapper"><h2 className="film-item__title dots">{title}</h2></div>
    </div>
  );
};

export default FilmItem;
