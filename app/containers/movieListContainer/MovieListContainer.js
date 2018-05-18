import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/movieList/MovieList';

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    movies: state.movies,
    user: state.user
  };
};

export default connect(mapStateToProps)(MovieList)
