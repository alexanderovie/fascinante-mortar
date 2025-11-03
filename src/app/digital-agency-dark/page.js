"use client"
import Home3aboutSection from '@/components/about/Home3aboutSection'
import Home3Banner from '@/components/banner/Home3Banner'
import Home3BlogSection from '@/components/blog-section/Home3BlogSection'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Home3PartnerSection from '@/components/partner-sections/Home3PartnerSection'
import Home3PortfolioSection from '@/components/portfolio-section/Home3PortfolioSection'
import Home3ProcessSection from '@/components/process-sections/Home3ProcessSection'
import Home3ServiceSection from '@/components/service-section/Home3ServiceSection'
import Home3TestimonialSection from '@/components/testimonial-section/Home3TestimonialSection'
import React, { useEffect } from 'react'

const DigitalAgencyPage = () => {
    useEffect(() => {
        document.body.classList.add("digital-agency");
        document.body.classList.add("dark");
    })
    return (
        <>
            <Header3 />
            <Home3Banner />
            <Home3PartnerSection />
            <Home3aboutSection />
            <Home3PortfolioSection />
            <Home3ServiceSection />
            <Home3ProcessSection />
            <Home3TestimonialSection />
            <Home3BlogSection />
            <Home3Footer />
        </>
    )
}

export default DigitalAgencyPage
