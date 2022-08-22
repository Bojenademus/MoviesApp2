import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CakeIcon from '@material-ui/icons/Cake';
import PublicIcon from '@material-ui/icons/Public';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getActorShows, getActorMovies } from "../../api/tmdb-api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import StarRateIcon from "@material-ui/icons/StarRate";
import CardHeader from "@material-ui/core/CardHeader";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import { Link } from "react-router-dom";

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
  container: {
    display: "flex",
    width: '100%',
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    paddingLeft: 0,
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  title: {
    margin: theme.spacing(0.5),
    paddingLeft: 0,
    paddingTop : 15,
    fontWeight: "bold",
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
    height: 620,
    flexDirection: "column",
    overflow: 'auto',
    padding: theme.spacing(1.5),
    paddingLeft: 0,
    paddingBottom: 0,
  }
}));

function ActorDetails ({ actor }) {
  const classes = useStyles();
  const [actorShows, setActorShows] = useState([]);
  const [actorMovies, setActorMovies ] = useState([]);

  useEffect(() => {
    getActorShows(actor.id).then(actorShows => {
      setActorShows([...actorShows.cast]);
    })
  }, [actor.id, actorShows.cast]);

  useEffect(() => {
    getActorMovies(actor.id).then(actorMovies => {
      setActorMovies([...actorMovies.cast]);
    })
  }, [actor.id, actorShows.cast]);
  return (
    <>
      <Typography variant="h5" component="h3" className={classes.title}>
        Biography
      </Typography>

      <Grid container className={classes.container} >
        <Grid item>
          <Chip className={classes.chipLabel}
            icon={<CakeIcon />}
            label={`DOB: ${actor.birthday}`}
          />
        </Grid>
        <Grid item>
          <Chip className={classes.chipLabel}
            icon={<PublicIcon />}
            label={`Born in ${actor.place_of_birth}`}
          />
        </Grid>
        <Grid item>
          <Chip className={classes.chipLabel} 
          icon={<FavoriteBorderIcon />} label={`Popularity ${actor.popularity}`} />
        </Grid>
        <Grid item >
          <Chip className={classes.chipLabel}
           label={actor.deathday ? `Died ${actor.deathday}` : 'Alive'} />
        </Grid>
      </Grid>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Typography variant="h5" component="h3" className={classes.title}>
        Other TV Shows ...
      </Typography>
      <Grid container className={classes.scroll}>
      {actorShows.map((b, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
          <Link to={`/shows/${b.id}`}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                title={
                <Typography variant="h6" component="p">
                  {b.original_name}{" "}
                </Typography>
                }
              />
              <CardMedia
                className={classes.media}
                image={
                  b.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${b.poster_path}`
                  : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
                }
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <CalendarIcon fontSize="small" />
                      {b.first_air_date}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <StarRateIcon fontSize="small" />
                      {"  "} {b.vote_average}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card> 
          </Link>
        </Grid>
          
      ))}
      </Grid>

      <Typography variant="h5" component="h3" className={classes.title}>
        Other Movies ...
      </Typography>
      <Grid container className={classes.scroll}>
      {actorMovies.map((c, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
          <Link to={`/movies/${c.id}`}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                title={
                <Typography variant="h6" component="p">
                  {c.title}{" "}
                </Typography>
                }
              />
              <CardMedia
                className={classes.media}
                image={
                  c.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${c.poster_path}`
                  : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
                }
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <CalendarIcon fontSize="small" />
                      {c.release_date}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <StarRateIcon fontSize="small" />
                      {"  "} {c.vote_average}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card> 
          </Link>
        </Grid>
          
      ))}
      </Grid>
    </>
    );
}
export default  ActorDetails;
