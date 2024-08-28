import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo/logo.png'
import search from '../../assets/navbar/search.png'
import phone from '../../assets/navbar/phone.png'
import close from '../../assets/navbar/close.png'
import heart from '../../assets/navbar/heart.png'
import icon from '../../assets/navbar/icon.png'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'


const Navbar = () => {

    const [age, setAge] = React.useState('');
    const [menu, setMenu] = useState(false)
    const [selected, setSelected] = useState(false)


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`z-50 ${scroll ? "h-[80px] duration-300" : "duration-300 h-[100px]"} transform flex fixed bg-white items-center w-full`}>
            <div className="kontainer flex flex-grow gap-[25px] justify-between items-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex-grow'>
                    <ul className={`flex max-[900px]:hidden items-center transition-all duration-700 justify-end text-[18px] min-[950px]:text-[20px] leading-[28.9px] text-[#333333] ${scroll ? " gap-[15px] min-[1000px]:gap-[40px]" : " max-[900px]:gap-[10px] max-[1000px]:gap-[20px] max-[1110px]:gap-[40px] gap-[80px]"} `}>
                        <li>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">Услуги</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Купить</MenuItem>
                                    <MenuItem value={20}>Арендовать</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    <MenuItem value={40}>Оценка недвижимости</MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        <li>О нас</li>
                        <li>Блог</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={`${menu ? "fixed bg-[rgba(14,13,13,0.7)] flex justify-end  h-[100vh] w-[100vw] top-0 left-0 " : "hidden"}  `}>
                    <div className={`bg-white absolute transition-all duration-700   ${menu ? "delay-300 duration-700 right-0" : ""}  -right-[100%]  h-[100%] min-[650px]:w-[50%] `}>
                        <div className='py-[25px] z-10 flex gap-[12px] justify-end pr-[40px] border-b '>
                            <div className=' flex border rounded-[100px]  justify-center items-center   pr-2 '>
                                <select className=' outline-none px-[10px] rounded-[100px]  py-[10px] ' name="" id="">
                                    <option value="">Ru</option>
                                    <option value="">Uz</option>
                                    <option value="">En</option>
                                    <option value="">Kz</option>
                                </select>
                            </div>
                            <div onClick={() => setMenu(false)} className='flex cursor-pointer  w-[50px] h-[50px]  rounded-[50%]  justify-center items-center bg-[#333333] '><img src={close} alt="" /></div>
                        </div>
                        <div className=' py-[25px] px-[25px] flex flex-col  '>
                            <ul className={`  flex flex-col gap-8 justify-start transition-all duration-700 text-[24px] leading-[28.9px] text-[#333333]  `}>
                                <li>
                                    <ul className='flex flex-col gap-[12px] '>
                                        <p onClick={() => setSelected(!selected)} className='flex items-center gap-3 text-[#E1AF93] '><span>Услуги</span> <img className={`${selected ? "" : "transform rotate-180"}`} src={icon} alt="" /> </p>
                                        <li className={`pl-[10px] transition duration-300 text-[20px]  ${selected ? " " : "duration-300 hidden"} `}>Купить</li>
                                        <li className={`pl-[10px] transition duration-300 text-[20px]  ${selected ? " " : "duration-300 hidden"} `}>Арендовать</li>
                                        <li className={`pl-[10px] transition duration-300 text-[20px]  ${selected ? " " : "duration-300 hidden"} `}>Продать</li>
                                        <li className={`pl-[10px] transition duration-300 text-[20px]  ${selected ? " " : "duration-300 hidden"} `}>Оценка недвижимости</li>
                                    </ul>
                                </li>
                                <li>О нас</li>
                                <li>Блог</li>
                                <li>Контакты</li>
                            </ul>


                            <div className='pt-[100px]'>
                                <button className='text-[17px] px-[53px] py-[12px] bg-[#E1AF93] text-white font-[600] '> Задать вопрос</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex gap-3'>
                    <div className='w-[50px] h-[50px] border rounded-[50%] flex justify-center items-center '><img src={search} alt="" /></div>
                    <div className='w-[50px] h-[50px] border rounded-[50%] flex justify-center items-center '><img src={heart} alt="" /></div>
                    <div className='flex max-[900px]:hidden w-[50px] h-[50px]  rounded-[50%]  justify-center items-center bg-[#333333] '><img src={phone} alt="" /></div>
                    <div onClick={() => setMenu(true)} className='cursor-pointer max-[900px]:flex hidden w-[50px] h-[50px]  rounded-[50%]  justify-center items-center bg-[#333333] '>
                        <div className='flex flex-col gap-1'>
                            <div className='w-[25px] rounded-[15px] bg-white h-1'></div>
                            <div className='w-[25px] rounded-[15px] bg-white h-1'></div>
                            <div className='w-[25px] rounded-[15px] bg-white h-1'></div>
                        </div>
                    </div>
                    <div className='flex max-[900px]:hidden border rounded-[100px]  justify-center items-center   pr-2 '>
                        <select className=' outline-none px-[10px] rounded-[100px]  py-[10px] ' name="" id="">
                            <option value="">Ru</option>
                            <option value="">Uz</option>
                            <option value="">En</option>
                            <option value="">Kz</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar