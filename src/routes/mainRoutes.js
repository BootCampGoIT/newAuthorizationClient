import { lazy } from "react";

export const mainRoutes = [
  {
    name: "main",
    path: "/",
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: "profile",
    path: "/profile",
    component: lazy(() =>
      import("../pages/profilePage/ProfilePage" /*webpackChunkName:'Profile'*/)
    ),
    exact: false,
    isPrivate: true,
    restricted: false,
  },
  {
    name: "signUp",
    path: "/signup",
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'SignUp'*/)
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },

  {
    name: "signIn",
    path: "/signin",
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'SignIn'*/)
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
];
