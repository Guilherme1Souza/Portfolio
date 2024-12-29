import { AboutTitle, AboutInfo } from "./style";
import {Swiper, SwiperSlide} from 'swiper/react'
import { useState, useEffect } from "react";


export function AboutText({title}) {
    const [slidePerView, setSlidePerview] = useState(1)
    const data = [
        {id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
        {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
        {id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png'},
    ]

    return (
        <>
        <AboutTitle>
            <h2>{title}</h2>
        </AboutTitle>
        <AboutInfo>
        <p className="textInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit, iusto neque, laboriosam cupiditate quidem ducimus aliquid quis atque fuga sint maiores velit voluptates commodi fugiat eos dolorem nesciunt? Unde.</p>

        <Swiper
        slidesPerView={slidePerView}
        navigation
        >
         {data.map( (item) => (
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
        </>
        
    );
  };
  