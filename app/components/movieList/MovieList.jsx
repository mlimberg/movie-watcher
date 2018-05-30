import React, { Component } from 'react';
import MovieCard from '../../containers/movieContainer/MovieContainer';
import Search from '../search/Search';

const MovieList = ({ router, location, user, favorites, movies }) => {
    
  const noUser = <p className='fav-error'>Please sign in to view and add to your favorites.
                    <br/> Or sign up above!</p>;
  const noFavorites = <p className='no-fav-error'>No favorites.</p>;
  const path = router.location.pathname;
  let movieCards = noFavorites;
  let faveCards = noFavorites;
  
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

export default MovieList;
