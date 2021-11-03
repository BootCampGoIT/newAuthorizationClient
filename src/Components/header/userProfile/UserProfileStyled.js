import styled from "styled-components";

export const UserProfileContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 20px;

  .avatarContainerBlock {
    width: 40px;
    height: 40px;
    /* margin-bottom: 10px; */
  }
  .userName {
    margin-left: 20px;
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatarImage {
    width: 40px;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 6px;
    margin-bottom: 30px;
  }
`;
