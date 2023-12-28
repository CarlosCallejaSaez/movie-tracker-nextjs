import React from 'react';
import styles from './MovieDetails.module.css'; 

const MovieDetails = ({ movie, onMarkAsViewed, onRate, isViewed, rating }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={movie.Poster} alt={movie.Title} className={styles.posterImage} />
      </div>
      <div className={styles.detailsContainer}>
        <h2 className={styles.movieTitle}>{movie.Title}</h2>
        <p className={styles.movieInfo} >Year: {movie.Year}</p>
        <p className={styles.movieInfo}>Type: {movie.Type}</p>

        <button className='button' onClick={() => onMarkAsViewed(movie.imdbID)} disabled={isViewed}>
          {isViewed ? 'Viewed' : 'Mark as Viewed'}
        </button>

        <select className='select'    onChange={(e) => onRate(movie.imdbID, e.target.value)} value={rating}>
          <option value="">Rate</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
    </div>
  );
};

export default MovieDetails;
