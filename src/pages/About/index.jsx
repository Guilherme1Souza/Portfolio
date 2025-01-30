import { AboutInfo } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from "react";
import { TitlePrashes } from "../Experience/style";
import React from "react";
import Slider from "react-slick";
import { FaVuejs, FaBootstrap, FaGithub, FaFigma, FaJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { CarouselContainer, Slide } from "./style";



export const About = () => {
    const [slidePerView, setSlidePerview] = useState(1)
    const data = [
        { id: '1', image: '/images/fotoperfil_one.jpg' },
        { id: '2', image: '/images/fotoperfil_two.png' },
        { id: '3', image: '/images/fotoperfil_three.jpg' },
        { id: '4', image: '/images/fotoperfil_four.jpg' },
    ]

    const data_two = [
        { id: "1", icon: <FaJs />, name: "JavaScript" },
        { id: "2", icon: <FaVuejs />, name: "Vue.js" },
        { id: "3", icon: <BiLogoTypescript />, name: "TypeScript" },
        { id: "4", icon: <RiReactjsLine />, name: "React.js" },
        { id: "4", icon: <FaBootstrap />, name: "Bootstrap" },
        { id: "4", icon: <FaGithub />, name: "Github" },
        { id: "4", icon: <FaFigma />, name: "Figma" },
    ];

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };


    return (
        <>
            <TitlePrashes>
                <h1>Sobre mim</h1>
                <p>Para mais detalhes sobre minha trajetória, entre em contato comigo</p>
            </TitlePrashes>
            <AboutInfo>
                <p className="textInfo">Profissional encantado por criar soluções digitais que sejam intuitivas e visualmente atraentes, visando melhorar a experiência do usuário,
                    determinado em resolver problemas.
                    Atualmente trabalho na empresa Taxcel Soluções Fiscais como desenvolvedor front-end, onde atuo com desenvolvimento de novas funcionalidades com foco na melhoria contínua da experiência do usuário em nossos serviços, abaixo algumas tecnologias que tenho conhecimento:
                </p>



                <Swiper
                    slidesPerView={slidePerView}
                    navigation
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </AboutInfo>
            <CarouselContainer>
                <Slider {...settings}>
                    {data_two.map((item) => (
                        <Slide key={item.id}>
                            <div>{item.icon}</div>
                            <span>{item.name}</span>
                        </Slide>
                    ))}
                </Slider>
            </CarouselContainer>
        </>
    );
};
