import React, { useState, useEffect, useContext } from "react";
import Avatar from "../../avatar/Avatar";
import { ProfileFormContainer } from "./ProfileFormStyled";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserOperation } from "../../../redux/user/userOperations";
import sprite from "../../../icons/profile/profile.svg";
import human from "../../../icons/avatar/face_human.svg";
import { getUserSelector } from "../../../redux/user/userSelectors";
import { LangContext } from "../../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
  firstName: "",
  lastName: "",
  birthday: "",
  email: "",
  phone: "",
  telegram: "",
  git: "",
};

const ProfileForm = () => {
  const { language } = useContext(LangContext);
  const user = useSelector(getUserSelector);
  const [state, setState] = useState({ ...initialState });
  const [avatar, setAvatar] = useState({});
  const [isAvatarModalOpen, setAvatarModuleOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      ...user,
      birthday: user.birthday ? new Date(user.birthday) : "",
    }));
    setAvatar({ ...user.avatar });
  }, [user]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isAvatarModalOpen ? "hidden" : "auto";
  }, [isAvatarModalOpen]);

  const onHandleCancel = () => {
    history.push("/profile");
  };

  const close = () => setAvatarModuleOpen(true);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const setBirthday = (date) => {
    setState({
      ...state,
      birthday: date,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUserOperation({
        ...state,
        // birthday: new Date(state.birthday),
        avatar,
      })
    );
    history.push("/profile");
  };

  return (
    <ProfileFormContainer>
      <div className='flexible'>
        <div className='photoBlock'>
          {isAvatarModalOpen && (
            <Avatar
              setAvatarModuleOpen={setAvatarModuleOpen}
              setAvatar={setAvatar}
              isAvatarModalOpen={isAvatarModalOpen}
            />
          )}

          <div className='avatarEditor'>
            <div className='avatarContainer'>
              {avatar.img ? (
                <img
                  src={avatar.img}
                  alt='bootCapm logo'
                  className='avatarImage'
                />
              ) : (
                <img src={human} alt='bootCapm logo' className='avatarImage' />
              )}
            </div>
            <button type='button' className='editPhoto' onClick={close}>
              {language.profileInfo.editPhoto}
            </button>
          </div>
        </div>
        <form className='profileForm' onSubmit={onHandleSubmit}>
          <div className='labelsBlock'>
            <div className='item'>
              <svg>
                <use href={sprite + "#icon-user"} />
              </svg>
              <label className='colored'>
                {language.profileInfo.name}
                <input
                  type='text'
                  name='firstName'
                  placeholder={language.profileInfo.placeholder.firstName}
                  value={state.firstName}
                  onChange={onHandleChange}
                />
              </label>
            </div>
           
            <div className='item'>
              <svg>
                <use href={sprite + "#icon-user"} />
              </svg>
              <label className='colored'>
                {language.profileInfo.surname}
                <input
                  type='text'
                  name='lastName'
                  placeholder={language.profileInfo.placeholder.surname}
                  value={state.lastName}
                  onChange={onHandleChange}
                />
              </label>
            </div>
           
            <div className='item'>
              <svg>
                <use href={sprite + "#icon-birthday-cake"} />
              </svg>
              <label className='colored'>
                {language.profileInfo.birthday} <br />
                <DatePicker
                  dateFormat='dd/MM/yyyy'
                  selected={state.birthday}
                  placeholderText='31/12/2000'
                  onChange={setBirthday}
                />
              </label>
            </div>
           
            <div className='item'>
              <svg>
                <use href={sprite + "#icon-envelop"} />
              </svg>
              <label className='colored'>
                {language.profileInfo.email}
                <input
                  type='text'
                  name='email'
                  value={state.email}
                  onChange={onHandleChange}
                  disabled
                />
              </label>
            </div>
            
            <div className='item'>
              <svg>
                <use href={sprite + "#icon-phone"} />
              </svg>
              <label className='colored'>
                {language.profileInfo.phone}
                <input
                  type='text'
                  name='phone'
                  pattern='[0-9]{10}'
                  placeholder='0933916535'
                  value={state.phone}
                  onChange={onHandleChange}
                />
              </label>
            </div>
           
            <div className='item'>
              <svg>
                <use href={sprite + "#icon-telegram"} />
              </svg>
              <label className='colored'>
                {language.profileInfo.telegram}
                <input
                  type='text'
                  name='telegram'
                  value={state.telegram}
                  onChange={onHandleChange}
                  id='datePicker'
                />
              </label>
            </div>
           
            <div className='item'>
              <svg>
                <use href={sprite + "#icon-github"} />
              </svg>
              <label className='colored'>
                {language.profileInfo.gitHub}
                <input
                  type='text'
                  name='git'
                  value={state.git}
                  onChange={onHandleChange}
                />
              </label>
            </div>
            <div className='buttonsBlock'>
              <button type='submit' className='submitButton'>
                {language.buttons.save}
              </button>
              <button
                type='button'
                className='editButton'
                onClick={onHandleCancel}>
                {language.buttons.cancel}
              </button>
            </div>
          </div>
        </form>
      </div>
    </ProfileFormContainer>
  );
};

export default ProfileForm;
