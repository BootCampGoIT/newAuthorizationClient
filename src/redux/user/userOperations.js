import axios from "axios";
import { signOut } from "../auth/authActions";
import {
  getUser,
  updateUser,
  setUserError,
  setUserLoading,
  getAllUsers,
} from "./userActions";

export const getUserOperation = () => async (dispatch, getState) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${
    getState().auth.token
  }`;
  dispatch(setUserLoading());
  if (getState().auth.token && getState().auth.user._id) {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/users/${getState().auth.user._id}`
        )
        .then((res) => {
          delete res.data._id;
          dispatch(getUser(res.data));
        });
    } catch (error) {
      console.dir(error);
      // error.response
      //   ? await dispatch(setError(error.response.data.error))
      //   : dispatch(setError(error.message));
    } finally {
      dispatch(setUserLoading());
    }
  } else {
    axios.defaults.headers.common["Authorization"] = "";
    await dispatch(signOut());
  }
};

export const updateUserOperation = (data) => async (dispatch, getState) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${
    getState().auth.token
  }`;
  dispatch(setUserLoading());
  if (getState().auth.token && getState().auth.user._id) {
    try {
      await axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/users/${getState().auth.user._id}`,
          data
        )
        .then(() => {
          dispatch(updateUser(data));
        });
    } catch (error) {
      await dispatch(setUserError(error.response.data.error));
    } finally {
      dispatch(setUserLoading());
    }
  } else {
    axios.defaults.headers.common["Authorization"] = "";
    await dispatch(signOut());
  }
};

export const getAllUsersOperation = () => async (dispatch, getState) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${
    getState().auth.token
  }`;
  if (getState().auth.token && getState().auth.user._id) {
    try {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/users`)
        .then(async (res) => {
          dispatch(getAllUsers(res.data.users));
        });
    } catch (error) {
      console.log(`error`, error);
      // await dispatch(setUserError(error.response.data.error));
    }
  } else {
    axios.defaults.headers.common["Authorization"] = "";
    await dispatch(signOut());
  }
};
