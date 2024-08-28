import React from 'react'

const Calculate = () => {
    return (
        <div className='py-[100px]'>
            <div className="kontainer">
                <p className='max-[650px]:text-[30px]  max-[800px]:text-[45px] text-[55px] pb-10 leading-[70px] font-[500] text-[#333333]  '>Рассчитайте ипотеку</p>
                <div className='p-[40px] shadow max-[650px]:grid-cols-1 grid grid-cols-2 gap-5'>
                    <div className="">
                        <div className='grid max-[1160px]:grid-cols-1  grid-cols-2 gap-10  '>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-[#858585] text-[16px]' htmlFor="">Стоимость недвижимости (у.е.)</label>
                                <input className='border py-[12px] px-[16px] ' type="text" name="" id="" placeholder='Введите стоимость' />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-[#858585] text-[16px]' htmlFor="">Первоначальный взнос (у.е.)</label>
                                <input className='border py-[12px] px-[16px] ' type="text" name="" id="" placeholder='Введите размер взноса' />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-[#858585] text-[16px]' htmlFor="">Срок в годах</label>
                                <input className='border py-[12px] px-[16px] ' type="text" name="" id="" placeholder='Введите срок' />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-[#858585] text-[16px]' htmlFor="">Ставка (%)</label>
                                <input className='border py-[12px] px-[16px] ' type="text" name="" id="" placeholder='Введите размер ставки' />
                            </div>
                        </div>
                        <div className='pt-10'>
                            <button className='text-white text-[17px] font-[600] leading-[24.57px] py-3  px-[60px] bg-[#E1AF93] '>Смотреть все</button>
                        </div>
                    </div>
                    <div className='grid max-[1160px]:grid-cols-1 grid-cols-2 gap-5'>
                        <div>
                            <p className='text-[#B3B3B3]  text-[18px] leading-[26px] '>Ежемесячный платеж</p>
                            <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>4 410 у.е.</p>
                        </div>
                        <div>
                            <p className='text-[#B3B3B3]  text-[18px] leading-[26px] '>Сумма кредита</p>
                            <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>200 000 у.е.</p>
                        </div>
                        <div>
                            <p className='text-[#B3B3B3]  text-[18px] leading-[26px] '>Процентная ставка</p>
                            <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>24%</p>
                        </div>
                        <div>
                            <p className='text-[#B3B3B3]  text-[18px] leading-[26px] '>Дата последнего платежа</p>
                            <p className='text-[#333333] text-[25px] font-[500] leading-[36px]  '>28 июля 2034 г</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Calculate