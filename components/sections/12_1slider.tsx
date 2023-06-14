import React from 'react';
import left from '../../public/images/icons/arrow_left.svg'
import right from '../../public/images/icons/arrow_right.svg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Author_slide from '../ui/Author_slide';


const VIDEOS = [
    { name: 'Жанна Серопян на Рен-ТВ - С Бодрым Утром!', src: 'https://www.youtube.com/embed/zHIShFwvmPg' },
    { name: 'Жанна Серопян в программе "Доктор И" - канал ТВ-Центр', src: 'https://www.youtube.com/embed/obnJR5PALrc'},
    { name: 'Жанна Серопян в утреннем шоу на телеканале МИР', src: 'https://www.youtube.com/embed/AYXQ0PjckKc'},
    { name: 'Жанна Серопян в передаче 180 минут на завтрак - канал МИР', src: 'https://www.youtube.com/embed/WJum8UUJtT4'},
    { name: 'Жанна Серопян на радио Наше Подмосковье - 21.02.16', src: 'https://www.youtube.com/embed/AdN9xx7h1mg'},
    { name: 'Жанна Серопян в сюжете на Москва24 - 25.02.16', src: 'https://www.youtube.com/embed/ga6K6k_X2nE'},
    { name: 'Как научиться петь? Жанна Серопян на "Москва 24"', src: 'https://www.youtube.com/embed/EvFfWwnA7us'},
    { name: 'Как пение избавляет от храпа - Жанна Серопян в программе Настроение на ТВЦ', src: 'https://www.youtube.com/embed/xNglcxc1xYk'},
]

export default function Author_slider(){
    
    return(
        <div className="relative mt-10 md:mt-[90px] flex justify-between px-9 ">
            
            <style>
                {`
                .swiper-button-disabled{
                    display: none;
                    
                }
                .swiper-pagination{
                    
                    bottom: 0px !important;
                    position: absolute;
                    z-index: 1; 
                }
                .swiper-pagination-bullet-active{
                    background-color: #FF83CF;
                }
                .swiper-pagination-bullet {
                    width: 7px;
                    height: 7px;
                }
                @media (min-width: 720px) {
                    .swiper-pagination-bullet {
                        width: 16px;
                        height: 16px;
                    }
                }
                @media (min-width: 880px) {
                    .swiper-pagination-bullet {
                        width: 22px;
                        height: 22px;
                    }
                }
                `}
            </style> 

            <div className="absolute z-50 left-0 h-[calc(100%-20px)] sm:h-[calc(100%-30px)]  md:h-[calc(100%-80px)] flex flex-col justify-center">
                <button id="_PREV_SMI_SLIDER" className="block">
                    <img src={left.src} alt="<"/>
                </button>
            </div>

            <Swiper
                id="smi_slider"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1} 
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                }}
                slidesPerGroup={1}
                navigation={{ prevEl: '#_PREV_SMI_SLIDER', nextEl: '#_NEXT_SMI_SLIDER' }}
                pagination={{ clickable: true }}
            >
                {VIDEOS.map((el, i) => {
                    return (
                        <SwiperSlide key={i} className='md:pb-[80px] pb-[20px] sm:pb-[30px]'>
                            <Author_slide {...el} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
            <div className="absolute z-50 right-0 h-[calc(100%-20px)] sm:h-[calc(100%-30px)]  md:h-[calc(100%-80px)] flex flex-col justify-center">
                <button id='_NEXT_SMI_SLIDER' className='block'>
                    <img src={right.src} alt=">" className=''/>
                </button>
            </div>
        </div>
    )
}