import React from "react";
import { useParams } from "react-router-dom";
import SeasonDetails from "../components/seasonDetails";
import PageTemplate from "../components/templateSeasonPage";
import { getSeason } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const SeasonDetailsPage = () => {
  const { id, season_number } = useParams();
  const { data: season, error, isLoading, isError } = useQuery(
    ["season", { id: id, season_number: season_number }],
    getSeason
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {season ? (
        <>
          <PageTemplate season={season}>
            <SeasonDetails season={season} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Show details</p>
      )}
    </>
  );
};

export default SeasonDetailsPage;