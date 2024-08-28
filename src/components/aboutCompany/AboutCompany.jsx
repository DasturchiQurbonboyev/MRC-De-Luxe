import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import foto from "../../assets/home/about/foto1.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './AboutCompany.css';

// import required modules
import { Navigation } from 'swiper/modules';

const AboutCompany = () => {
    return (
        <div className='py-[100px] hero__about'>
            <div className="kontainer">

                <div className='grid min-[680px]:grid-cols-2 gap-[25px]'>
                    <div>
                        <p className='text-[#333333] max-[500px]:text-[30px] max-[750px]:text-[45px] min-[750px]:text-[55px] min-[500px]:leading-[70px] font-[500]  '>О компании</p>
                        <p className='text-[#E1AF93]  max-[500px]:text-[30px] max-[750px]:text-[45px] min-[750px]:text-[55px] min-[500px]:leading-[70px] font-[500]'>RMC DE LUXE</p>
                    </div>
                    <div className='grid gap-6'>
                        <div className='flex justify-between'>
                            <p className='text-[#E1AF93]'>Аренда</p>
                            <p>Купля - продажа</p>
                            <p>Управление</p>
                        </div>
                        <p>Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности <br /><br />Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков</p>
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={foto} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany