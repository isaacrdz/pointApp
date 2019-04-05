import { GET_QUOTES, GET_MYQUOTES } from "../actions/types";

const initialState = {
  quotes: [],
  myQuotes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload
      };
    case GET_MYQUOTES:
      return {
        ...state,
        myQuotes: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
