import React from 'react'
import next from '../../assets/home/blog/next.png'
import koz from '../../assets/home/blog/koz.png'
import img1 from '../../assets/home/blog/img1.png'
import img2 from '../../assets/home/blog/img2.png'
import img3 from '../../assets/home/blog/img3.png'
import img4 from '../../assets/home/blog/img4.png'

const Blog = () => {


    const blog = [
        {
            titile: "Тенденции и прогнозы рынка недвижимости на 2024 год",
            data: "31.07.2024",
            views: 899,
            img: img1
        },
        {
            titile: "Лучшие районы для инвестиций в недвижимость",
            data: "31.07.2024",
            views: 899,
            img: img2
        },
        {
            titile: "Топ-10 новых  жилых комплексов",
            data: "31.07.2024",
            views: 899,
            img: img3
        },
        {
            titile: "Элитные апартаменты становятся всёболее популярными",
            data: "31.07.2024",
            views: 899,
            img: img4
        },
    ]


    return (
        <div className='py-[100px]'>
            <div className="kontainer">
                <p className='text-[#333333] text-[55px] max-w-[740px] leading-[70px]  '>Блог</p>
                <div className='grid max-[550px]:grid-cols-1 max-[900px]:grid-cols-2 grid-cols-3 pt-[30px] gap-[20px]'>
                    {
                        blog.slice(0, 3)?.map((el, inx) => (
                            <div key={inx}>
                                <div className='relative'>
                                    <img src={el.img} alt="" />
                                    <div className='absolute bottom-5 text-white max-[900px]:text-[18px] text-[20px] font-[500] leading-[28.9px] flex justify-between w-full px-5 '>
                                        <p>{el.data}</p>
                                        <div className='flex items-center gap-2'>
                                            <img src={koz} alt="" />
                                            <p>{el.views}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[#333333] max-[900px]:text-[20px] text-[24px] max-w-[350px] py-5 font-[500] leading-[30px]   '>{el.titile}</p>
                                    <div className='flex items-center gap-2 '>
                                        <p className='text-[#E1AF93] max-[900px]:text-[16px] text-[18px] font-[600] leading-[26px] '>Подробнее</p>
                                        <img src={next} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='pt-[60px] text-center'>
                    <button className='px-[65px] py-[12px] bg-[#E1AF93] text-white'>Все статьи</button>
                </div>

            </div>
        </div>
    )
}

export default Blog