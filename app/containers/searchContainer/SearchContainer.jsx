import React from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    loadResults: (movies) => {
      dispatch(loadMovies(movies))
    },
  }
}

export default connect(undefined, mapDispatchToProps);
