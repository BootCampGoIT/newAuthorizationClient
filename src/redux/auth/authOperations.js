import axios from "axios";
import { signIn, setAuthError, signOut, setAuthLoading } from "./authActions";

export const signUpOperation = (user) => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, {
        email: user.email,
        password: user.password,
      })
      .then(async () => {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, {
            email: user.email,
            password: user.password,
          })
          .then(async (res) => {
            dispatch(
              signIn({
                token: res.data.token,
                email: res.data.user.email,
                _id: res.data.user._id,
              })
            );
          });
      });
  } catch (error) {
    await dispatch(setAuthError(error.response.data.error));
  } finally {
    dispatch(setAuthLoading());
  }
};

export const signInOperation = (user) => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, {
        email: user.email,
        password: user.password,
      })
      .then(async (res) => {
        dispatch(
          signIn({
            token: res.data.token,
            email: res.data.user.email,
            _id: res.data.user._id,
          })
        );
      });
  } catch (error) {
    error.response
      ? await dispatch(setAuthError(error.response.data.error))
      : dispatch(setAuthError(error.message));
  } finally {
    dispatch(setAuthLoading());
  }
};

export const signOutOperation = () => async (dispatch) => {
  dispatch(signOut());
};
