"use client"
import FintechBanner from '@/components/banner/FintechBanner'
import Home2BlogSection from '@/components/blog-section/Home2BlogSection'
import Home2FeatureSection from '@/components/feature-section/Home2FeatureSection'
import Home2FeatureSliderSection from '@/components/feature-section/Home2FeatureSliderSection'
import Home2FooterSection from '@/components/Footer/Home2FooterSection'
import Header2 from '@/components/header/Header2'
import Home2PartnerArea from '@/components/partner-sections/Home2PartnerArea'
import Home2ServiceSection from '@/components/service-section/Home2ServiceSection'
import Home2TestimonialSection from '@/components/testimonial-section/Home2TestimonialSection'
import React, { useEffect } from 'react'



const FintechPage = () => {
    useEffect(() => {
        document.body.classList.add("fintech");
    }, []);
    return (
        <>
            <Header2 />
            <FintechBanner />
            <Home2PartnerArea />
            <Home2FeatureSection />
            <Home2ServiceSection />
            <Home2TestimonialSection />
            <Home2FeatureSliderSection />
            <Home2BlogSection />
            <Home2FooterSection />
        </ >
    )
}

export default FintechPage
