import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  .headerLogo {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.main};
  }
  .headerUserContent {
    display: flex;
    align-items: center;
  }
`;
