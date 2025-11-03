"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Counter from '../common/Counter'

const Home4CaseStudySection = () => {
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    return (
        <div className="home4-case-study-section mb-130">
            <div className="container">
                <div className="row justify-content-lg-end mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-9 col-lg-10">
                        <div className="row g-4 justify-content-between align-items-end">
                            <div className="col-xl-5 col-lg-6">
                                <div className="section-title2">
                                    <h2><strong>Result in</strong> Previous Case Study.</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex justify-content-lg-end">
                                <div className="result-area">
                                    <span>80%</span>
                                    <p>Our Clients Double Revenue Generate in the First <strong>05 Months.</strong></p>
                                    <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-md-4 gy-5 mb-50">
                    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="case-study-card2">
                            <div className="row g-xxl-4 g-xl-3 g-lg-4 g-md-4 g-sm-3 g-4">
                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                    <Link href="/case-study/details" className="case-study-img">
                                        <img src="/assets/img/home4/case-study-img1.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-sm-6">
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
                                                            end={27}
                                                            speed={50}
                                                            forwardedRef={ref3}
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
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="case-study-card2">
                            <div className="row g-xxl-4 g-xl-3 g-lg-4 g-md-4 g-sm-3 g-4">
                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                    <Link href="/case-study/details" className="case-study-img">
                                        <img src="/assets/img/home4/case-study-img2.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                    <div className="case-study-content-wrap">
                                        <div className="case-study-content">
                                            <div className="case-study-logo">
                                                <img src="/assets/img/home4/case-study-logo2.png" alt="" className="light" />
                                                <img src="/assets/img/home4/case-study-logo2-light.png" alt="" className="dark" />
                                            </div>
                                            <h4><Link href="/case-study/details">Conversion Rate on the Digital Platform.</Link></h4>
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
                                                            forwardedRef={ref5}
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
                                                            end={24}
                                                            speed={50}
                                                            forwardedRef={ref6}
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link href="/case-study" className="details-btn">
                            View All Case
                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4CaseStudySection
