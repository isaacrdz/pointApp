import firebase from "firebase";
import db from "../config/firebase";
import uuid from "uuid";
import axios from "axios";
import { GET_POSTS } from "./types";

export const getPosts = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  );
};
