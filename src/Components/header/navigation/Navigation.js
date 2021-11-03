import React, { useState, useEffect } from "react";
import Burger from "./burger/Burger";

import NavigationList from "./navigationList/NavigationList";
import useDeviceSizes from "../../../hooks/useDeviceSizes";
import { NavigationContainer } from "./NavigationStyled";
import UserProfile from "../userProfile/UserProfile";
import { useSelector } from "react-redux";
import { getUserSelector } from "../../../redux/user/userSelectors";
import Sidebar from "./sideBar/SideBar";

const Navigation = () => {
  const { isMobileDevice } = useDeviceSizes();
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const user = useSelector(getUserSelector);

  const toggleSidebar = () => {
    setSideBarOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isSideBarOpen ? "hidden" : "auto";
  }, [isSideBarOpen]);

  return (
    <NavigationContainer>
      {!isMobileDevice && <NavigationList setSideBarOpen={setSideBarOpen} />}
      {isMobileDevice && (
        <>
          <Burger
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />

          <Sidebar isSideBarOpen={isSideBarOpen} toggleSidebar={toggleSidebar}>
            {user.email && <UserProfile toggleSidebar={toggleSidebar} />}
            <NavigationList setSideBarOpen={setSideBarOpen} />
          </Sidebar>
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
