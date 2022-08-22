import React from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CakeIcon from '@material-ui/icons/Cake';
import PublicIcon from '@material-ui/icons/Public';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
  },
  videoClip: {
    height: 500,
    width: 800
  }
}));

function ActorDetails ({ actor }) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
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
    </>
    );
}
export default  ActorDetails;
