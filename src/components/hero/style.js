import styled from "styled-components";
import { breakpoints } from "../../styles/break";

export const HeroContainer = styled.aside`
display: flex;

@media (max-width: ${breakpoints.p}) {
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

  @media (max-width: ${breakpoints.m}) {
    margin-left: 50px;
  }

  @media (max-width: ${breakpoints.p}) {
    display: flex;
    margin-left: -150px;
    padding: 0 20px 0 50px;
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
      color: ${({ theme }) => theme.COLORS.TEXT};
    }
  }

  @media(max-width: ${breakpoints.g}) {
   
    

  }


  @media (max-width: ${breakpoints.m})  {
    flex-direction: column-reverse;
    margin-top: 50px;
    margin-left: 180px;
    gap: 50px;

    > img {
      width: 240px;
      height: 240px;
    }

    div {
      align-items: center;
      line-height: 40px;
      font-size: 26px;
      margin-left: 10px;
    }

    p {
      font-size: 22px;
    }

  }

  @media (max-width: ${breakpoints.p}) {
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
    }

    p {
      font-size: 23px;
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
  @media (max-width: ${breakpoints.m}) {
    margin-left: 215px;
    margin-top: 15px;
    width: 180px;
    height: 50px;
    font-size: 12px;
  }

  @media (max-width: ${breakpoints.p}) {
    font-size: 9px;
    height: 50px;
    width: 140px;
    margin-left: 80px;
    margin-top: 20px;
  }

 
`;
