import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTheaters, signInUser } from '../../actions';
import App from '../../components/app/App';

const mapDispatchToProps = (dispatch) => {
  // console.log('1')
  return {
    fetchMovies: (movies) => {
      dispatch(loadTheaters(movies))
    },
    getUser: (user) => {
      dispatch(signInUser(user))
    },
  }
}

const mapStateToProps = (state) => {
  // console.log('4')
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
