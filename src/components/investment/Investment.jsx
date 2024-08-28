import React from 'react'
import img1 from '../../assets/home/investment/img1.png'

const Investment = () => {
    return (
        <div className='bg-[#EDF3F5] py-[80px]'>
            <div className="kontainer">
                <p className='hidden max-[600px]:block pb-[50px] max-[600px]:text-[30px] text-[45px] min-[850px]:text-[50px] font-[500] max-[560px]:leading-[38px] leading-[50px] min-[850px]:leading-[70px]  '>Инвестиции в недвижимость в Дубае</p>
                <div className=" max-[850px]:flex max-[600px]:flex-col-reverse max-[850px]:flex-col  grid  max-[850px]: grid-cols-2 items-center gap-[50px] min-[1000px]:gap-[100px]">
                    <div className='flex flex-col gap-[40px]'>
                        <p className='max-[600px]:hidden block pb-[50px] max-[600px]:text-[30px] text-[45px] min-[850px]:text-[50px] font-[500] max-[560px]:leading-[38px] leading-[50px] min-[850px]:leading-[70px]  '>Инвестиции в недвижимость в Дубае</p>
                        <div className='flex flex-col gap-[20px] text-[20px] leading-[28.9px]  '>
                            <p>Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала</p>
                            <p>Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.</p>
                            <p>Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.</p>
                            <p>Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.</p>
                        </div>
                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <button className='px-[65px] py-[12px] bg-[#E1AF93] text-white'>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default Investment