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
import { getVideos } from "../../api/tmdb-api";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { CardActionArea } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    paddingLeft: 5,
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
  card: { 
    maxWidth: 250,
    margin: theme.spacing(1.5),
  },
  media: { height: 350 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  scroll: {
    height: 660,
    flexDirection: "column",
    overflow: 'auto',
    padding: theme.spacing(1.5),
  },
  video: {
    padding: theme.spacing(0.5),
    paddingLeft: 0,
  },
  videoClip: {
    height: 500,
    width: 800
  },
  title: {
    margin: theme.spacing(0.5),
    paddingLeft: 0,
    paddingTop : 15,
    fontWeight: "bold",
  },
}));

function MovieDetails ({ movie }) {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    getSimilarMovie(movie.id).then(similarMovie => {
      setSimilarMovie(similarMovie);
    });
  },[movie.id]);

  //use of spread operator to iterate over all the array elements
  useEffect(() => {
    getVideos(movie.id).then(videos => {
      setVideos([...videos.results]);
    })
  }, [movie.id, videos.results]);

  return (
    <>
      <Typography variant="h5" component="h3" className={classes.title}>
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
      </div>

      <Typography variant="h5" component="h3" className={classes.title}>
        Videos
      </Typography>

      <Grid container className={classes.scroll}>
      {videos.map((v, id ) => (
        <Grid item className={classes.video} key={id} >
        <Card>
        <CardHeader
                className={classes.header}
                title={
                <Typography variant="h6" component="p">
                  {v.name}{" "}
                </Typography>
                }
              />
          <CardActionArea>
            <CardMedia
            className={classes.videoClip}
              component="iframe"
              image={
              `https://www.youtube.com/embed/${v.key}`
              }
            />
          </CardActionArea>
        </Card>
        </Grid>
      ))}
      </Grid>

      <Typography variant="h5" component="h3" className={classes.title}>
        Similar Movies
      </Typography>
      <Grid container className={classes.scroll}>
      {similarMovie.map((d, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id} className={classes.list}>
          <Link to={`/movies/${d.id}`}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                title={
                <Typography variant="h6" component="p">
                  {d.title}{" "}
                </Typography>
                }
              />
              <CardMedia
                className={classes.media}
                image={
                  d.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${d.poster_path}`
                  : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
                }
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <CalendarIcon fontSize="small" />
                      {d.release_date}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <StarRateIcon fontSize="small" />
                      {"  "} {d.vote_average}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card> 
          </Link>
        </Grid>
          
      ))}
      </Grid>
      
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
export default  MovieDetails;
