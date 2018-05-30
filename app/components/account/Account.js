import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieList from '../movieList/MovieList';
import FavoritesContainer from '../../containers/favoritesContainer/FavoritesContainer';
import UserContainer from '../../containers/UserContainer/UserContainer';

class Account extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderProfile() {
    const { user: { name, email, membersince }} = this.props;
    return (
      <article className='account-profile'>
        <h1 className='account-header'>Profile</h1>
        <div className='account-profile-body'>
          <label>
            Name:
            <h3>{name}</h3>
          </label>
          <label >
            Email:
            <h3>{email}</h3>
          </label>
          <label >
            Member Since:
            <h3>{membersince}</h3>
          </label>
        </div>
      </article>
    );
  }

  renderFavorites() {
    return (
      <article>
        <h1 className='account-header'>Favorites</h1>
        <MovieList {...this.props} onAccount={true} />
      </article>
    );
  }

  render() {
    const { user } = this.props;
    if (!user) {
      window.location.href = '/'
    } else {
      return (
        <div>
          { this.renderProfile() }
          { this.renderFavorites() }
        </div>
      );
    }
  }
}

export default FavoritesContainer(UserContainer(Account));