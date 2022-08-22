import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
//import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  linkCard: {
    textDecoration: "none",
  },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ShowCard({ show }) {
  const classes = useStyles();
  //Favourites to be done later
//   const { favourites, mustwatchMovies } = useContext(MoviesContext);

//   if (favourites.find((id) => id === show.id)) {
//     show.favourite = true;
//   } else {
//     show.favourite = false
//   }

//   if (mustwatchMovies.find((id) => id === show.id)) {
//     show.mustwatch = true;
//   } else {
//     show.mustwatch = false
//   };

  return (
    <Link to={`/shows/${show.id}`} className={classes.linkCard}>
    <Card className={classes.card}>
       <CardHeader
      className={classes.header}
    //   avatar={
    //     show.favourite ? (
    //       <Avatar className={classes.avatar}>
    //         <FavoriteIcon />
    //       </Avatar>
    //     ) : show.mustwatch ? (
    //     <Avatar className={classes.avatar}>
    //         <PlaylistAddIcon />
    //       </Avatar>
    //     ) : null
    //   }
      title={
        <Typography variant="h5" component="p">
          {show.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Link>
  );
}