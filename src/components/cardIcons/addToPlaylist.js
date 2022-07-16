//todo - add to must watch will be implemented later
//button does not render anything yet

import React/*, { useContext }*/ from "react";
//import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlaylistsIcon = ({ movie }) => {
  //const context = useContext(MoviesContext);

  /*const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };*/
  return (
    <IconButton aria-label="add to favorites" /*onClick={handleAddToFavourites}*/>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistsIcon;