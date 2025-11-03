"use client"
import Home6Banner from '@/components/banner/Home6Banner'
import Home6BlogSection from '@/components/blog-section/Home6BlogSection'
import Home6Faq from '@/components/faq-section/Home6Faq'
import Home6FeatureSection from '@/components/feature-section/Home6FeatureSection'
import Footer6 from '@/components/Footer/Footer6'
import Header6 from '@/components/header/Header6'
import Home6IntegrationSection from '@/components/integration-section/Home6IntegrationSection'
import Home6PartnerSection from '@/components/partner-sections/Home6PartnerSection'
import Home6processSection from '@/components/process-sections/Home6processSection'
import Home6TestimonialSection from '@/components/testimonial-section/Home6TestimonialSection'
import React, { useEffect } from 'react'

const SassPage = () => {
    useEffect(() => {
        document.body.classList.add("dark");
    })
    useEffect(() => {
        document.body.classList.add("digital-agency");
    })
    return (
        <>
            <Header6 />
            <Home6Banner />
            <Home6PartnerSection />
            <Home6FeatureSection />
            <Home6TestimonialSection />
            <Home6IntegrationSection />
            <Home6processSection />
            <Home6Faq />
            <Home6BlogSection />
            <Footer6 />
        </>

    )
}

export default SassPage
