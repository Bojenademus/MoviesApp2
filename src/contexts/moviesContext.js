import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState([]);
  const [mustwatchMovies, setMustwatchMovies] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  const addToFavouritesShows = (show) => {
    if (!favourites.includes(show.id)) {
      let newFavourites = [...favourites, show.id];
      setFavourites(newFavourites);
    }
  };

  const addToPlaylist = (movie) => {
    if (!mustwatchMovies.includes(movie.id)) {
      let newMustwatchMovies = [...mustwatchMovies, movie.id];
      setMustwatchMovies(newMustwatchMovies);
    }
  };

  const addToPlaylistShows = (show) => {
    if (!mustwatchMovies.includes(show.id)) {
      let newMustwatchMovies = [...mustwatchMovies, show.id];
      setMustwatchMovies(newMustwatchMovies);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const removeFromFavouritesShows = (show) => {
    setFavourites(favourites.filter((mId) => mId !== show.id));
  };

  const removeFromMustwatch = (movie) => {
    setMustwatchMovies(mustwatchMovies.filter((mWId) => mWId !== movie.id));
  };

  const removeFromMustwatchShows = (show) => {
    setMustwatchMovies(mustwatchMovies.filter((mWId) => mWId !== show.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addReviewShows = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustwatchMovies,
        addToFavourites,
        addToFavouritesShows,
        addToPlaylist,
        addToPlaylistShows,
        removeFromFavourites,
        removeFromFavouritesShows,
        removeFromMustwatch,
        removeFromMustwatchShows,
        addReview,
        addReviewShows,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;