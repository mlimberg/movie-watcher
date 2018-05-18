import React, { Component } from 'react';
import MovieList from '../movieList/MovieList';
import FavoritesContainer from '../../containers/favoritesContainer/FavoritesContainer';

class Account extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderProfile() {
    return (
      <article>
        <label>
          Name: 
        </label>
      </article>
    )
  }

  renderFavorites() {
    return (
      <article>
        <h1 className='favorites-header'>Favorites</h1>
        <MovieList {...this.props} />
      </article>
    );
  }

  render() {
    return (
      <div>
        { this.renderProfile() }
        { this.renderFavorites() }
      </div>
    );
  }
}

export default FavoritesContainer(Account);