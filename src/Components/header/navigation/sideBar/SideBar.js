import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { signOut } from "../../../../redux/auth/authActions";
import { getIsAuth } from "../../../../redux/auth/authSelectors";
import { LangContext } from "../../../App";
import LanguageSwitcher from "../../../languageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../../../themeSwitcher/ThemeSwitcher";
import { SideBarContainer } from "./SideBarStyled";

const Sidebar = ({ children, isSideBarOpen, toggleSidebar }) => {
  const { language } = useContext(LangContext);
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(signOut());
    toggleSidebar();
  };

  return (
    <SideBarContainer>
      <CSSTransition
        in={isSideBarOpen}
        timeout={200}
        classNames='overlay'
        unmountOnExit>
        {(stage) => (
          <div className='modalContainer'>
            <CSSTransition
              in={stage === "entered"}
              timeout={200}
              classNames='modal'
              mountOnEnter
              unmountOnExit>
              <div className='modalSidebar'>
                {children}
                <div className='hrLine'></div>
                <div className='switcher'>
                  <p>{language.mode}</p>
                  <ThemeSwitcher />
                </div>
                <div className='switcher'>
                  <p>{language.switcher}</p>
                  <div className='languageSelector'>
                    <LanguageSwitcher />
                  </div>
                </div>
                <div className='hrLine'></div>
                {isAuth ? (
                  <button onClick={logoutUser} className='modalButtonCanceling'>
                    {language.buttons.exitButton}
                  </button>
                ) : (
                  <button
                    onClick={toggleSidebar}
                    className='modalButtonCanceling'>
                    {language.buttons.cancel}
                  </button>
                )}
              </div>
            </CSSTransition>
          </div>
        )}
      </CSSTransition>
    </SideBarContainer>
  );
};

export default Sidebar;
