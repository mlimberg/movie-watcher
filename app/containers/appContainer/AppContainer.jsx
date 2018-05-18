import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies, signInUser, addToFavorites, clearFavorites } from '../../actions';
import App from '../../components/app/App';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (movies) => {
      dispatch(loadMovies(movies));
    },
    
    getUser: (user) => {
      dispatch(signInUser(user));
    },

    getFavorites: (favs) => {
      favs.forEach(fav => dispatch(addToFavorites(fav)));
    },

    resetFavorites: (movies) => {
      dispatch(clearFavorites(movies));
    }
  };
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
