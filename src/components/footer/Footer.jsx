import React from 'react'
import logo from '../../assets/logo/logo.png'
import instagram from '../../assets/footer/instagram.png'
import telegram from '../../assets/footer/telegram.png'
import watsapp from '../../assets/footer/whatsapp.png'
import facebook from '../../assets/footer/facebook.png'
import footer_logo from '../../assets/footer/footer_logo.png'

const Footer = () => {
    return (
        <div className='bg-[#F7F7F7] '>
            <div className="kontainer">
                <div className='py-[50px] flex gap-5 justify-between items-center border-b'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <img src={instagram} alt="" />
                        <img src={telegram} alt="" />
                        <img src={watsapp} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
                <div className='py-[50px] border-b max-[750px]:grid grid-cols-2 flex  max-[850px]:gap-[50px] gap-[80px]'>
                    <ul>
                        <li className='max-[750px]:text-[20px] text-[24px] leading-[30px] pb-3 font-[500]  '>Услуги</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Купить</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Арендовать</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Продать</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Оценить</li>
                    </ul>
                    <ul>
                        <li className='max-[750px]:text-[20px] text-[24px] leading-[30px] pb-3 font-[500]  '>Недвижимость</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Квартиры</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Новостройки</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Дома и участки</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Коммерческая</li>
                    </ul>
                    <ul>
                        <li className='max-[750px]:text-[20px] text-[24px] leading-[30px] pb-3 font-[500]  '>Компания</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>О нас</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Блог</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Контакты</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Связаться</li>
                    </ul>
                    <ul className='max-w-[280px]'>
                        <li className='max-[750px]:text-[20px] text-[24px] leading-[30px] pb-3 font-[500]  '>Другое</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Ипотечный калькулятор</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '>Инвестиции в недвижимость в Дубае</li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '></li>
                        <li className='max-[750px]:text-[16px] text-[20px] leading-[28.9px] pb-1 '></li>
                    </ul>
                </div>
                <div className='py-[10px] flex gap-5 justify-between items-center  '>
                    <p className='text-[#B3B3B3] text-[16px] leading-[23.12px]  '>
                        2024 © RMC De Luxe real estate LLC. Все права защищены
                    </p>
                    <div>
                        <img src={footer_logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer