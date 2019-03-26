import { GET_EMAILS } from "./types";

const initialState = {
  email: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAILS:
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
