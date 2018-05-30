const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER':
      return action.user;
    case 'ADD_TO_FAVORITES':
      const favorites = state.favorites ? [...state.favorites, action.movie] : [];
      return Object.assign({}, state, { favorites });
    case 'SIGN_OUT_USER':
      return null;
    default:
      return state;
  }
};

export default userReducer;
