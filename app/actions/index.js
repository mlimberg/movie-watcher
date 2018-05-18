export const addToFavorites = movie => ({
  type: 'ADD_TO_FAVORITES',
  movie
});

export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
});

export const signInUser = user => ({
  type: 'SIGN_IN_USER',
  user
});

export const removeFavorites = movie => ({
  type: 'REMOVE_FAVORITES',
  movie
});

export const clearFavorites = () => ({
  type: 'CLEAR_FAVORITES'
});

export const setCurrentMovie = movie => ({
  type: 'SET_CURRENT',
  movie
});
