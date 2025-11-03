"use client"
import AwardListSection from '@/components/AwardListSection'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import React, { useState } from 'react'

const AwardRecognitionsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const awards = [
        { title: 'Digital Innovation', platform: 'Digigo Platform', year: '2024' },
        { title: 'InnovateXcel Award', platform: 'Microsoft Platform', year: '2023' },
        { title: 'Digital Vanguard', platform: 'Adobe Platform', year: '2022' },
        { title: 'Mastermind', platform: 'Behance Platform', year: '2021' },
        { title: 'Digital Dynamo', platform: 'Linkedin Platform', year: '2020' },];
    return (
        <div>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Award &amp; <br /> Recognitions</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Award &amp; Recignitions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Award Page Banner Start */}
            <div className="award-page-banner mb-120">
                <div className="container">
                    <div className="counter-area">
                        <div className="row g-4 h-100 justify-content-end align-items-end">
                            <div className="col-lg-3 col-sm-5">
                                <div className="single-counter">
                                    <div className="number">
                                        <h2>05</h2>
                                    </div>
                                    <p>Award <br /> Wining-2025</p>
                                    <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-5">
                                <div className="single-counter two">
                                    <div className="number">
                                        <h2>98</h2>
                                        <span>%</span>
                                    </div>
                                    <p>Client <br /> Retention Rate</p>
                                    <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Award Page Banner End */}
            {/* Award List Section Start */}
            <AwardListSection />
            {/* Award List Section End */}
            <Home3Footer />
        </div>
    )
}

export default AwardRecognitionsPage
