"use client"
import React, { useMemo, useRef, useState } from 'react'
import AwardListSection from '@/components/AwardListSection'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Home3PartnerSection from '@/components/partner-sections/Home3PartnerSection'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from '@/components/common/Counter'
import Link from 'next/link'
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const AboutPage = () => {
    const [isOpenimg, setOpenimg] = useState({
        openingState: false,
        openingIndex: 0,
    });
    const ref3 = useRef(null)
    const testimonialSettings = useMemo(() => {
        return {
            speed: 1500,
            spaceBetween: 30,
            loop: true,
            effect: 'fade', // Use fade effect
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".testimonial-slider-next",
                prevEl: ".testimonial-slider-prev",
            },
        };
    }, []);
    const bannerSettings = useMemo(() => {
        return {
            spaceBetween: 24,
            autoplay: {
                delay: 2000, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 6,
                },
            },
        };
    }, []);
    const teamSettings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".about-page-team-slider-next",
                prevEl: ".about-page-team-slider-prev",
            },

            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        };
    }, []);
    return (
        <>
            <Header3 />
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="banner-content">
                                <h1>To Make Unique <br /> Depth, Bold Implact</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Company
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page-banner-section mb-130">
                <div className="slider-area mb-70">
                    <Swiper {...bannerSettings} className="swiper about-page-banner-slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img">
                                    <img src="assets/img/innerpages/about-page-banner-img1.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="vector">
                                    <img src="assets/img/innerpages/about-page-banner-vector1.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img two">
                                    <img src="assets/img/innerpages/about-page-banner-img2.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img three">
                                    <img src="assets/img/innerpages/about-page-banner-img3.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="vector">
                                    <img src="assets/img/innerpages/about-page-banner-vector2.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img two">
                                    <img src="assets/img/innerpages/about-page-banner-img4.png" alt="" />
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
                <div className="banner-content-wrap">
                    <div className="container">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <div className="title-area">
                                    <h2>To Make Unique Depth, Bold Implact.</h2>
                                    <span>“ We believe in bespoke strategies, designed specifically for your business needs.”</span>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner-content">
                                    <p>Our diverse background spans <span>Design</span>, <span>Marketing</span>, and <span>Technology</span>, allowing us to offer full-spectrum digital services. From startups to established enterprises, we tailor solutions to fit your unique needs, <span>no matter your industry or size.</span></p>
                                    <p>We work closely with our clients to understand their goals, challenges, and opportunities, ensuring that every solution is custom-fit to deliver measurable results. By combining cutting-edge technology with creative innovation, we help businesses not only keep up but get ahead.</p>
                                    <Link href="/contact" className="primary-btn3 transparent three btn-hover">
                                        Start The Journey
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
            <div className="about-page-counter-section">
                <div className="container">
                    <div className="counter-wrapper">
                        <div className="row gy-md-5 gy-4">
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-start justify-content-sm-center divider">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={10}
                                        speed={100}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    /></h2>
                                    <p>World-Wide Branches</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-center divider">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={50}
                                        speed={20}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    />+</h2>
                                    <p>Professional Expert</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-center divider">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={145}
                                        speed={10}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    />+</h2>
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={5}
                                        speed={100}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    />+</h2>
                                    <p>Year of Experienece</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page-feature-section mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title2">
                                <div className="shape-and-title-area">
                                    <svg width={88} height={64} viewBox="0 0 88 64" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M88 0V64H0L88 0Z" />
                                        <path d="M60 8L10 44V8H60Z" />
                                    </svg>
                                    <h2>Make A Innovative Solutions.</h2>
                                </div>
                                <p>Smart solution to build a outstanding performance easily.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-50">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="single-feature">
                                <h4>Expertise &amp; <br />Specialization</h4>
                                <ul>
                                    <li>+ Social Media Marketing</li>
                                    <li>+ Email Marketing</li>
                                    <li>+ Content Marketing</li>
                                </ul>
                                <p>
                                    <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                                            <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                                        </g>
                                    </svg>
                                    Agencies can ensure consistent and regular marketing efforts.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="single-feature">
                                <h4>Cost <br />Effectiveness</h4>
                                <ul>
                                    <li>+ Logo Design</li>
                                    <li>+ Rebranding Services</li>
                                    <li>+ Visual Branding</li>
                                </ul>
                                <p>
                                    <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                                            <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                                        </g>
                                    </svg>
                                    Agencies can ensure consistent and regular marketing efforts.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="single-feature">
                                <h4>Consistency &amp; <br />Reliability</h4>
                                <ul>
                                    <li>+ Blog Writing</li>
                                    <li>+ Copywriting &amp; Copyediting</li>
                                    <li>+ Video Production</li>
                                </ul>
                                <p>
                                    <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                                            <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                                        </g>
                                    </svg>
                                    Agencies can ensure consistent and regular marketing efforts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-8 col-lg-10">
                            <div className="contact-btn-area two">
                                <h6>To Make Sure to Best Service Provide Our Clients.</h6>
                                <Link href="/contact" className="primary-btn3 two btn-hover">
                                    Start The Journey
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
            <div className="about-page-team-section mb-130">
                <div className="container">
                    <div className="row align-items-lg-end mb-70">
                        <div className="col-lg-4">
                            <div className="result-area">
                                <span>100%</span>
                                <p>Measurable Results &amp; ROI.</p>
                                <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title three">
                                <h2>Our Dynamic Team</h2>
                                <p>Smart solution to build a outstanding performance easily.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-slider-area mb-50">
                        <div className="row">
                            <div className="col-lg-12">
                                <Swiper {...teamSettings} className="swiper about-page-team-slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card two">
                                                <div className="team-img">
                                                    <Link href="/team/details"><img src="/assets/img/home4/team-img1.png" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h5><Link href="/team/details">Mr. Jorche Milton</Link></h5>
                                                    <span>CEO, Founder</span>
                                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                    <ul className="social-list">
                                                        <li>
                                                            <a href="https://www.linkedin.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-linkedin" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>LinkedIn</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.facebook.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-facebook" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Facebook</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card two">
                                                <div className="team-img">
                                                    <Link href="/team/details"><img src="/assets/img/home4/team-img2.png" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h5><Link href="/team/details">Robert Jhonson</Link></h5>
                                                    <span>CTO, Co-founder</span>
                                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                    <ul className="social-list">
                                                        <li>
                                                            <a href="https://www.linkedin.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-linkedin" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>LinkedIn</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.facebook.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-facebook" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Facebook</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card two">
                                                <div className="team-img">
                                                    <Link href="/team/details"><img src="/assets/img/home4/team-img3.png" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h5><Link href="/team/details">Daniel Ryan</Link></h5>
                                                    <span>Chief Operating Officer</span>
                                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                    <ul className="social-list">
                                                        <li>
                                                            <a href="https://www.linkedin.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-linkedin" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>LinkedIn</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.facebook.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-facebook" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Facebook</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card two">
                                                <div className="team-img">
                                                    <Link href="/team/details"><img src="/assets/img/home4/team-img5.png" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h5><Link href="/team/details">Alexander Benjamin</Link></h5>
                                                    <span>Director of Engineering</span>
                                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                    <ul className="social-list">
                                                        <li>
                                                            <a href="https://www.linkedin.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-linkedin" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>LinkedIn</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.facebook.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-facebook" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Facebook</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card two">
                                                <div className="team-img">
                                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img1.png" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h5><Link href="/team/details">Benjamin Lucas</Link></h5>
                                                    <span>Senior Sotware Engineer</span>
                                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                    <ul className="social-list">
                                                        <li>
                                                            <a href="https://www.linkedin.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-linkedin" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>LinkedIn</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.facebook.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-facebook" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Facebook</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card two">
                                                <div className="team-img">
                                                    <Link href="/team/details"><img src="/assets/img/innerpages/team-img2.png" alt="" /></Link>
                                                </div>
                                                <div className="team-content">
                                                    <h5><Link href="/team/details">Samuel Henry</Link></h5>
                                                    <span>Senior Sotware Engineer</span>
                                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                    <ul className="social-list">
                                                        <li>
                                                            <a href="https://www.linkedin.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-linkedin" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>LinkedIn</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.facebook.com/" className="social-area">
                                                                <div className="icon">
                                                                    <i className="bx bxl-facebook" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Facebook</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="slider-btn-grp three">
                            <div className="slider-btn about-page-team-slider-prev">
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className="slider-btn about-page-team-slider-next">
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <Link href="/career" className="primary-btn3 transparent three btn-hover">
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
            <div className="about-page-gallery-section mb-130">
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-lg-12">
                            <div className="section-title-wrap">
                                <img src="/assets/img/innerpages/about-gallery-title-img.gif" alt="" />
                                <div className="section-title three white">
                                    <h2>Collective of
                                        Creative Thinkers.</h2>
                                    <p>We are a collective of creative thinkers, tech enthusiasts, and strategic innovators. Our passion lies in helping businesses thrive in the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-img-wrap">
                        <div className="row g-2">
                            <div className="col-lg-4 col-md-6">
                                <div className="row g-2">
                                    <div className="col-md-12 d-md-flex justify-content-md-end">
                                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 0 })}>
                                            <img src="/assets/img/innerpages/about-page-gallery-img1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-12 d-md-flex justify-content-md-end">
                                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 1 })}>
                                            <img src="/assets/img/innerpages/about-page-gallery-img2.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-12 d-lg-flex d-none align-items-center justify-content-md-end gap-5">
                                        <div className="vector">
                                            <svg width={88} height={64} viewBox="0 0 88 64" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M88 0.00195312V64.002H0L88 0.00195312Z" />
                                                <path d="M60 8.00195L10 44.002V8.00195H60Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-lg-none d-md-flex justify-content-md-end">
                                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 2 })}>
                                            <img src="/assets/img/innerpages/about-page-gallery-img6.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="row g-2">
                                    <div className="col-md-12 d-md-flex justify-content-md-end">
                                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 3 })}>
                                            <img src="/assets/img/innerpages/about-page-gallery-img3.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-12 d-md-flex justify-content-md-end">
                                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 4 })}>
                                            <img src="/assets/img/innerpages/about-page-gallery-img4.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="row g-2">
                                    <div className="col-md-12 d-lg-flex d-none align-items-center gap-5">
                                        <div className="vector two">
                                            <svg width={88} height={88} viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M0 0.00195312L88 88.0019H0V0.00195312Z" />
                                                    <circle cx="54.12" cy="17.4553" r="17.4533" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 5 })}>
                                            <img src="/assets/img/innerpages/about-page-gallery-img5.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-12 d-lg-block d-none">
                                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 6 })}>
                                            <img src="/assets/img/innerpages/about-page-gallery-img6.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Lightbox
                    className="img-fluid"
                    open={isOpenimg.openingState}
                    plugins={[Fullscreen]}
                    index={isOpenimg.openingIndex}
                    close={() => setOpenimg(false)}
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                    slides={[
                        { src: "/assets/img/innerpages/about-page-gallery-img1-big.jpg" },
                        { src: "/assets/img/innerpages/about-page-gallery-img2-big.jpg" },
                        { src: "/assets/img/innerpages/about-page-gallery-img6-big.jpg" },
                        { src: "/assets/img/innerpages/about-page-gallery-img3-big.jpg" },
                        { src: "/assets/img/innerpages/about-page-gallery-img4-big.jpg" },
                        { src: "/assets/img/innerpages/about-page-gallery-img5-big.jpg" },
                        { src: "/assets/img/innerpages/about-page-gallery-img6-big.jpg" },

                    ]}
                />
            </div>
            <AwardListSection />
            <Home3PartnerSection />
            <div className="about-page-testimonial-section">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-5">
                            <div className="section-title three">
                                <h2>They Loves Us</h2>
                                <p>We’re the greatest part on the digital platform &amp; to achieve many awards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="testimonial-slider-area">
                                    <Swiper {...testimonialSettings} className="swiper home1-testimonial-slider">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonial-card two">
                                                    <div className="company-logo">
                                                        <img src="/assets/img/home1/testimonial-company-logo1.png" alt="" className="light" />
                                                        <img src="/assets/img/home1/testimonial-company-logo1-white.png" alt="" className="dark" />
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>Outstanding Apps! They are very helpful &amp; mindblowing to get services. Providing comprehensive care and creativity for customer satisfaction.</p>
                                                    </div>
                                                    <div className="author-area">
                                                        <div className="author-img">
                                                            <img src="/assets/img/home1/testimonial-author-img1.png" alt="" />
                                                        </div>
                                                        <div className="author-content">
                                                            <h5>Robertson Hilton</h5>
                                                            <span>Project Manager (HR)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonial-card two">
                                                    <div className="company-logo">
                                                        <img src="/assets/img/home1/testimonial-company-logo2.png" alt="" className="light" />
                                                        <img src="/assets/img/home1/testimonial-company-logo2-white.png" alt="" className="dark" />
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>Excellent Work! Evaluate the effectiveness of the team’s communication and collaboration throughout the project. I prefer that.</p>
                                                    </div>
                                                    <div className="author-area">
                                                        <div className="author-img">
                                                            <img src="/assets/img/home1/testimonial-author-img2.png" alt="" />
                                                        </div>
                                                        <div className="author-content">
                                                            <h5>Robert Baruni</h5>
                                                            <span>QA Engineer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonial-card two">
                                                    <div className="company-logo">
                                                        <img src="/assets/img/home1/testimonial-company-logo3.png" alt="" className="light" />
                                                        <img src="/assets/img/home1/testimonial-company-logo3-white.png" alt="" className="dark" />
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p>Fantastic Apps! They provide amazing services and are very helpful. delivering all-encompassing care and innovation to ensure client happiness.</p>
                                                    </div>
                                                    <div className="author-area">
                                                        <div className="author-img">
                                                            <img src="/assets/img/home1/testimonial-author-img3.png" alt="" />
                                                        </div>
                                                        <div className="author-content">
                                                            <h5>Hanry Macle</h5>
                                                            <span>Support Engineer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
                                    <div className="slider-btn-grp">
                                        <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-prev">
                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M10.9999 13.0009C9.99994 10.5009 4.99994 8.00092 1.99994 7.00092C4.99994 6.00092 9.49994 4.50092 10.9999 1.00092" strokeWidth="1.5" strokeLinecap="round" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-next">
                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M3 13.0009C4 10.5009 9 8.00092 12 7.00092C9 6.00092 4.5 4.50092 3 1.00092" strokeWidth="1.5" strokeLinecap="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="rating-list">
                                    <li>
                                        <a href="#" className="single-rating">
                                            <div className="review">
                                                <span>REVIEWED</span>
                                                <svg width={74} height={21} viewBox="0 0 74 21" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M54.5739 16.1797C55.9137 16.1797 56.9998 15.0923 56.9998 13.751C56.9998 12.4096 55.9137 11.3223 54.5739 11.3223C53.2341 11.3223 52.148 12.4096 52.148 13.751C52.148 15.0923 53.2341 16.1797 54.5739 16.1797Z" fill="#E62415" />
                                                        <path d="M19.2615 0H22.4718V20.7261H19.2615V0ZM34.1637 14.3348C34.1637 17.5487 31.5371 17.8043 30.7345 17.8043C28.7281 17.8043 28.4363 15.9235 28.4363 14.7913V6.77478H25.2078V14.773C25.1896 16.7635 25.755 18.407 26.8494 19.5026C27.8433 20.3896 29.1096 20.911 30.4393 20.9807C31.7689 21.0504 33.0826 20.6643 34.1637 19.8861V20.7261H37.3922V6.77478H34.1637V14.3348ZM44.3599 2.08174H41.1314V6.77478H38.8879V9.82435H41.1314V20.7261H44.3599V9.82435H47.0047V6.77478H44.3599V2.08174ZM57.4563 16.7635C56.7267 17.4209 55.7599 17.7861 54.702 17.7861C54.1646 17.8013 53.6297 17.7063 53.1303 17.5068C52.6309 17.3073 52.1776 17.0076 51.7983 16.6261C51.419 16.2446 51.1216 15.7895 50.9246 15.2886C50.7276 14.7878 50.6351 14.2519 50.6527 13.7139C50.6527 11.3583 52.3126 9.71478 54.702 9.71478C55.7417 9.71478 56.7267 10.0617 57.4745 10.7191L57.9852 11.1574L60.247 8.89304L59.6816 8.38174C58.3119 7.15868 56.5373 6.4884 54.702 6.50087C50.5068 6.50087 47.4607 9.53217 47.4607 13.6957C47.4384 14.6555 47.6102 15.6099 47.9657 16.5016C48.3213 17.3933 48.8533 18.2038 49.5297 18.8843C50.2061 19.5649 51.013 20.1016 51.9018 20.462C52.7907 20.8224 53.7432 20.9992 54.702 20.9817C56.6172 20.9817 58.4047 20.3061 59.718 19.0826L60.2652 18.5713L57.967 16.307L57.4563 16.7635ZM72.3584 7.99826C71.3645 7.11125 70.0982 6.58989 68.7686 6.52017C67.4389 6.45046 66.1252 6.83656 65.0441 7.61478V0H61.8156V20.7261H65.0441V13.1843C65.0441 9.97043 67.6707 9.71478 68.4733 9.71478C70.4797 9.71478 70.7715 11.5957 70.7715 12.7278V20.7443H74V12.7278C74.0974 10.9962 73.5074 9.29627 72.3584 7.99826ZM14.5009 15.7591C13.8728 16.4051 13.121 16.9175 12.2904 17.2658C11.4599 17.6141 10.5677 17.7911 9.66724 17.7861C5.92803 17.7861 3.21025 14.8461 3.21025 10.8104C3.21025 6.75652 5.92803 3.81652 9.66724 3.81652C11.473 3.81652 13.1876 4.5287 14.4826 5.82522L14.9933 6.33652L17.2369 4.09043L16.7444 3.57913C15.8189 2.63675 14.7142 1.88948 13.4956 1.38141C12.277 0.873327 10.9691 0.61473 9.649 0.62087C4.15874 0.62087 0 5.00348 0 10.8287C0 16.6174 4.15874 21 9.649 21C12.3668 21 14.8839 19.9409 16.7444 18.0235L17.2369 17.5122L15.0116 15.2296L14.5009 15.7591Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="rating">
                                                <ul className="star">
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-half" /></li>
                                                </ul>
                                                <span>50 REVIEWS</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="single-rating two">
                                            <div className="logo">
                                                <img src="/assets/img/home1/icon/google-logo.svg" alt="" />
                                            </div>
                                            <div className="rating">
                                                <ul className="star">
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-half" /></li>
                                                </ul>
                                                <span>GOOGLE REVIEW <strong>(4.5)</strong></span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="img-list">
                            <li className="single-img">
                                <img src="/assets/img/innerpages/about-page-testmonial-img1.png" alt="" />
                            </li>
                            <li className="single-img">
                                <img src="/assets/img/innerpages/about-page-testmonial-img2.png" alt="" />
                            </li>
                            <li className="single-img">
                                <img src="/assets/img/innerpages/about-page-testmonial-img3.png" alt="" />
                            </li>
                            <li className="single-img">
                                <img src="/assets/img/innerpages/about-page-testmonial-img4.png" alt="" />
                            </li>
                            <li className="single-img">
                                <img src="/assets/img/innerpages/about-page-testmonial-img5.png" alt="" />
                            </li>
                            <li className="single-img">
                                <img src="/assets/img/innerpages/about-page-testmonial-img6.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Home3Footer />
        </>
    )
}

export default AboutPage
