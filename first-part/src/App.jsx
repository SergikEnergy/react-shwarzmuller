import React, { useState, useEffect } from 'react';

import MovieList from './components/MovieList';
import './App.css';

function App() {
  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
      const response = await fetch('https://swapi.dev/api/films/', {
        method: 'GET',
      });
      const result = await response.json();
      const transformedResults = result.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });
      console.log('prev data --->', result);
      console.log('new data --->', transformedResults);
      setIsLoading(false);
      setMovies(transformedResults);
      return transformedResults;
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Here is no data</p>}
        {isLoading && <p>Loading data...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
