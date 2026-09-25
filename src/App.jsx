/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
// import { MovieList } from './components/MovieList/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      {moviesFromServer.map(movies => (
        // <MovieList movies={movies} />
        <div className="movies" key={movies.imdbId}>
          <div className="card" data-cy="Movie">
            <div className="card-image">
              <figure className="image is-4by3">
                <img data-cy="MovieImage" src={movies.imgUrl} alt="Film logo" />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="images/imdb-logo.jpeg" alt="imdb" />
                  </figure>
                </div>

                <div className="media-content">
                  <p className="title is-8" data-cy="MovieTitle">
                    {movies.title}
                  </p>
                </div>
              </div>

              <div className="content">
                <p data-cy="MovieDescription">{movies.description}</p>

                <a href={movies.imdbUrl} data-cy="MovieLink">
                  IMDB
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
