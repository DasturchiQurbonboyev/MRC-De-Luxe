import React from 'react';
import './Contact.css';
import img from '../../assets/home/contact/img.png'

const Contact = () => {
    return (
        <div className='py-[100px]'>
            <div className="kontainer max-[850px]:flex max-[850px]:flex-col-reverse  grid min-[850px]:grid-cols-2 items-center gap-10 justify-between bg-[#EDF3F5]">
                <div className='min-[850px]:max-w-[588px] min-[850px]:px-[40px] py-[60px]'>
                    <p className='text-[#333333] max-[850px]:pb-[30px] pb-[50px] max-[510px]:text-[25px] max-[850px]:text-[40px] text-[50px] max-w-[740px] max-[850px]:leading-[50px] leading-[70px]  '>Остались вопросы? Свяжитесь с нами</p>
                    <div className="form-group">
                        <div className="input-container">
                            <input type="text" name="" id="name" placeholder=" " />
                            <label htmlFor="name">ФИО *</label>
                        </div>
                        <div className="input-container">
                            <input type="tel" name="" id="phone" placeholder=" " />
                            <label htmlFor="phone">Номер телефона *</label>
                        </div>
                        <div className="input-container">
                            <input type="email" name="" id="email" placeholder=" " />
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="input-container">
                            <input type="text" name="" id="question" placeholder=" " />
                            <label htmlFor="question">Ваш вопрос</label>
                        </div>
                    </div>
                    <div className='pt-[40px]'>
                        <button className='px-[65px] py-[12px] bg-[#E1AF93] text-white'>Подробнее</button>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact;
