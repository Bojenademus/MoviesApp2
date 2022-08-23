import React from "react";
import { useParams } from "react-router-dom";
import SeasonHeader from "../headerSeason";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getSeasonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    overflow: 'scroll',
    maxHeight: 2500,
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplateSeasonPage = ({season, children }) => {
    const classes = useStyles();
    const { id, season_number } = useParams();
    const { data, error, isLoading, isError } = useQuery(
      ["images", { id: id, season_number: season_number}],
      getSeasonImages
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const images = data.posters 

  return (
    <div className={classes.root}>
      <SeasonHeader season={season} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.imageListRoot}>
            <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              {images.map((image) => (
                <ImageListItem key={image.file_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateSeasonPage;