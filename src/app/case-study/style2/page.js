"use client"
import Counter from '@/components/common/Counter'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useRef } from 'react'

const CaseStudyPage = () => {
    const ref4 = useRef(null);
    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="banner-content">
                                <h1>Latest <br />Case Studies</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Case Studies
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Case Study Page Start */}
            <div className="case-study-page mb-130">
                <div className="container">
                    <div className="row gy-5 justify-content-between mb-70">
                        <div className="col-xl-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="case-study-card2 three magnetic-item">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/innerpages/case-study-img1.jpg" alt="" />
                                </Link>
                                <div className="case-study-content-wrap">
                                    <div className="case-study-content">
                                        <div className="case-study-logo">
                                            <img src="/assets/img/home4/case-study-logo1.png" alt="" className="light" />
                                            <img src="/assets/img/home4/case-study-logo1-light.png" alt="" className="dark" />
                                        </div>
                                        <h4><Link href="/case-study/details">Revamping Brand Identity Success Story.</Link></h4>
                                        <ul>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Organic Traffic
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={500}
                                                        speed={10}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Online Revenue
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={10}
                                                        speed={50}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>M+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="deatails-btn">
                                        <Link href="/case-study/details" className="primary-btn4 transparent">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Read Case Study</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="case-study-card2 three magnetic-item">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/innerpages/case-study-img2.jpg" alt="" />
                                </Link>
                                <div className="case-study-content-wrap">
                                    <div className="case-study-content">
                                        <div className="case-study-logo">
                                            <img src="/assets/img/home4/case-study-logo2.png" alt="" className="light" />
                                            <img src="/assets/img/home4/case-study-logo2-light.png" alt="" className="dark" />
                                        </div>
                                        <h4><Link href="/case-study/details">Crafting a Unique Visual Identity for DEF Tech.</Link></h4>
                                        <ul>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Organic Traffic
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={600}
                                                        speed={10}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Online Revenue
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={9}
                                                        speed={50}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>M+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="deatails-btn">
                                        <Link href="/case-study/details" className="primary-btn4 transparent">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Read Case Study</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="case-study-card2 three magnetic-item">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/innerpages/case-study-img3.jpg" alt="" />
                                </Link>
                                <div className="case-study-content-wrap">
                                    <div className="case-study-content">
                                        <div className="case-study-logo">
                                            <img src="/assets/img/innerpages/case-study-logo1.png" alt="" className="light" />
                                            <img src="/assets/img/innerpages/case-study-logo1-light.png" alt="" className="dark" />
                                        </div>
                                        <h4><Link href="/case-study/details">Success case on upgrading brand identity.</Link></h4>
                                        <ul>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Organic Traffic
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={400}
                                                        speed={10}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Online Revenue
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={8}
                                                        speed={50}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>M+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="deatails-btn">
                                        <Link href="/case-study/details" className="primary-btn4 transparent">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Read Case Study</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="case-study-card2 three magnetic-item">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/innerpages/case-study-img4.jpg" alt="" />
                                </Link>
                                <div className="case-study-content-wrap">
                                    <div className="case-study-content">
                                        <div className="case-study-logo">
                                            <img src="/assets/img/innerpages/case-study-logo2.png" alt="" className="light" />
                                            <img src="/assets/img/innerpages/case-study-logo2-light.png" alt="" className="dark" />
                                        </div>
                                        <h4><Link href="/case-study/details">Boosting Conversions with a Responsive Website.</Link></h4>
                                        <ul>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Organic Traffic
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={700}
                                                        speed={10}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Online Revenue
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={12}
                                                        speed={50}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>M+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="deatails-btn">
                                        <Link href="/case-study/details" className="primary-btn4 transparent">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Read Case Study</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="case-study-card2 three magnetic-item">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/innerpages/case-study-img5.jpg" alt="" />
                                </Link>
                                <div className="case-study-content-wrap">
                                    <div className="case-study-content">
                                        <div className="case-study-logo">
                                            <img src="/assets/img/innerpages/case-study-logo3.png" alt="" className="light" />
                                            <img src="/assets/img/innerpages/case-study-logo3-light.png" alt="" className="dark" />
                                        </div>
                                        <h4><Link href="/case-study/details">Crafting a Seamless Digital Presence for DEF Tech.</Link></h4>
                                        <ul>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Organic Traffic
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={800}
                                                        speed={10}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Online Revenue
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={13}
                                                        speed={50}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>M+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="deatails-btn">
                                        <Link href="/case-study/details" className="primary-btn4 transparent">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Read Case Study</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="case-study-card2 three magnetic-item">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/innerpages/case-study-img6.jpg" alt="" />
                                </Link>
                                <div className="case-study-content-wrap">
                                    <div className="case-study-content">
                                        <div className="case-study-logo">
                                            <img src="/assets/img/home4/case-study-logo1.png" alt="" className="light" />
                                            <img src="/assets/img/home4/case-study-logo1-light.png" alt="" className="dark" />
                                        </div>
                                        <h4><Link href="/case-study/details">Increasing Lead Generation Through Campaigns.</Link></h4>
                                        <ul>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Organic Traffic
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={600}
                                                        speed={10}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Online Revenue
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={7}
                                                        speed={50}
                                                        forwardedRef={ref4}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>M+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="deatails-btn">
                                        <Link href="/case-study/details" className="primary-btn4 transparent">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Read Case Study</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="paginations-button">
                            <a href="#">
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                                Prev
                            </a>
                        </div>
                        <ul className="paginations">
                            <li className="page-item active">
                                <a href="#">01</a>
                            </li>
                            <li className="page-item">
                                <a href="#">02</a>
                            </li>
                            <li className="page-item">
                                <a href="#">03</a>
                            </li>
                            <li className="page-item">
                                <a href="#">04</a>
                            </li>
                        </ul>
                        <div className="paginations-button">
                            <a href="#">
                                Next
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Case Study Page End */}
            <Home3Footer />
        </>
    )
}

export default CaseStudyPage
