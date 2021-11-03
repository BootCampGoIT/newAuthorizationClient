import { createAction } from "@reduxjs/toolkit";

const getUser = createAction("@user/getUser");
const updateUser = createAction("@user/updateUser");
const setUserError = createAction("@user/setError");
const resetUserError = createAction("@user/resetError");
const setUserLoading = createAction("@user/setLoading");
const getAllUsers = createAction("@user/getAllUsers");

export {
  getUser,
  updateUser,
  setUserError,
  resetUserError,
  setUserLoading,
  getAllUsers,
};
