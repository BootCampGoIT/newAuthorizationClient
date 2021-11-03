import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  .title {
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    padding-bottom: 10px;
    width: 100%;
  }
  @media (min-width: 768px) {
    .title {
      text-align: left;
    }
  }
`;
