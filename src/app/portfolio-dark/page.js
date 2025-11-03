"use client"
import Home7About from '@/components/about/Home7About'
import Home7Banner from '@/components/banner/Home7Banner'
import Home7BlogSection from '@/components/blog-section/Home7BlogSection'
import Footer7 from '@/components/Footer/Footer7'
import Header7 from '@/components/header/Header7'
import Home7PortfolioSection from '@/components/portfolio-section/Home7PortfolioSection'
import Home7ServiceSection from '@/components/service-section/Home7ServiceSection'
import Home7TestimonialSection from '@/components/testimonial-section/Home7TestimonialSection'
import React, { useEffect } from 'react'

const PortfolioDarkPage = () => {
    useEffect(() => {
        document.body.classList.add("dark");
    })
    return (
        <>
            <Header7 />
            <Home7Banner />
            <Home7About />
            <Home7PortfolioSection />
            <Home7ServiceSection />
            <Home7TestimonialSection />
            <Home7BlogSection />
            <Footer7 />
        </>

    )
}

export default PortfolioDarkPage
