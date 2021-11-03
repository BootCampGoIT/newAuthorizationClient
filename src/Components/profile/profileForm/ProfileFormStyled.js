import styled from "styled-components";

export const ProfileFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    display: block;
    width: 100%;
  }
  .avatarContainer {
    width: 200px;
    height: 200px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 14px;
  }

  .flexible {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .photoBlock {
    width: 200px;
  }

  .avatarImage {
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }

  .profileForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .editPhoto {
    display: block;
    margin: 20px auto;
  }

  .colored {
    color: ${(props) => props.theme.colors.main};
    font-size: 14px;
  }

  .buttonsBlock {
    display: flex;
    justify-content: center;
  }
  .submitButton {
    border-radius: 14px 0 0 14px;
    margin-right: 1px;
  }
  .editButton {
    border-radius: 0 14px 14px 0;
    margin-bottom: 20px;
  }

  .submitButton,
  .editButton {
    width: 40%;
    margin-top: 20px;
  }

  .item {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .item svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.colors.main};
    margin-right: 20px;
  }

  .item label {
    width: 100%;
  }
  .item input {
    width: 100%;
    margin: 5px 0;
  }

  .hrLine {
    border-top: 1px solid ${(props) => props.theme.colors.secondary};
    width: calc(100% - 40px);
    margin: 5px 0 5px 40px;
  }

  @media (min-width: 768px) {
    .profileForm {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }

    .flexible {
      flex-direction: row;
      align-items: flex-start;
    }

    .photoBlock {
      margin-right: 60px;
    }
    .title {
      text-align: left;
      width: 100%;
    }
  }
`;
