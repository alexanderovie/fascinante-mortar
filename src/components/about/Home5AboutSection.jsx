"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Counter from '../common/Counter'

const Home5AboutSection = () => {
    const ref3 = useRef(null);
    return (
        <>
            <div className="home5-about-section mb-130">
                <div className="video-area">
                    {/* <video width="320" height="240" autoPlay loop muted playsInline controls >
                        <source src="/assets/video/home4-contact-video2.mp4" type="video/mp4" />

                    </video> */}
                    <video autoPlay loop muted playsInline src="/assets/video/home4-contact-video2.mp4" />
                </div>
                <div className="about-wrapper">
                    <img src="/assets/img/home5/home5-about-section-vector1.svg" alt="" className="vector1" />
                    <div className="container">
                        <div className="row gy-md-4 gy-5">
                            <div className="col-xl-4 col-lg-5 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="section-title four white">
                                    <h2>Business-Driven IT Solutions</h2>
                                    <p>Aligning Technology with Your Business Goals for Maximum Impact.</p>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-4 col-lg-5 col-md-6 d-flex justify-content-md-center wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="benefit-area">
                                    <h5>Benefits of IT Strategy :</h5>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            <span>IT Project Planning &amp; Execution</span>
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            <span><strong>Agile &amp; Scrum</strong> Consulting</span>
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            <span>Budgeting &amp; Cost Control</span>
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            <span>Project <strong>Tracking &amp; Reporting</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="counter-and-btn-area">
                                    <div className="counter-area">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={27}
                                                speed={20}
                                                forwardedRef={ref3}
                                                as="h2"
                                                className="counter"
                                            />
                                            <span>+</span>
                                        </div>
                                        <span>Years of <br /> Experience.</span>
                                    </div>
                                    <Link className="primary-btn5" href="/contact">
                                        Schedule a Free Consultation
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home1-industries-section style-2 mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="home1-industries-top">
                                <div className="row justify-content-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="col-xxl-6 col-xl-8 col-lg-7">
                                        <div className="section-title four text-center">
                                            <span>Industries Cover Area</span>
                                            <h2>Impactful Area of Consulting</h2>
                                        </div>
                                    </div>
                                </div>
                                <ul className="industries-list wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Finance &amp; Banking <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img2.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img1.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Healthcare &amp; Life <sup>(03)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img4.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img3.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Retail &amp; E-commerce <sup>(05)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img6.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img5.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Education &amp; EdTech <sup>(08)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img8.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img7.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Government &amp; Public Sector <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img10.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img9.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Travel &amp; Hospitality <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img12.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img11.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Automotive <sup>(02)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img14.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img13.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home5AboutSection
