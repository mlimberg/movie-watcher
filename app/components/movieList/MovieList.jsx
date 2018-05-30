import React, { Component } from 'react';
import MovieCard from '../../components/movieCard/MovieCard';
import Search from '../search/Search';
import MovieContainer from '../../containers/movieContainer/MovieContainer';

const MovieList = ({ location, user, favorites, movies }) => {    
  const noFavorites = <p className='no-fav-error'>No favorites.</p>;
  const path = location.pathname;
  let faveCards = noFavorites;
  let movieCards = noFavorites;
  
  if (movies && movies.length) {
    movieCards = movies.map((obj) => {
      return <MovieCard key={obj.id} {...obj} />;
    });
  }
  
  if (favorites && favorites.length) {
    faveCards = favorites.map((obj) => {
      return <MovieCard key={obj.id} {...obj} />;
    });
  }

  const renderUserContent = () => {
    if (user) {
      if (path.includes('my-account')) {
        return faveCards.length ? faveCards : noFavorites;
      } else {
        return movieCards.length ? movieCards : noFavorites;
      }
    }
  };

  const renderAllMovies = () => {
    return movieCards;
  };
  
  return (
    <div className='movie-list'>
      <Search path={location.pathname} />
      {user ? renderUserContent() : renderAllMovies() }
    </div>
  );
};

export default MovieContainer(MovieList);
