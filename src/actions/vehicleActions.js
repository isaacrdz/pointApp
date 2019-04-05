import firebase from "firebase";
import db from "../config/firebase";
import uuid from "uuid";
import axios from "axios";
import { GET_QUOTES, GET_MYQUOTES } from "./types";

export const quoteRequest = quote => dispatch => {
  db.collection("quotes")
    .doc(quote.id)
    .set(quote)
    .then(res => alert("Success"))
    .catch(err => console.log(err));
};

export const getQuotes = () => async dispatch => {
  const quotes = await db.collection("quotes").get();

  const array = [];
  quotes.forEach(quote => {
    array.push(quote.data());
  });

  await dispatch({ type: GET_QUOTES, payload: array });
};

export const getMyQuotes = uid => async dispatch => {
  const myQuotes = await db
    .collection("quotes")
    .where("uid", "==", uid)
    .get();

  const array = [];
  myQuotes.forEach(quote => {
    array.push(quote.data());
  });

  await dispatch({ type: GET_MYQUOTES, payload: array });
};
