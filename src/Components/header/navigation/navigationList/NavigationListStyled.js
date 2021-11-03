import styled from "styled-components";

export const NavigationListContainer = styled.nav`
  .navigationList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  @media (min-width: 768px) {
    .navigationList {
      flex-direction: row;
      height: 40px;
    }

    .navigationListItem:not(:last-child) {
      margin-right: 30px;
    }
  }
  @media (min-width: 1024px) {
  }
`;
