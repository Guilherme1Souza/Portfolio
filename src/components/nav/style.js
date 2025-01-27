import styled from "styled-components";
import { breakpoints } from '../../styles/break';

export const Navegação = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TWO};
  box-shadow: 4px 5px 8px ${({ theme }) => theme.COLORS.BOX_SHADOW};

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

      li a, li button {
        color: ${({ theme }) => theme.COLORS.TEXT};
        background: transparent;
        border: none;
        text-decoration: none;
        font-family: "Segoe UI", Verdana, sans-serif;
        font-weight: bold;
        position: relative;


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

    .dropdown {
    position: relative;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TWO};
    box-shadow: 4px 5px 8px ${({ theme }) => theme.COLORS.BOX_SHADOW};
    border-radius: 8px;
    list-style: none;
    z-index: 10;
}     
.dropdown:hover .dropdown-menu {
        display: block; 
    }

.dropdown-menu li {
    padding: 2px 16px;
}

.dropdown-menu a {

    display: block;
}

    @media (max-width: ${breakpoints.xxxl}){
      li a {
        font-size: 18px;
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
      height: 95%;
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
      height: 75%;
    }

    .dropdown-menu li {
    padding: 5px 16px;
}
  }
`;

export const Overlay = styled.div`
  
 


  @media (max-width: ${breakpoints.xs}) {
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
    display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
`;
