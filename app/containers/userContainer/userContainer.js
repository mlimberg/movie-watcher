import { connect } from 'react-redux';
import { signInUser } from '../../actions';

const mapState = (state) => {
  return {}
};

const mapDispatch = (dispatch) => ({
  getUser: (user) => {
    dispatch(signInUser(user));
  },
});

export default connect(mapState, mapDispatch);

