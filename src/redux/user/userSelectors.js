const getUserSelector = (state) => state.user.data;
const getAllUsersSelector = (state) => state.user.allUsers;
const isUserExistSelector = (state) => state.user.data.email;
const getUserError = (state) => state.user.error;

export {
  getUserSelector,
  isUserExistSelector,
  getUserError,
  getAllUsersSelector,
};
