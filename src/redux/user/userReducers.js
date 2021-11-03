import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getUser,
  updateUser,
  setUserError,
  resetUserError,
  setUserLoading,
  getAllUsers,
} from "./userActions";
import { signOut } from "../auth/authActions";

const initialState = {
  avatar: {},
  firstName: "",
  lastName: "",
  birthday: "",
  email: "",
  phone: "",
  telegram: "",
  git: "",
};

const userDataReducer = createReducer(
  { ...initialState },
  {
    [getUser]: (_, { payload }) => payload,
    [updateUser]: (_, { payload }) => payload,
    [signOut]: () => ({ ...initialState }),
  }
);

const userError = createReducer("", {
  [setUserError]: (_, { payload }) => payload,
  [resetUserError]: () => "",
  [signOut]: () => "",
});

const userLoading = createReducer(false, {
  [setUserLoading]: (state) => !state,
  [signOut]: () => false,
});

const allUsers = createReducer(null, {
  [getAllUsers]: (_, { payload }) => payload,
  [signOut]: () => [],
});

const userReducer = combineReducers({
  data: userDataReducer,
  userError,
  userLoading,
  allUsers,
});

export default userReducer;
