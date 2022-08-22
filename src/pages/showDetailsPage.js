import React from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/showDetails";
import PageTemplate from "../components/templateShowPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ShowDetailsPage = () => {
  const { id } = useParams();
  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <ShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Show details</p>
      )}
    </>
  );
};

export default ShowDetailsPage;