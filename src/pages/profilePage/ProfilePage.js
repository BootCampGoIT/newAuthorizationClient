import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../../Components/loader/Loader";
import ProfileForm from "../../Components/profile/profileForm/ProfileForm";
import ProfileInfo from "../../Components/profile/profileInfo/ProfileInfo";
import { getUserOperation } from "../../redux/user/userOperations";
import { isUserExistSelector } from "../../redux/user/userSelectors";
import { LangContext } from "../../Components/App";
import { ProfilePageContainer } from "./ProfilePageStyled";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userExist = useSelector(isUserExistSelector);
  const { language } = useContext(LangContext);

  useEffect(() => {
    dispatch(getUserOperation());
  }, [dispatch]);
  return (
    <ProfilePageContainer>
      <h2 className='title'>{language.profileInfo.title}</h2>
      {userExist ? (
        <Switch>
          <Route path='/profile' exact component={ProfileInfo} />
          <Route path='/profile/edit' exact component={ProfileForm} />
        </Switch>
      ) : (
        <LoaderComponent />
      )}
    </ProfilePageContainer>
  );
};

export default ProfilePage;
