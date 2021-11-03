import React, { useState, useEffect, useContext } from "react";
import { LangContext } from "../../App";
import { ProfileInfoContainer } from "./ProfileInfoStyled";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useDeviceSizes from "../../../hooks/useDeviceSizes";
import sprite from "../../../icons/profile/profile.svg";
import human from "../../../icons/avatar/face_human.svg";
import { signOut } from "../../../redux/auth/authActions";
import { getIsAuth } from "../../../redux/auth/authSelectors";
import { getUserSelector } from "../../../redux/user/userSelectors";
import ThemeSwitcher from "../../themeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../../languageSwitcher/LanguageSwitcher";
import { getDateInfo } from "../../../utils/dateConverter";
import { convertPhoneNumber } from "../../../utils/phoneConverter";
import { getNameOrNoData } from "../../../utils/getUserDetails";

const initialState = {
  firstName: "",
  lastName: "",
  birthday: "",
  email: "",
  phone: "",
  telegram: "",
  git: "",
  avatar: {},
};

const ProfileInfo = () => {
  const [state, setState] = useState({ ...initialState });
  const isAuth = useSelector(getIsAuth);
  const user = useSelector(getUserSelector);
  const { isMobileDevice, isTabletDevice } = useDeviceSizes();
  const history = useHistory();
  const dispatch = useDispatch();
  const { language } = useContext(LangContext);

  const onHandleEdit = () => {
    history.push("/profile/edit");
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, ...user }));
  }, [user]);

  const onLogout = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <ProfileInfoContainer>
      <div className='content'>
        <div className='leftBlock'>
          <div className='avatarContainerBlock'>
            {state.avatar?.img ? (
              <img
                src={state.avatar?.img}
                alt='bootCapm logo'
                className='avatarImage'
              />
            ) : (
              <img src={human} alt='bootCapm logo' className='avatarImage' />
            )}
          </div>

          {!isMobileDevice && (
            <button className='editButton' onClick={onHandleEdit}>
              {language.profileInfo.editButton}
            </button>
          )}
          {!isMobileDevice && (
            <>
              <div className='switcherHrLine'></div>
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
              <div className='switcherHrLine'></div>
              {isAuth && (
                <button onClick={onLogout} className='exitButton'>
                  {language.profileInfo.exitButton}
                </button>
              )}
            </>
          )}
        </div>
        <div className='rightBlock'>
          <div className='item'>
            <svg>
              <use href={sprite + "#icon-user"} />
            </svg>
            <div className='property'>
              <p className='colored'>{language.profileInfo.name}</p>
              <p>
                {getNameOrNoData(
                  state.firstName,
                  state.lastName,
                  isMobileDevice,
                  isTabletDevice,
                  language.profileInfo.noInfo
                )}
              </p>
            </div>
          </div>

          <div className='hrLine'></div>
          <div className='item'>
            <svg>
              <use href={sprite + "#icon-birthday-cake"} />
            </svg>
            <div className='property'>
              <p className='colored'>{language.profileInfo.birthday}</p>

              <p>
                {(state.birthday &&
                  getDateInfo(
                    state.birthday,
                    language.months,
                    language.profileInfo.year
                  )) ||
                  language.profileInfo.noInfo}
              </p>
            </div>
          </div>

          <div className='hrLine'></div>
          <div className='item'>
            <svg>
              <use href={sprite + "#icon-envelop"} />
            </svg>
            <div className='property'>
              <p className='colored'>{language.profileInfo.email}</p>
              <p>{state.email || language.profileInfo.noInfo}</p>
            </div>
          </div>

          <div className='hrLine'></div>
          <div className='item'>
            <svg>
              <use href={sprite + "#icon-phone"} />
            </svg>
            <div className='property'>
              <p className='colored'>{language.profileInfo.phone}</p>
              <p>
                {convertPhoneNumber(state.phone) || language.profileInfo.noInfo}
              </p>
            </div>
          </div>

          <div className='hrLine'></div>
          <div className='item'>
            <svg>
              <use href={sprite + "#icon-telegram"} />
            </svg>
            <div className='property'>
              <p className='colored'>{language.profileInfo.telegram}</p>
              <p> {state.telegram || language.profileInfo.noInfo}</p>
            </div>
          </div>
          <div className='hrLine'></div>
          <div className='item'>
            <svg>
              <use href={sprite + "#icon-github"} />
            </svg>
            <div className='property'>
              <p className='colored'>{language.profileInfo.gitHub}</p>
              <p> {state.git || language.profileInfo.noInfo}</p>
            </div>
          </div>
        </div>
        {isMobileDevice && (
          <button className='editButton' onClick={onHandleEdit}>
            {language.profileInfo.editButton}
          </button>
        )}
      </div>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
