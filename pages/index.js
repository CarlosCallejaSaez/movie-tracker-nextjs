import { useState } from 'react';
import { useQuery } from 'react-query';
import { searchMovies } from '../utils/api';
import MovieDetails from '../components/MovieDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [query, setQuery] = useState('');
  const [viewedMovies, setViewedMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState({});
  const { data: movies, isLoading, refetch } = useQuery(['searchMovies', query], () => searchMovies(query));

  const handleSearch = async (e) => {
    e.preventDefault();
    await refetch();
  };

  const handleMarkAsViewed = (movieId) => {
    setViewedMovies((prevViewedMovies) => [...prevViewedMovies, movieId]);
  };

  const handleRate = (movieId, rating) => {
    setRatedMovies((prevRatedMovies) => ({
      ...prevRatedMovies,
      [movieId]: rating,
    }));
  };

  return (
    <div className='app-container'>
      <Header />

      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}

      {!isLoading && movies && movies.length === 0 && <h2>No results found</h2>}



      {movies && (
        <ul className='movies-container'>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieDetails
                movie={movie}
                onMarkAsViewed={handleMarkAsViewed}
                onRate={handleRate}
                isViewed={viewedMovies.includes(movie.imdbID)}
                rating={ratedMovies[movie.imdbID] || ''}
              />
            </li>
          ))}
        </ul>
      )}

      <Footer />
    </div>
  );
}
