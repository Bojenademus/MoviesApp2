import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";

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

function SeasonDetails ({ season }) {
  const classes = useStyles();
  
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview 
      </Typography>

      <Typography variant="h6" component="p">
        {season.overview}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${season.episode_count} season` } />
        <Chip label={`Released: ${season.air_date}`} />
      </Paper>
      </div>

      <Typography variant="h5" component="h3" className={classes.title}>
        Episodes
      </Typography>
      <Grid container className={classes.scroll}>
      {season.episodes.map((e, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id} className={classes.list}>
          {/* <Link to={`/shows/${s.id}/seasons/${season.season_number}`} className={classes.linkCard}> */}
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                title={
                <Typography variant="h6" component="p">
                  {"Episode "}{e.episode_number}
                </Typography>
                }
              />
              <CardMedia
                className={classes.media}
                image={
                  e.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${e.still_path}`
                  : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
                }
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="p">
                      <CalendarIcon fontSize="small" />
                        {e.air_date}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card> 
          {/* </Link> */}
        </Grid>
          
      ))}
      </Grid>

    
    </>
    );
}
export default SeasonDetails;
