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
import Tooltip from '@material-ui/core/Tooltip';

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
  },
<<<<<<< HEAD
  title: {
    margin: theme.spacing(0.5),
    paddingLeft: 0,
    paddingTop : 15,
    fontWeight: "bold",
=======
  tooltip: {
    fontSize: 36
>>>>>>> 945b86bebfe886be2a2692fb57ef914ee0e11b9b
  }
}));

function SeasonDetails ({ season }) {
  const classes = useStyles();
  
  return (
    <>
      <Typography variant="h5" component="h3" className={classes.title}>
        Overview 
      </Typography>

      <Typography variant="h6" component="p">
        {season.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Chip label={`Released: ${season.air_date}`} />
      </div>

      <Typography variant="h5" component="h3" className={classes.title}>
        Episodes
      </Typography>
      <Grid container className={classes.scroll}>
      {season.episodes.map((e, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id} className={classes.list}>
          <Tooltip title={<p style={{ fontSize: 18, lineHeight: 1.6 }}>{e.overview}</p> } >
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
                  e.still_path
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
            </Tooltip>
        </Grid>
      ))}
      </Grid>

    
    </>
    );
}
export default SeasonDetails;
