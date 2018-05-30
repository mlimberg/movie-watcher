import React, { Component } from 'react';
import { Link } from 'react-router';
import MovieContainer from '../../containers/movieContainer/MovieContainer';
import UserContainer from '../../containers/userContainer/userContainer';
import FavoritesContainer from '../../containers/favoritesContainer/FavoritesContainer';

const MovieCard = (props) => {
  const getMatchedFavID = () => {
    let match = null;
    props.favorites.forEach(fav => {
      if (fav.title === props.title) {
        match = fav.movie_id || fav.id;
      }
    });
    return match;
  };

  const addFavToApi = () => {
    const { id, user, title, poster_path,
           release_date, vote_average,
           overview } = props;

    const favID = getMatchedFavID(props);

    if (!favID) {
      fetch('api/users/favorites/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          movie_id: id,
          user_id: user.id,
          title,
          poster_path,
          release_date,
          vote_average,
          overview })
      })
        .then(() => props.addFav(props))
    } else {
      fetch(`api/users/${user.id}/favorites/${favID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => props.removeFav(props))
        .catch(err => console.log(err));
    }
  };

  const favCheck = () => {
    let favorited = '';
    
    props.favorites.forEach(fav => {
      if (fav.title === props.title) {
        favorited = "favorite"
      }
    });

    return favorited;
  };

  const favoriteBtn = () => {
    if (props.user) {
      return (
        <button 
          className={`fav ${favCheck()}`}
          onClick={() => addFavToApi()}
        >
         </button>
      );
    }
  };

  return (
    <div className='movie-card'>
      {favoriteBtn(props)}
      <Link to={`/movies/${props.title}`}>
        <object
             className='movie-poster'
             data={`https://image.tmdb.org/t/p/w342/${props.poster_path}`}
             onClick={() => props.setCurrentMovie(props)}
             >
          <img
            src='../assets/no-poster-art.png'
            alt={props.title}
            className='error-poster' />
        </object>
      </Link>
    </div>
  );
};

export default FavoritesContainer(UserContainer(MovieContainer(MovieCard)));
