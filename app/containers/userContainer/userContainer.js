import { connect } from 'react-redux';
import { signInUser, signOutUser } from '../../actions';

const mapState = (state) => {
  return {
    user: state.user
  };
};

const mapDispatch = (dispatch) => ({
  signInUser: (user) => {
    dispatch(signInUser(user));
  },
  signOutUser: () => {
    dispatch(signOutUser());
  },
  addToLocalStorage: (user) => {
    user = JSON.stringify(user);
    localStorage.setItem('user', user);
  }
});

export default connect(mapState, mapDispatch);

