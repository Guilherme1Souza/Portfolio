import styled from "styled-components";
import { breakpoints } from "../../styles/break";

export const HeroContainer = styled.aside`
display: flex;

@media (max-width: ${breakpoints.xs}) {
  display: flex;
  justify-content: center;
}
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 250px;
  margin-left: 15px;

  a {
    font-size: 25px;
    width: 15px;
    transition: 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  @media (min-width: ${breakpoints.xxl}) {
    a {
      font-size: 28px;
    }
  }
  @media (max-width: ${breakpoints.xl}) {
    margin-top: 200px;
    
    a {
      font-size: 22px;
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    margin-top: 150px;
    
    a {
      font-size: 22px;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    margin-top: 120px;
    
    a {
      font-size: 22px;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-left: 50px;
    
    a {
      font-size: 24px;
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    display: flex;
    margin-left: -90px;
    padding: 0 20px 0 50px;

    a {
      font-size: 22px;
    }
  }
`;

export const Profile = styled.div`
 
`;

export const ProfileInfo = styled.div`
    display: flex;
    gap: 255px;
    margin: 150px auto 0 250px;


  > img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 104px;

    h2, p {
      font-size: 55px;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }
  }

  @media (max-width: ${breakpoints.xxxl}) {
    margin: 165px auto 0 400px;
    gap: 355px;
    align-items: center;

    > img {
    width: 296px;
    height: 296px;
    border-radius: 50%;
  }

    > div {
    display: flex;
    flex-direction: column;
    line-height: 104px;

    h2, p {
      font-size: 80px;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }
  }
  }

  @media (max-width: ${breakpoints.xxl}) {
    margin: 120px auto 0 200px;
    gap: 250px;
    align-items: center;

    > img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

    > div {

      h2, p {
      font-size: 74px;
      line-height: 100px;
      width: 550px;
    }
  }
}

@media (max-width: ${breakpoints.xl}) {
  margin: 120px auto 0 250px;
    gap: 105px;
    align-items: center;

    > img {
    width: 240px;
    height: 220px;
    border-radius: 50%;
  }
    
    > div {

     h2, p {
    font-size: 55px;
    line-height: 70px;
    width: 450px;

  }
  }
}

  @media (max-width: ${breakpoints.lg}) {
    margin: 120px auto 0 120px;
    gap: 105px;
    align-items: center;

    > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
    
    > div {

     h2, p {
    font-size: 44px;
    line-height: 70px;
    width: 450px;

  }
  }
}

  @media (max-width: ${breakpoints.md}) {
  display: flex;
  justify-content: space-evenly;
  line-height: 104px;
  align-items: center;

  gap: 10px; 
  margin: 80px auto 0 120px;

  > img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  > div {
    h2, p {
    font-size: 36px;
    line-height: 50px;
    width: 450px;
  }
  }
}


  @media (max-width: ${breakpoints.sm}) {
  flex-direction: column-reverse;
  margin-top: 50px;
  margin-left: 200px;
  gap: 50px;

  > img {
    width: 240px;
    height: 240px;
    margin-left: 5px;
  }

  div {
    align-items: center;
    line-height: 40px;
    font-size: 26px; 
    margin-left: 10px;

    h2, p {
      font-size: 22px; 
      width: auto;
    }
  }
}

@media (max-width: ${breakpoints.xs}) {
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  align-items: start;
  margin-left: 60px;
  margin-top: 60px;
  gap: 25px;

  > img {
    width: 170px;
    height: 170px;
  }

  div {
    line-height: 30px;
    align-items: center;
    margin-left: 0px;

    h2, p {
      font-size: 23px; 
      width: auto;
    }
  }
}
`;

export const ButtonDownload = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
  color: ${({ theme }) => theme.COLORS.TEXT};
  padding: 12px 24px;
  margin-left: 250px;
  cursor: pointer;
  border-radius: 50px; 
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease; 

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE}; 
    color: ${({ theme }) => theme.COLORS.WHITE}; 
    transform: scale(1.1);
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.FOCUS_COLOR}; 
  }

  p {
    margin-left: 8px;
  }

  svg {
    font-size: 24px; 
  }

  
  @media (max-width: ${breakpoints.xxxl}) {
    font-size: 26px;
    margin-left: 410px;
  }

  @media (max-width: ${breakpoints.xxl}) {
    margin-top: -45px;
    margin-left: 215px;
    width: 184px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.xl}) {
    margin-top: -45px;
    width: 164px;
    height: 40px;
    font-size: 13px;
    margin-left: 260px;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 184px;
    height: 40px;
    font-size: 14px;
    margin-left: 130px;
    margin-top: -18px;
  }

  @media (max-width: ${breakpoints.md}) {
    margin-left: 130px;
    margin-top: -10px;
    font-size: 12px;
    width: 160px;
    height: 40px;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-left: 238px;
    margin-top: 15px;
    width: 180px;
    height: 50px;
    font-size: 12px;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 9px;
    height: 50px;
    width: 140px;
    margin-left: 72px;
    margin-top: 20px;
  }

 
`;
