import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import heart from '../../assets/home/buildings/heart.png'


import 'swiper/css';
import 'swiper/css/pagination';

import './Buildings.css';


import { Pagination } from 'swiper/modules';

const Buildings = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(3.5);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        if (width >= 1000) {
            setCount(3.5);
        } else if (width >= 700 && width < 1000) {
            setCount(2);
        } else {
            setCount(1);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);





    const built = [
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://storage.kun.uz/source/uploads/2017-1112/smnb2.jpg"
        },
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://storage.kun.uz/source/uploads/2017-1112/smnb7.jpg"
        },
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://storage.kun.uz/source/uploads/2017-1112/smnb10.jpg"
        },
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://storage.kun.uz/source/uploads/2017-1112/smnb9.jpg"
        },
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://static.xabar.uz/crop/3/5/960__80_3535844388.jpg"
        },
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://storage.kun.uz/source/uploads/2017-1112/smnb7.jpg"
        },
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://storage.kun.uz/source/uploads/2017-1112/smnb8.jpg"
        },
        {
            title: "Safa One",
            price: "от $1 900 000",
            img: "https://xabar.uz/static/crop/3/9/960__80_39114983.jpg"
        },
    ]

    return (
        <div className='py-[100px] buildings'>
            <div className="kontainer">
                <div className='pb-[60px]'>
                    <p className='text-[55px] leading-[70px] font-[500] text-[#333333]  '> Новостройки</p>
                </div>
                <div>
                    <Swiper
                        slidesPerView={count}
                        centeredSlides={false}
                        spaceBetween={0}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            built?.map((el, inx) => (
                                <SwiperSlide key={inx}>
                                    <div className='relative h-[400px]'>
                                        <img className='w-full h-full object-cover' src={el.img} alt="" />
                                        <div className='absolute top-4 right-4'>
                                            <img className='cursor-pointer' src={heart} alt="" />
                                        </div>
                                        <div className='absolute bottom-6 left-6 text-white'>
                                            <p className='text-[25px] font-[600] leading-[50px]  '>{el.title}</p>
                                            <p className='text-[20px] font-[500] leading-[28.9px]   '>{el.price}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
                <div className='text-center pt-[60px]'>
                    <button className='text-white text-[17px] font-[600] leading-[24.57px] py-3  px-[60px] bg-[#E1AF93] '>Смотреть все</button>
                </div>
            </div>
        </div>
    )
}

export default Buildings