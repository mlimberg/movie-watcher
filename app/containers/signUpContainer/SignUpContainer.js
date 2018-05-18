import React from 'react';
import { connect } from 'react-redux';
import SignUp from '../../components/signUp/SignUp';
import { signInUser } from '../../actions';


const mapDispatchToProps = (dispatch) => {
  return {
    signInClick: (user) => {
      dispatch(signInUser(user));
    },
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
