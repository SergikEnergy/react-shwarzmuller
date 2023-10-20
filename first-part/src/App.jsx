import React, { useState, useEffect } from 'react';

import MovieList from './components/MovieList';
import './App.css';

function App() {
  async function fetchMoviesHandler() {
    try {
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
      setMovies(transformedResults);
      return transformedResults;
    } catch (err) {
      console.log(err);
    }
  }

  const [movies, setMovies] = useState([]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
