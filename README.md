
# ICT Skills 2 Assignment.

Name: Bozhena Demus

## Overview.

Expanded the Movies App (https://github.com/Bojenademus/MoviesApp) from previous lab work. The work on this assignemnt was done in the good grade band (40%-55%). Added following features:

+ Must Watch page - contains upcoming movies that were tagged as "must watch"
+ Movie Details page - added list of videos from the movie, and a list of similar movies
+ Discover TV Shows page - list of tv shows
+ TV Show detail Page - added list of seasons and actors
+ Season Page - Contains information about the season and its episodes (hover over episodes for an overview)
+ Actors Page - Contains their biography, their Tv Shows and Movies. 

## Setup requirements.

To Set up - .env file is required to hold the API key for the TMDB APIs as "REACT_APP_TMDB_KEY"

## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 

e.g.
+ /movies/mustwatch - list of upcoming movies that were tagged "must watch"
+ /shows - lists TV Shows
+ /shows/:id - TV show details page, includes seasons and actors
+ /shows/:id/season/:season_number - Season page of the tv show selected, includes overview and information about episodes
+ /actors/:id - page with the actors biographyz, their tv shows and/or movies


### Views/Pages.

>Lists movies from the Discover endpoint. Changed the colour scheme.
![][d1]

>Shows detailed information on a specific movie - videos and similar movies.
![][m1]
![][m2]

>Lists upcoming movies, can be tagged as "must watch. 
![][u]

>Tagged upcomiming movies as "must watch" are displayed on Must Watch Page.
![][m]

>Lists shows from the Discover endpoint. 
![][sh]

>Shows detailed information about a specific TV Show - seasons and actors.
![][sh1]
![][sh2]

>Season Page - overview of a season and information about episodes - tooltip used to show episode description.
![][s]

>Actors Page - shows their biography and lists of their tv shows and movies.
![][a]
![][a1]

[d1]: ./public/discover1.png
[m1]: ./public/movie.png
[m2]: ./public/movie2.png
[u]: ./public/upcoming1.png
[m]: ./public/mustwatch1.png
[sh]: ./public/shows.png
[sh1]: ./public/show1.png
[sh2]: ./public/show2.png
[s]: ./public/season.png
[a]: ./public/actor1.png
[a1]: ./public/actor2.png