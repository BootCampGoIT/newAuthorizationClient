import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.title};
  &.${(props) => props.activeClassName} {
    color: ${(props) => props.theme.colors.main};
  }
`;
