import { SIGNUP, CURRENT_USER, LOGIN, LOADING } from "../actions/types";

const initialState = {
  loading: false,
  currentUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };

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
