import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  width: 100%;

  .avatarContainerBlock {
    width: 200px;
    height: 200px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 14px;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatarImage {
    width: 200px;
    height: 200px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 14px;
    margin-bottom: 30px;
  }

  .rightBlock {
    width: 100%;
  }

  .item {
    display: flex;
    align-items: center;
  }

  .item svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.colors.main};
  }

  .item:first-child {
    margin-top: 0;
  }

  .property {
    margin-left: 20px;
    width: 100%;
  }

  .hrLine {
    border-top: 1px solid ${(props) => props.theme.colors.secondary};
    width: calc(100% - 40px);
    margin: 15px 0 15px 40px;
  }

  .colored {
    color: ${(props) => props.theme.colors.main};
  }
  .editButton {
    display: block;
    margin: 25px auto;
  }

  @media (min-width: 768px) {
    .avatarContainerBlock {
      margin-bottom: 0;
    }

    .title {
      text-align: left;
    }

    .avatarImage {
      margin-bottom: 0;
    }

    .leftBlock {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 60px;
    }

    .content {
      flex-direction: row;
      align-items: flex-start;
    }

    .switcher {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
    }
    .languageSelector {
      width: 120px;
    }
    .switcherHrLine {
      border-top: 1px solid ${(props) => props.theme.colors.secondary};
      width: 100%;
      margin: 15px 0;
    }

    .exitButton {
      display: block;
      margin: 0 auto;
    }
    .editButton {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      width: 50%;
    }
  }
`;
