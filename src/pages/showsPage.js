import React from "react";
import PageTemplate from "../components/templateTVShowsListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVShows} from '../api/tmdb-api'
//import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const ShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover shows', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  return (
    <PageTemplate
      title="Discover TV Shows"
      shows={shows}
      // action={(show) => {
      //   return <AddToFavouritesIcon show={show} />
      // }}
    />
);
};

export default ShowsPage;