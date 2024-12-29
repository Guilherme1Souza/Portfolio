import { AboutTitle, AboutInfo } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from "react";
import { Techs } from "../techsInfo/Techs";


export function AboutText({ title }) {
    const [slidePerView, setSlidePerview] = useState(1)
    const data = [
        { id: '1', image: '/images/fotoperfil_one.jpg' },
        { id: '2', image: '/images/fotoperfil_two.png' },
        { id: '3', image: '/images/fotoperfil_three.jpg' },
        { id: '4', image: '/images/fotoperfil_four.jpg' },
    ]

    return (
        <>
            <AboutTitle>
                <h2>{title}</h2>
            </AboutTitle>
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
            <Techs />
        </>

    );
};
