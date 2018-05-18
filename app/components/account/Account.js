import React, { Component } from 'react';
import MovieList from '../movieList/MovieList';
import FavoritesContainer from '../../containers/favoritesContainer/FavoritesContainer';

class Account extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className='favorites-header'>Favorites:</h1>
        <MovieList {...this.props}/>
      </div>
    );
  }
}

export default FavoritesContainer(Account);