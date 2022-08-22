import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { getCredits } from "../../api/tmdb-api";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import TvIcon from '@material-ui/icons/Tv';

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
  card: { 
    maxWidth: 250,
    margin: theme.spacing(1.5),
  },
  linkCard: {
    textDecoration: "none"
  },
  media: { height: 200 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  
  actors: {
    margin: theme.spacing(1.0),
  }
}));

function ShowDetails ({ show }) {
  const classes = useStyles();

  const [actors, setActors] = useState([]);
  
  useEffect(() => {
    getCredits(show.id).then(actors => {
      setActors([...actors.cast]);
      console.log(actors);
    });
  },[show.id, actors.cast]);
  
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview 
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Genres" className={classes.chipLabel} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={show.number_of_seasons === 1 ? `${show.number_of_seasons} season` : `${show.number_of_seasons} seasons`} />
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count})`}
        />
        <Chip label={`Released: ${show.first_air_date}`} />
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Production Countries" className={classes.chipLabel} color="primary" />
        </li>
        {show.production_countries.map((p) => (
          <li key={p.name}>
            <Chip label={p.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      </div>

      <Typography variant="h5" component="h3" className={classes.title}>
        Seasons
      </Typography>
      <Grid container className={classes.scroll}>
      {show.seasons.map((s, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id} className={classes.list}>
          <Link to={`/shows/${s.id}/seasons`} className={classes.linkCard}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                title={
                <Typography variant="h6" component="p">
                  {"Season "}{s.season_number}
                </Typography>
                }
              />
              <CardMedia
                className={classes.media}
                image={
                  s.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${s.poster_path}`
                  : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
                }
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <CalendarIcon fontSize="small" />
                      {s.air_date}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <TvIcon fontSize="small" />
                      {"  "} {s.episode_count}{" episodes"}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card> 
          </Link>
        </Grid>
          
      ))}
      </Grid>

      <Typography variant="h5" component="h3">
        Actors
      </Typography>

      <Grid container>
      {actors.map((a, id ) => (
        <Grid item xs={2} key={id} >
          <Link to={`/actors/${a.id}`} className={classes.linkCard}>
        <Card className={classes.actors}>
          <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w500${a.profile_path}`
            }
          />
          <CardContent>
            <Typography variant="h6" component="p">
              {a.name}
            </Typography>
            <Typography variant="h7" component="p">
              {" as "}{a.character}
            </Typography>
          </CardContent>
        </Card>
        </Link>
        </Grid>
      ))}
      </Grid>
    </>
    );
}
export default  ShowDetails;
