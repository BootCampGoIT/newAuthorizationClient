const getErrorSelector = (state) => state.auth.error;
const getIsAuth = (state) => state.auth.token;

export { getErrorSelector, getIsAuth };
