import React from "react";
import { useSelector } from "react-redux";
import { getUserSelector } from "../../../redux/user/userSelectors";
import { UserProfileContainer } from "./UserProfileStyled";
import human from "../../../icons/avatar/face_human.svg";
import { getName } from "../../../utils/getUserDetails";
import useDeviceSizes from "../../../hooks/useDeviceSizes";
import { useHistory } from "react-router-dom";

const UserProfile = ({ toggleSidebar }) => {
  const user = useSelector(getUserSelector);
  const history = useHistory();
  const { isMobileDevice, isTabletDevice } = useDeviceSizes();
  const goProfile = () => {
    history.push("/profile");
    toggleSidebar();
  };
  return (
    <UserProfileContainer>
      <div className='avatarContainerBlock'>
        {user.avatar?.img ? (
          <img src={user.avatar?.img} alt='user' className='avatarImage' />
        ) : (
          <img src={human} alt='user' className='avatarImage' />
        )}
      </div>
      <p className='userName' onClick={goProfile}>
        {user.email &&
          getName(
            user.firstName,
            user.lastName,
            user.email,
            isMobileDevice,
            isTabletDevice
          )}
      </p>
    </UserProfileContainer>
  );
};

export default UserProfile;
