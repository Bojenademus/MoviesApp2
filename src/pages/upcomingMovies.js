import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistsIcon from '../components/cardIcons/addToPlaylist'


const UpcomingMovies = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('upcoming movies', getUpcomingMovies)

    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistsIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMovies;