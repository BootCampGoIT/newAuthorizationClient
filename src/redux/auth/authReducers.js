import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  signIn,
  signOut,
  setAuthError,
  resetAuthError,
  setAuthLoading,
} from "./authActions";

const initialState = {
  email: "",
  name: "",
  _id: "",
};

const userReducer = createReducer(
  { ...initialState },
  {
    [signIn]: (_, { payload: { email, name, _id } }) => ({ email, name, _id }),
    [signOut]: () => ({ ...initialState }),
  }
);
const tokenReducer = createReducer("", {
  [signIn]: (_, { payload }) => payload.token,
  [signOut]: () => "",
});

const authError = createReducer("", {
  [setAuthError]: (_, { payload }) => payload,
  [resetAuthError]: () => "",
  [signOut]: () => "",
});

const authLoading = createReducer(false, {
  [setAuthLoading]: (state) => !state,
  [signOut]: () => false,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  authError,
  authLoading,
});

export default authReducer;
