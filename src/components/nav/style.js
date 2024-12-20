import styled from "styled-components";
import { breakpoints } from '../../styles/break';

export const Navegação = styled.nav`
  position: relative;

  .nav {
    display: flex;
    align-items: center;
    height: 100px;

    .nav-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 68px;
      margin-left: auto;
      list-style: none;

      @media (max-width: ${breakpoints.xxxl}) {
        margin-left: 1000px;
      }

      @media (max-width: ${breakpoints.xxl}) {
        margin-left: 500px;
        padding-right: 20px;
      }

      @media (max-width: ${breakpoints.xl}) {
        margin-left: 430px;
        padding-right: 20px;
      }

      @media (max-width: ${breakpoints.lg}) {
        margin-left: 320px;
        padding-right: 20px;
      }

      @media (max-width: ${breakpoints.md}) {
       margin-left: 150px;
      }

      @media (max-width: ${breakpoints.sm}) {
        flex-direction: column;
        margin: 0 auto;
        gap: 60px;
        background: none;
      }

      @media (max-width: ${breakpoints.xs}) {
        margin: 0 auto;
        gap: 50px;
        background: none;
      }

      li a {
        color: ${({ theme }) => theme.COLORS.TEXT};
        text-decoration: none;
        text-transform: uppercase;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        position: relative;
        padding-block: 16px;

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

        &:hover {
          color: ${({ theme }) => theme.COLORS.BLUE};
        }
      }
    }

    @media (max-width: ${breakpoints.xxxl}){
      li a {
        font-size: 22px;
      }
    }

    @media (max-width: ${breakpoints.xl}) {
      li a {
          font-size: 18px;
        }
    }


    @media (max-width: ${breakpoints.lg}) {
      li a {
          font-size: 14px;
        }
    }

    @media (max-width: ${breakpoints.md}) {
      li a {
          font-size: 14px;
        }
    }

    @media (max-width: ${breakpoints.sm}) {
      li a {
          font-size: 20px;
        }
     }

    @media (max-width: ${breakpoints.xs}) {
      li a {
          font-size: 16px;
        }
     }
  }

  .hamburger-menu {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1000;

    svg {
      margin: 40px;
    }

    @media (max-width: ${breakpoints.sm}) {
      display: block;
    }

    
  }

  .header {
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.sm}) {
      position: fixed;
      top: 100px;
      left: -100%;
      width: 50%;
      height: 55%;
      background-color: ${({ theme }) => theme.COLORS.GRAY};
      transition: left 0.3s ease-in-out;
      flex-direction: column;
      border-radius: 0 50px 50px 0;
      z-index: 999;

      &.open {
        left: 0;
      }
    }

    @media (max-width: ${breakpoints.xs}) {
      width: 50%;
      height: 60%;
    }
  }
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;
