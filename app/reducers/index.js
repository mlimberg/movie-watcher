import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducer';
import movieListReducer from './movieList-reducer';
import userReducer from './user-reducer';
import currentMovieReducer from './currentMovie-Reducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  movies: movieListReducer,
  user: userReducer,
  currentMovie: currentMovieReducer
});

export default rootReducer;
