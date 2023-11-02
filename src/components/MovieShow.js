import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);

  const params = useParams();
  console.log(params);


  return (
    <div>

      <Route path={`${match.url}/:movieId`}>
        <MovieShow />
      </Route>

      <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
    </div>
  );
}

export default MoviesPage;