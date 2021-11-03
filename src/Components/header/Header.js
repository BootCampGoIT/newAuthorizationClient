import React from "react";
import { HeaderStyled } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";
import sprite from "../../icons/header/options.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyled>
      <Link to='/'>
        <svg className='headerLogo'>
          <use href={sprite + "#icon-home"} />
        </svg>
      </Link>

      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
