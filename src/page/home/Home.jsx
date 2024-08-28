import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutCompany from '../../components/aboutCompany/AboutCompany'
import Investment from '../../components/investment/Investment'
import Management from '../../components/management/Management'
import ChooseUs from '../../components/chooseUs/ChooseUs'
import Buildings from '../../components/buildings/Buildings'
import Calculate from '../../components/calculate/Calculate'
import Contact from '../../components/contact/Contact'
import Blog from '../../components/blog/Blog'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCompany />
            <Investment />
            <Management />
            <ChooseUs />
            <Buildings />
            <Calculate />
            <Contact />
            <Blog />
        </>
    )
}

export default Home