const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER':
      return action.user;
    case 'ADD_TO_FAVORITES':
     console.log('state ', state)
      const favorites = state.favorites ? [...state.favorites, action.movie] : [];
      return Object.assign({}, state, { favorites });
    default:
      return state;
  }
};

export default userReducer;
