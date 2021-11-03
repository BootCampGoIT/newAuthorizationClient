import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ exact, path, isAuth, component, restricted }) => {
  return isAuth && restricted ? (
    <Redirect to='/profile' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoutes;
