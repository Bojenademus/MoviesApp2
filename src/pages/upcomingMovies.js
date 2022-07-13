import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMovies = (props) => {
  const [movies, setMovies] = useState([]);
  const mustwatchMovies = movies.filter(m => m.mustwatch)
  localStorage.setItem('mustWatchMovies', JSON.stringify(mustwatchMovies))

  // todo: fix add to must watch functionality
  /*const addToMustwatch = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, mustwatch: true } : m
    );
    setMovies(updatedMovies);
  };*/
  
 const addToMustwatch = null;

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectMustwatch={addToMustwatch}
    />
  );
};
export default UpcomingMovies;