import React, { Component } from 'react';
import { compose } from 'redux';
import Header from '../header/Header';
import UserContainer from '../../containers/userContainer/userContainer';
import MovieContainer from '../../containers/movieContainer/MovieContainer';
import FavoritesContainer from '../../containers/favoritesContainer/FavoritesContainer';
class App extends Component {  
  componentDidMount() {
    const { loadMovies, getFavorites } = this.props;
    
    this.getUser();

    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=74e395a1a0373d4f389e8f007c86c5e7&language=en-US')
      .then(data => data.json())
      .then(data => loadMovies(data.results));
  }

  componentWillReceiveProps(nextProps) {    
    if (nextProps.user && !nextProps.user.favorites) {
      fetch(`/api/users/${nextProps.user.id}/favorites`)
        .then(res => res.json())
        .then(favs => this.props.getFavorites(favs.data));
    }
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.props.signInUser(user);
    }
  }

  render() {    
    const { children, location: { pathname }} = this.props;

    return (
      <div>
        <Header pathname={pathname} />
        {children}
      </div>
    );
  }
}

const addAllProps = compose(
  FavoritesContainer,
  UserContainer,
  MovieContainer
);

export default addAllProps(App);
