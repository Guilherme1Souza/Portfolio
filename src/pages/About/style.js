import styled from "styled-components";

export const AboutTitle = styled.h2`
  margin-top: 50px;
  
  h2 {
    font-size: 45px;
    margin-left: 185px;
  }
`;

export const AboutText = styled.div`

    h1 {
      display: flex;
      justify-content: center;
      font-size: 45px;
      margin-top:50px;
    }
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 180px;
  align-items: center;
  margin-top: 50px;

  .textInfo {
    font-size: 20px;
    margin-left: 185px;
   
    text-align: justify;
    width: 2000px;
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

export const CarouselContainer = styled.div`
  width: 25%;
  margin-left: 235px;
`;

export const Slide = styled.div`
  text-align: center;
  margin: 5px;
  gap: 10px;

  div {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  span {
    font-size: 1rem;
  }
`;

