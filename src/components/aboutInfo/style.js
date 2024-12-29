import styled from "styled-components";

export const AboutTitle = styled.h2`
  h2 {
    font-size: 45px;
    margin-left: 100px;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 200px;
  align-items: center;

  .textInfo {
    font-size: 18px;
    margin-left: 100px;
    width: 1550px;
  }

  .slide-item {
    margin-left: 150px;
    border-radius: 50%;
    width: 300px;
    height: 280px;
    object-fit: cover;
  }

  .swiper-button-prev {
    margin-left: 50px;
  }
  .swiper-button-next::after {
    margin-right: 250px;
  }
`;
