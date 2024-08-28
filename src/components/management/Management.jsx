import React from 'react'
import Checkmark from '../../assets/home/management/Checkmark.png'

const Management = () => {
    return (
        <div className='py-[100px]'>
            <div className="kontainer">
                <p className='text-[#333333] max-[600px]:text-[25px] max-[850px]:text-[40px] text-[55px] max-w-[740px] max-[600px]:leading-[38px] leading-[70px]  '>Что входит в услугу управления недвижимостью</p>
                <div className='pt-[50px]'>
                    <ul className='grid max-[650px]:grid-cols-1 grid-cols-2'>
                        <li className='border-t  min-[650px]:border-r py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Проверка арендаторов (кредитная история, рекомендации)</p>
                        </li>
                        <li className='border-t py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Регулярное техническое обслуживание</p>
                        </li>
                        <li className='border-t  min-[650px]:border-r py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Подготовка и подписание договоров аренды</p>
                        </li>
                        <li className='border-t py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Организация и проведение ремонтных работ</p>
                        </li>
                        <li className='border-t  min-[650px]:border-r py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Сбор арендной платы</p>
                        </li>
                        <li className='border-t py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Контроль за состоянием недвижимости</p>
                        </li>
                        <li className='border-t  min-[650px]:border-r py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Обработка запросов и жалоб арендаторов</p>
                        </li>
                        <li className='border-t border-b py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Подбор надежных арендаторов</p>
                        </li>
                        <li className='border-t   min-[650px]:border-r py-[40px] px-[20px] flex items-center gap-4'>
                            <img src={Checkmark} alt="" />
                            <p>Контроль соблюдения условий аренды</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Management