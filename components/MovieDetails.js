import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieDetails = ({ movie, onMarkAsViewed, onRate, isViewed, rating }) => {
  return (
    <div>

    
    <div className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
      <img src={movie.Poster} className="card-img-top img-fluid" alt={movie.Title} style={{ maxWidth: '100%' }} />

      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">Year: {movie.Year}</p>
        <p className="card-text">Type: {movie.Type}</p>

        <button
          className={`btn btn-primary ${isViewed ? 'disabled' : ''}`}
          onClick={() => onMarkAsViewed(movie.imdbID)}
          disabled={isViewed}
        >
          {isViewed ? 'Viewed' : 'Mark as Viewed'}
        </button>

        <select
          className="form-select mt-3"
          onChange={(e) => onRate(movie.imdbID, e.target.value)}
          value={rating}
        >
          <option value="">Rate</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
    </div>
   

    </div>
  );
};

export default MovieDetails;
