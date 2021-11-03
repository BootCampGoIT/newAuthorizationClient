import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
import LoaderComponent from "../../loader/Loader";
import { getIsAuth, getErrorSelector } from "../../../redux/auth/authSelectors";
import DefaultPage from "../../../pages/DefaultPage";
import { setAuthError } from "../../../redux/auth/authActions";

const Content = () => {
  const isAuth = useSelector(getIsAuth);
  const authError = useSelector(getErrorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    authError &&
      setTimeout(() => {
        dispatch(setAuthError(""));
      }, 2000);
  }, [dispatch, authError]);
  return (
    <>
      {authError && <Redirect to='/error' />}
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoutes {...route} key={route.name} isAuth={isAuth} />
            ) : (
              <PublicRoutes {...route} key={route.name} isAuth={isAuth} />
            )
          )}
          <Route path='/error' component={DefaultPage} exact />
        </Switch>
      </Suspense>
    </>
  );
};

export default Content;
