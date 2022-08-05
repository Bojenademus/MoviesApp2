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

  const addToPlaylist = (movie) => {
    if (!mustwatchMovies.includes(movie.id)) {
      let newMustwatchMovies = [...mustwatchMovies, movie.id];
      setMustwatchMovies(newMustwatchMovies);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const removeFromMustwatch = (movie) => {
    setMustwatchMovies(mustwatchMovies.filter((mWId) => mWId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustwatchMovies,
        addToFavourites,
        addToPlaylist,
        removeFromFavourites,
        removeFromMustwatch,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;