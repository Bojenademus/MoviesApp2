import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromMustwatch from "../components/cardIcons/removeFromMustWatch";

const MustwatchPage = () => {
  const { mustwatchMovies: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustwatchMoviesQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["upcoming movies", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustwatchMoviesQueries.find((c) => c.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = mustwatchMoviesQueries.map((a) => {
    a.data.genre_ids = a.data.genres.map((b) => b.id);
    return a.data;
  });

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustwatch movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustwatchPage;