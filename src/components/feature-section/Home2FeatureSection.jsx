"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Counter from '../common/Counter'

const Home2FeatureSection = () => {
    const ref3 = useRef(null);
    return (
        <div className="home2-feature-section mb-130">
            <div className="container">
                <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12 d-flex align-items-lg-end align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="section-title two">
                            <span>Outstanding Features</span>
                            <h2>Why Mortar?</h2>
                        </div>
                        <a href="#" className="primary-btn2 transparent">
                            <span>Feature List
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span>Feature List
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="feature-card2 magnetic-item">
                            <div className="feature-content">
                                <h3>Advanced Security</h3>
                                <p>End-to-end encryption for securing data during transactions. <span>2FA security alert.</span></p>
                            </div>
                            <div className="feature-img">
                                <img src="/assets/img/home2/feature-img1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="feature-card2 magnetic-item">
                            <div className="feature-content">
                                <h3>Digital Payments</h3>
                                <p>Instant transfers between users <span>without traditional bank</span> involvement.</p>
                            </div>
                            <div className="feature-img">
                                <img src="/assets/img/home2/feature-img2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="feature-card2 magnetic-item">
                            <div className="feature-content">
                                <h3>AI Data Analytics</h3>
                                <p><span>AI-driven analysis</span> of spending habits and financial health.</p>
                            </div>
                            <div className="feature-img">
                                <img src="/assets/img/home2/feature-img3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
                        <div className="feature-contact-banner">
                            <div className="banner-content">
                                <div className="number">
                                    <Counter
                                        start={0}
                                        end={90}
                                        speed={10}
                                        forwardedRef={ref3}
                                        as="h2"
                                        className="counter"
                                    />
                                    <span>%+</span>
                                </div>
                                <p>Happy Customer by Using Mortar.</p>
                                <Link href="/contact" className="primary-btn2">
                                    <span>Contact Us
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>Contact Us
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <div className="banner-img">
                                <img src="/assets/img/home2/feature-contact-banner-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home2FeatureSection
