import React from "react";
import PageTemplate from "../components/templateTVShowsListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVShows} from '../api/tmdb-api'

const ShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover shows', getTVShows);

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
    />
);
};

export default ShowsPage;