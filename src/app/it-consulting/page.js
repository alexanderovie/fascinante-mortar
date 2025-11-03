"use client"
import React, { useEffect } from 'react'
import Home5AboutSection from '@/components/about/Home5AboutSection'
import Home5Banner from '@/components/banner/Home5Banner'
import Home5BlogSection from '@/components/blog-section/Home5BlogSection'
import Home5FeatureSection from '@/components/feature-section/Home5FeatureSection'
import Home5Footer from '@/components/Footer/Home5Footer'
import Header5 from '@/components/header/Header5'
import Home5PartnerSection from '@/components/partner-sections/Home5PartnerSection'
import Home5ProcessSection from '@/components/process-sections/Home5ProcessSection'
import Home5ServiceSection from '@/components/service-section/Home5ServiceSection'
import Home5TestimonialSection from '@/components/testimonial-section/Home5TestimonialSection'

const ItConsultingPageLight = () => {
    useEffect(() => {
        document.body.classList.add("it-consulting");
    })
    return (
        <>
            <Header5 />
            <Home5Banner />
            <Home5FeatureSection />
            <Home5ServiceSection />
            <Home5PartnerSection />
            <Home5AboutSection />
            <Home5ProcessSection />
            <Home5TestimonialSection />
            <Home5BlogSection />
            <Home5Footer />
        </>
    )
}

export default ItConsultingPageLight
