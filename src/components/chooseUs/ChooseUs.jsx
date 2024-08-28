import React from 'react'
import img1 from '../../assets/home/chooseUs/img1.png'
import img2 from '../../assets/home/chooseUs/img2.png'
import img3 from '../../assets/home/chooseUs/img3.png'
import img4 from '../../assets/home/chooseUs/img4.png'

const ChooseUs = () => {
    return (
        <div className='py-[100px]'>
            <div className="kontainer">
                <p className='max-[400px]:text-[30px] max-[800px]:text-[45px] min-[800px]:text-[55px] min-[800px]:leading-[70px] font-[500] text-[#333333] pb-10      '>Почему выбирают нас</p>
                <div className='grid max-[700px]:grid-cols-1 max-[1080px]:grid-cols-2 grid-cols-3 gap-5'>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center p-[30px] '>
                        <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>Опыт и профессионализм</p>
                        <p className='text-[#333333] text-[20px] leading-[28.9px]  '>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center  '>
                        <img className='h-full w-full' src={img1} alt="" />
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center p-[30px] '>
                        <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>Прозрачность и доверие</p>
                        <p className='text-[#333333] text-[20px] leading-[28.9px]  '>Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами</p>
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center  '>
                        <img className='h-full w-full' src={img2} alt="" />
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center p-[30px] '>
                        <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>Высокий уровень обслуживания</p>
                        <p className='text-[#333333] text-[20px] leading-[28.9px]  '>Мы всегда на связи, чтобы помочь вам в любое время</p>
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center  '>
                        <img className='h-full w-full' src={img3} alt="" />
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center p-[30px] '>
                        <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>Индивидуальный подход</p>
                        <p className='text-[#333333] text-[20px] leading-[28.9px]  '>Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента</p>
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center  '>
                        <img className='h-full w-full' src={img4} alt="" />
                    </div>
                    <div className='border h-[320px] flex flex-col gap-5 justify-center items-center p-[30px] '>
                        <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>Комплексное обслуживание</p>
                        <p className='text-[#333333] text-[20px] leading-[28.9px]  '>Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs