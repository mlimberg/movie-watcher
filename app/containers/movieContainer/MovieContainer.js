import { connect } from 'react-redux';
import { setCurrentMovie, loadMovies } from '../../actions';

const matchDispatch = (dispatch) => ({
  setCurrentMovie: (movie) => {
    dispatch(setCurrentMovie(movie));
  },
  loadMovies: (movies) => {
    dispatch(loadMovies(movies));
  }
  // fetchMovies: (movies) => {
  //   dispatch(loadMovies(movies));
  // }

});

const mapState = (state) => ({
  movies: state.movies,
  movie: state.currentMovie
});

export default connect(mapState, matchDispatch);
