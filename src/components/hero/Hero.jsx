import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './HeroSwiper.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Hero = () => {


    const hero = [
        {
            title: "Найдите идеальное место для жизни",
            description: "Откройте двери в новое будущее с нами"
        },
        {
            title: "Найдите идеальное место для жизни",
            description: "Откройте двери в новое будущее с нами"
        },
        {
            title: "Найдите идеальное место для жизни",
            description: "Откройте двери в новое будущее с нами"
        },
        {
            title: "Найдите идеальное место для жизни",
            description: "Откройте двери в новое будущее с нами"
        },
        {
            title: "Найдите идеальное место для жизни",
            description: "Откройте двери в новое будущее с нами"
        },
    ]


    return (
        <div className=" hero pt-[80px]   ">
            <div className="kontainer h-full py-[70px] relative">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        hero?.map((el, inx) => (
                            <SwiperSlide key={inx}>
                                <div className='flex flex-col justify-end h-full max-w-[700px]  '>
                                    <p className='max-[600px]:text-[35px] max-[800px]:text-[45px]  max-[1000px]:text-[65px]  min-[1000px]:text-[80px] text-white font-[500] min-[1000px]:leading-[70px]     '>{el.title}</p>
                                    <p className='text-white text-[16px] min-[600px]:text-[20px] leading-[28.9px] pt-[20px] pb-[40px]  '>{el.description}</p>
                                    <div><button className='px-[65px] py-[12px] bg-[#E1AF93] text-white '>Подробнее</button></div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default Hero