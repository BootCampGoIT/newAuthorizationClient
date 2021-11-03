import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../../../redux/auth/authSelectors";
import { LangContext } from "../../../App";
import { NavLinkStyled } from "./NavigationItemStyled";

const NavigationItem = ({
  isPrivate,
  restricted,
  exact,
  name,
  path,
  setSideBarOpen,
}) => {
  const isAuth = useSelector(getIsAuth);
  const onHandleClick = () => {
    setSideBarOpen && setSideBarOpen(false);
  };
  const { language } = useContext(LangContext);

  return (
    <>
      {!isPrivate && !restricted && (
        <li key={name} onClick={onHandleClick} className='navigationListItem'>
          <NavLinkStyled to={path} exact={exact} activeClassName='activeLink'>
            {language.navigation[name]}
          </NavLinkStyled>
        </li>
      )}
      {!isAuth && restricted && !isPrivate && (
        <li key={name} onClick={onHandleClick} className='navigationListItem'>
          <NavLinkStyled to={path} exact={exact} activeClassName='activeLink'>
            {language.navigation[name]}
          </NavLinkStyled>
        </li>
      )}
      {isPrivate && isAuth && (
        <li key={name} onClick={onHandleClick} className='navigationListItem'>
          <NavLinkStyled to={path} exact={exact} activeClassName='activeLink'>
            {language.navigation[name]}
          </NavLinkStyled>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
