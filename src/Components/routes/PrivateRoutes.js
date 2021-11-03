import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({ exact, path, component, isAuth }) => {
  return !isAuth ? (
    <Redirect to='/signin' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoutes;
