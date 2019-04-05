import { combineReducers } from "redux";
import authReducer from "./authReducer";
import quoteReducer from "./quoteReducer";
import postReducer from "./postReducer";

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  quotes: quoteReducer
});
