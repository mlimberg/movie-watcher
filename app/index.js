import './reset'
import './styles';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/app/App';
import MovieList from './components/movieList/MovieList';
// import SignUpContainer from './containers/signUpContainer/SignUpContainer';
import SignUp from './components/signUp/SignUp';
// import FavoritesContainer from "./containers/favoritesContainer/FavoritesContainer";
import MovieDetail from './components/movieDetail/MovieDetail';
import Account from './components/account/Account';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MovieList} />
        <Route path='/join' component={SignUp} />
        <Route path='/favorites' component={Account} />
        <Route path='/movies/:movie_title' component={MovieDetail} />
        <Route path='/my-account' component={Account} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('main'));
