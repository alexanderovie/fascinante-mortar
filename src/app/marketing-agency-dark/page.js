"use client"
import Home4Banner from '@/components/banner/Home4Banner'
import Home4CaseStudySection from '@/components/case-study-section/Home4CaseStudySection'
import Home4ContactSection from '@/components/contact-section/Home4ContactSection'
import Home4FeatureSection from '@/components/feature-section/Home4FeatureSection'
import Home4Footer from '@/components/Footer/Home4Footer'
import Header from '@/components/header/Header'
import Home4ParnerSection from '@/components/partner-sections/Home4ParnerSection'
import Home4ProcessSection from '@/components/process-sections/Home4ProcessSection'
import Home4ServiceSection from '@/components/service-section/Home4ServiceSection'
import Home4TeamSection from '@/components/team-section/Home4TeamSection'
import Home4testimonialSection from '@/components/testimonial-section/Home4testimonialSection'
import { useEffect } from 'react'

const MaketingAgencyPage = () => {
  useEffect(() => {
    document.body.classList.add("dark");
  })
  return (
    <>
      <Header />
      <Home4Banner />
      <Home4ParnerSection />
      <Home4FeatureSection />
      <Home4ProcessSection />
      <Home4ServiceSection />
      <Home4testimonialSection />
      <Home4CaseStudySection />
      <Home4TeamSection />
      <Home4ContactSection />
      <Home4Footer />
    </>

  )
}

export default MaketingAgencyPage
