import React, { createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import useTheme from "../hooks/usePersistedTheme";
import { AppStyled } from "./AppStyled";
import Header from "./header/Header";
import Main from "./main/Main";
import { useSelector } from "react-redux";
import { getUserSelector } from "../redux/user/userSelectors";
import { getIsAuth } from "../redux/auth/authSelectors";
import useLanguage from "../hooks/usePersistedLanguage";
import { useDispatch } from "react-redux";
import { getUserOperation } from "../redux/user/userOperations";

export const {
  Provider: ThemeContextProvider,
  Consumer: ThemeContextConsumer,
} = createContext();

export const LangContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(getUserSelector);
  const isAuth = useSelector(getIsAuth);
  const [theme, setTheme] = useTheme();
  const [language, setLanguage, list] = useLanguage();

  useEffect(() => {
    isAuth && !email && dispatch(getUserOperation());
  }, [email, isAuth, dispatch]);

  return (
    <LangContext.Provider value={{ language, setLanguage, list }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppStyled>
            <Header />
            <Main />
          </AppStyled>
        </ThemeProvider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
};

export default App;
