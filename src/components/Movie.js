import React from "react";
import PropTypes from "prop-types";
import "./Movie.scss";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="genres__genre" key={index}>
              #{genre}
            </li>
          ))}
        </ul>
      </div>
      <h5 className="movie__year">{year}</h5>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
