import React from "react";
import Modal from "../modal/Modal";
import AvatarEditor from "./avatarEditor/AvatarEditor";

const Avatar = ({ setAvatarModuleOpen, setAvatar }) => {
  return (
    <Modal closeModal={setAvatarModuleOpen}>
      <AvatarEditor
        setAvatar={setAvatar}
        setAvatarModuleOpen={setAvatarModuleOpen}
      />
    </Modal>
  );
};

export default Avatar;
