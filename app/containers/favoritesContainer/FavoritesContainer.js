import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFavorites, clearFavorites } from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (movie) => {
      dispatch(addToFavorites(movie));
    },
    removeFav: (movie) => {
      dispatch(removeFavorites(movie));
    },
    resetFavorites: (movies) => {
      dispatch(clearFavorites(movies));
    },
    getFavorites: (favs) => {
      favs.forEach(fav => dispatch(addToFavorites(fav)))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
