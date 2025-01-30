import React from "react";
import Slider from "react-slick";
import { FaVuejs, FaBootstrap, FaGithub, FaFigma, FaJs  } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { CarouselContainer, Slide } from "./style";


export function Techs() {
  const data = [
    { id: "1", icon: <FaJs />, name: "JavaScript" },
    { id: "2", icon: <FaVuejs />, name: "Vue.js" },
    { id: "3", icon: <BiLogoTypescript />, name: "TypeScript" },
    { id: "4", icon: <RiReactjsLine />, name: "React.js" },
    { id: "4", icon: <FaBootstrap />, name: "Bootstrap" },
    { id: "4", icon: <FaGithub />, name: "Github" },
    { id: "4", icon: <FaFigma  />, name: "Figma" },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {data.map((item) => (
          <Slide key={item.id}>
            <div>{item.icon}</div>
            <span>{item.name}</span>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
