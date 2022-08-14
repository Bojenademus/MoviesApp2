import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from '../movieReviews'
import { getSimilarMovie } from "../../api/tmdb-api";
import { Link } from "react-router-dom";

//attempted to create a list of Similar Movies, unsuccessful
//import MovieList from "../movieList";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

function MovieDetails ({movie, action}) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  const [similarMovie, setSimilarMovie] = useState([]);
  
  useEffect(() => {
    getSimilarMovie(movie.id).then((movie) => {
      setSimilarMovie(movie);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview 
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Genres" className={classes.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Production Countries" className={classes.chipLabel} color="primary" />
        </li>
        {movie.production_countries.map((p) => (
          <li key={p.name}>
            <Chip label={p.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Similar Movies" className={classes.chipLabel} color="primary" />
        </li>
        
        {similarMovie.map((g, id) => (
          <li key={id}>
            <Link to={`/movies/${g.id}`}>
              <Chip label={g.title} className={classes.chip} onClick={() => {action(g)}} /> 
            </Link>
            </li>
            ))}
      </Paper>
      </div>
  
      {/* Attempted to create a list of similar movies
      <Typography variant="h5" component="h3">
        Similar Movies
      </Typography>
      <Grid container className={classes.root}>
      <Grid item xs={12}>
      </Grid>
      <Grid item container spacing={5}>
          <MovieList movies={movie} />
        </Grid>
    </Grid>  */}
      
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
      }
export default  MovieDetails ;
