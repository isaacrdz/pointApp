import firebase from "firebase";
import db from "../config/firebase";
import { SIGNUP, CURRENT_USER, LOGIN, LOADING } from "./types";

export const getUser = uid => {
  return async (dispatch, getState) => {
    try {
      const user = await db
        .collection("users")
        .doc(uid)
        .get();
      dispatch({
        type: LOGIN,
        payload: user.data()
      });
    } catch (e) {
      alert(e);
    }
  };
};

export const login = data => async dispatch => {
  dispatch(setLoading());
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password);
    dispatch(getUser(response.user.uid));
    dispatch({ type: LOGIN, payload: data });
  } catch (e) {
    alert(e);
  }
};

export const signup = data => async dispatch => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    if (response.user.uid) {
      const user = {
        uid: response.user.uid,
        email: data.email,
        username: data.username,
        bio: data.bio
      };
      db.collection("users")
        .doc(response.user.uid)
        .set(user);
      dispatch({ type: SIGNUP, payload: user });
    }
  } catch (e) {
    alert(e);
  }
};

// Set loading state
export const setLoading = () => {
  return {
    type: LOADING
  };
};
