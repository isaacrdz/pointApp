import { SIGNUP, CURRENT_USER, LOGIN } from "../actions/types";

const initialState = {
  isAutheticated: false,
  user: {},
  currentUser: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case SIGNUP:
      return {
        ...state,
        user: action.payload
      };

    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        isAutheticated: true
      };
    default:
      return state;
  }
};
