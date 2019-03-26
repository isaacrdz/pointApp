import firebase from "firebase";
import db from "../config/firebase";
import uuid from "uuid";
import axios from "axios";
import { GET_EMAILS } from "./types";

export const referFriendEmail = upload => dispatch => {
  axios
    .post("https://hooks.zapier.com/hooks/catch/1036497/nfdak9/", upload)
    .then(res => console.log("sent hook"));
};

export const getEmails = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
    dispatch({
      type: GET_EMAILS,
      payload: res.data
    })
  );
};
