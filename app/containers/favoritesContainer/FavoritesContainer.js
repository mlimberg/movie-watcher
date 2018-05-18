import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFavorites } from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (movie) => {
      dispatch(addToFavorites(movie));
    },
    removeFav: (movie) => {
      dispatch(removeFavorites(movie));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    movies: state.favorites,
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
