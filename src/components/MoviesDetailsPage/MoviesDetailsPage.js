// import React from "react";
// import { useParams } from "react-router-dom";
// import MoviesService from "../../services/movies.service";

// const MoviesDetailsPage = () => {
//   const { id } = useParams();
//   const movie = MoviesService.getMovieById(id);
//   return (
//     <div>
//       <h2>Movie Details</h2>
//       <p>{movie.title}</p>
//       <img src={movie.poster} />
//       <p>{movie.rating}</p>
//       <p>{movie.genre}</p>
//       <p>{movie.description}</p>
//     </div>
//   );
// };

// export default MoviesDetailsPage;

// Zadanie 6

// import React from "react";
// import { useParams, useHistory } from "react-router-dom";
// import MoviesService from "../../services/movies.service";

// const MoviesDetailsPage = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const movie = MoviesService.getMovieById(id);
//   return (
//     <div>
//       <button onClick={history.goBack}>Back</button>
//       <h2>Movie Details</h2>
//       <p>{movie.title}</p>
//       <img src={movie.poster} />
//       <p>{movie.rating}</p>
//       <p>{movie.genre}</p>
//       <p>{movie.description}</p>
//     </div>
//   );
// };

// export default MoviesDetailsPage;

// Zadanie 7

// import React from "react";
// import { useParams, useHistory, Redirect } from "react-router-dom";
// import MoviesService from "../../services/movies.service";

// const MoviesDetailsPage = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const movie = MoviesService.getMovieById(id);
//   if (!movie) {
//     return <Redirect to="/movieList" />;
//   }
//   return (
//     <div>
//       <button onClick={history.goBack}>Back</button>
//       <h2>Movie Details</h2>
//       <p>{movie.title}</p>
//       <img src={movie.poster} />
//       <p>{movie.rating}</p>
//       <p>{movie.genre}</p>
//       <p>{movie.description}</p>
//     </div>
//   );
// };

// export default MoviesDetailsPage;

// inne rozwiązanie:

import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import MoviesService from "../../services/movies.service";

const MoviesDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const movie = MoviesService.getMovieById(id);
  if (!movie) {
    return <Redirect replace to="/movieList" />;
  }
  return (
    <div>
      <button onClick={history.goBack}>Back</button>
      <h2>Movie Details</h2>
      <p>{movie.title}</p>
      <img src={movie.poster} />
      <p>{movie.rating}</p>
      <p>{movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MoviesDetailsPage;
