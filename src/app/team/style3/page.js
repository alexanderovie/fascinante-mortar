"use client"
import Counter from '@/components/common/Counter'
import GallerySection from '@/components/common/GallerySection'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useRef } from 'react'

const TeamPage = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    return (
        <div>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Dynamic Team Members</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Team-03
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Team Page Start */}
            <div className="team-page-content-banner style-3 mb-130">
                <div className="container">
                    <div className="banner-wrapper">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-xl-3 col-lg-4">
                                <h2>Team Philosophy.</h2>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="banner-content">
                                    <span>“ We believe in bespoke strategies, designed specifically for your business needs.”</span>
                                    <p>We are a close-knit team of digital enthusiasts with a passion for helping brands succeed. Every team member plays a unique role in bringing fresh ideas, innovative strategies, and exceptional results to our clients."</p>
                                    <Link href="/career" className="primary-btn3 two three btn-hover">
                                        Join Our Team
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={464} height={232} viewBox="0 0 464 232" xmlns="http://www.w3.org/2000/svg">
                            <path d="M116 0.5C179.789 0.5 231.5 52.2113 231.5 116C231.5 179.789 179.789 231.5 116 231.5C52.2113 231.5 0.5 179.789 0.5 116C0.5 52.2113 52.2113 0.5 116 0.5ZM232.5 231.499V116V0.501059C296.059 0.770439 347.5 52.3781 347.5 116C347.5 179.622 296.059 231.23 232.5 231.499ZM348.5 0.501059C412.059 0.770439 463.5 52.3781 463.5 116C463.5 179.622 412.059 231.23 348.5 231.499V116V0.501059Z" />
                        </svg>
                    </div>
                    <div className="team-page-counter-area">
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={50}
                                            speed={50}
                                            forwardedRef={ref1}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <span>Professional <br />Expert</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter two">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={134}
                                            speed={10}
                                            forwardedRef={ref2}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <span>Completed <br />Projects</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter three">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={98}
                                            speed={10}
                                            forwardedRef={ref3}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>%</span>
                                    </div>
                                    <span>Client <br />Retention Rate</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter four">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={6}
                                            speed={50}
                                            forwardedRef={ref4}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <span>Client <br />Retention Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team3-card-section mb-130">
                <div className="container">
                    <div className="row justify-content-end mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-10 d-flex align-items-lg-end justify-content-between flex-wrap gap-3">
                            <div className="section-title three">
                                <h2>We’ve <br /> Dynamic Team</h2>
                                <p>To provide most expensive work for our clients in the world-wide.</p>
                            </div>
                            <Link href="/career" className="primary-btn3 three btn-hover">
                                Join Our Team
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span />
                            </Link>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/home4/team-img5.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Mr. Jorche Milton</Link></h5>
                                    <span>CEO, Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/home4/team-img4.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Mrs. Emily Sophia</Link></h5>
                                    <span>Sr. Product Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img7.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Ava Sophia</Link></h5>
                                    <span>Head of Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img2.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Benjamin Lucas</Link></h5>
                                    <span>Sr. Software Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img8.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Robert Jhonson</Link></h5>
                                    <span>Sr. WordPress Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img11.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Alexander Benjamin</Link></h5>
                                    <span>Sr. Software Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img5.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Lucy Zoe</Link></h5>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-card2 two magnetic-item">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img9.png" alt="" /></Link>
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Oliver Liam</Link></h5>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partner-area three four mb-130">
                <div className="container">
                    <div className="partner-title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h6>Our Globally <span>20K+</span> Clients.</h6>
                        <h6>Our Happy Cleints <span>90%+</span></h6>
                    </div>
                    <div className="partner-wrap">
                        <div className="marquee light">
                            <div className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="marquee dark">
                            <div className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-light-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-06.png" alt="" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-light-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-06.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GallerySection />

            <div className="team-join-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="team-join-wrap">
                                <div className="section-title three text-center wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h2>Join Our Team!</h2>
                                    <p>We’re always on the lookout for passionate, creative, and talented individuals to join our dynamic team.</p>
                                </div>
                                <svg width={6} height={170} viewBox="0 0 6 170" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM3 170L5.88675 165H0.113249L3 170ZM2.5 4.5V165.5H3.5V4.5H2.5Z" />
                                    <path d="M3 90V115" stroke="url(#paint0_linear_6965_68)" strokeWidth={2} strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_6965_68" x1={3} y1={110} x2={3} y2="90.5" gradientUnits="userSpaceOnUse">
                                            <stop offset={0} stopColor="#5956E9" />
                                            <stop offset={1} stopColor="#EEEEEE" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="btn-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <Link href="/career" className="primary-btn3 three btn-hover">
                                        Join Our Team
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Page End */}
            <Home3Footer />
        </div>
    )
}

export default TeamPage
