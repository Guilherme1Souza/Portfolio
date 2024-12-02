import styled from "styled-components";

export const Navegação = styled.nav`
  .nav {
    display: flex;
    height: 100px;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    .nav-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 680px;
      gap: 68px;
      list-style: none;
    }

    .nav-list a {
      display: flex;
      font-size: 15px;
      color: ${({ theme }) => theme.COLORS.TEXT};
      padding-block: 16px;
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: ${({ theme }) => theme.COLORS.BLUE};
        transition: width 0.3s ease-in-out;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
`;
