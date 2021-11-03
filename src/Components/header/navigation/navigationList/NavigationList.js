import React from "react";
import { mainRoutes } from "../../../../routes/mainRoutes";
import NavigationItem from "../navigationItem/NavigationItem";
import { NavigationListContainer } from "./NavigationListStyled";

const NavigationList = ({ setSideBarOpen }) => {
  return (
    <NavigationListContainer>
      <ul className='navigationList'>
        {mainRoutes.map((route) => (
          <NavigationItem
            {...route}
            key={route.path}
            setSideBarOpen={setSideBarOpen}
          />
        ))}
      </ul>
    </NavigationListContainer>
  );
};

export default NavigationList;
