"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Counter from '../common/Counter'

const Home1CaseStudy = () => {
    const ref4 = useRef(null);
    return (
        <div className="home1-case-study-section mb-80">
            <div className="container">
                <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12 d-flex align-items-lg-end justify-content-between gap-3 flex-wrap">
                        <div className="section-title">
                            <span>Success Stories</span>
                            <h2>Case Study</h2>
                            <p>We simplify complex challenges with a streamlined, four-step process.</p>
                        </div>
                        <Link href="/case-study" className="primary-btn1 transparent">
                            <span>View All
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span>View All
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="case-study-card magnetic-item">
                            <div className="case-study-img-wrap">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/home1/case-study-img1.jpg" alt="" />
                                </Link>
                                <div className="tag">
                                    <Link href="/case-study">Machine Learning</Link>
                                </div>
                            </div>
                            <div className="case-study-card-content">
                                <h3><Link href="/case-study/details">Revamping Brand Identity Success Story.</Link></h3>
                                <p>Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.</p>
                                <ul>
                                    <li>
                                        <span>Key Word</span>
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={400}
                                                speed={10}
                                                forwardedRef={ref4}
                                                as="h5"
                                                className="counter"
                                            />
                                            <span>+</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Work Period</span>
                                        <div className="number">
                                            <h5>05 Month</h5>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/case-study/details" className="primary-btn1 transparent">
                                    <span>Read More
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>Read More
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="case-study-card magnetic-item">
                            <div className="case-study-img-wrap">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/home1/case-study-img2.jpg" alt="" />
                                </Link>
                                <div className="tag">
                                    <Link href="/case-study">Cloud Solution</Link>
                                </div>
                            </div>
                            <div className="case-study-card-content">
                                <h3><Link href="/case-study/details">Cloud Infrastructure for Rapid Growth.</Link></h3>
                                <p>Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.</p>
                                <ul>
                                    <li>
                                        <span>Key Word</span>
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={500}
                                                speed={10}
                                                forwardedRef={ref4}
                                                as="h5"
                                                className="counter"
                                            />
                                            <span>+</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Work Period</span>
                                        <div className="number">
                                            <h5>03 Month</h5>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/case-study/details" className="primary-btn1 transparent">
                                    <span>Read More
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>Read More
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow animate fadeInRight" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="case-study-card magnetic-item">
                            <div className="case-study-img-wrap">
                                <Link href="/case-study/details" className="case-study-img">
                                    <img src="/assets/img/home1/case-study-img3.jpg" alt="" />
                                </Link>
                                <div className="tag">
                                    <Link href="/case-study">IoT Solution</Link>
                                </div>
                            </div>
                            <div className="case-study-card-content">
                                <h3><Link href="/case-study/details">Rovik's Transition to a Cloud-First Strategy.</Link></h3>
                                <p>Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.</p>
                                <ul>
                                    <li>
                                        <span>Key Word</span>
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={600}
                                                speed={8}
                                                forwardedRef={ref4}
                                                as="h5"
                                                className="counter"
                                            />
                                            <span>%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Work Period</span>
                                        <div className="number">
                                            <h5>06 Month</h5>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/case-study/details" className="primary-btn1 transparent">
                                    <span>Read More
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>Read More
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

    )
}

export default Home1CaseStudy
