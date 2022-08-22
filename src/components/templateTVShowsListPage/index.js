import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterShowsCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ShowList from "../showList";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "black",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(5),
  },
}));

function ShowsListPageTemplate({ shows, title, action }) {
  const classes = useStyles();
  const [showsTitleFilter, setShowsTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedShows = shows
    .filter((s) => {
      return s.name.toLowerCase().search(showsTitleFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    });

    console.log(shows);

  const handleChange = (type, value) => {
    if (type === "title") setShowsTitleFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
          <ShowList action={action} shows={displayedShows} />
        </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={showsTitleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>    
  );
}
export default ShowsListPageTemplate;