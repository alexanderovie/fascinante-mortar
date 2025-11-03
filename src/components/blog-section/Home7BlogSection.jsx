"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home7BlogSection = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 60,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".blog-slider-next",
                prevEl: ".blog-slider-prev",
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                1400: {
                    slidesPerView: 2,
                },
            },
        };
    }, []);
    return (
        <div className="home7-blog-section mb-130">
            <div className="container">
                <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="section-title3">
                            <h2>Latest Article.</h2>
                            <p>We provides a wide range of services aimed at helping <strong>Businesses &amp; Organizations.</strong></p>
                        </div>
                    </div>
                </div>
                <div className="blog-slider-area">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home3-blog-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="blog-card2">
                                            <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                                <div className="col-lg-6 col-md-5 col-sm-6">
                                                    <Link href="/news-insight-grid/details" className="blog-img">
                                                        <img src="/assets/img/home3/blog-img1.jpg" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-6">
                                                    <div className="blog-content-wrap">
                                                        <ul className="blog-meta">
                                                            <li><Link href="/news-insight-grid">Creative Design</Link></li>
                                                            <li>
                                                                <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                                </svg>
                                                            </li>
                                                            <li className="blog-date"><Link href="/news-insight-grid">02 April, 2023</Link></li>
                                                        </ul>
                                                        <h3><Link href="/news-insight-grid/details">Celebrates Major Milestone in Digital Services.</Link></h3>
                                                        <Link href="/news-insight-grid/details" className="primary-btn3 three transparent btn-hover">
                                                            Read More
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                            <span />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="blog-card2">
                                            <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                                <div className="col-lg-6 col-md-5 col-sm-6">
                                                    <Link href="/news-insight-grid/details" className="blog-img">
                                                        <img src="/assets/img/home3/blog-img2.jpg" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-6">
                                                    <div className="blog-content-wrap">
                                                        <ul className="blog-meta">
                                                            <li><Link href="/news-insight-grid">Design Trends</Link></li>
                                                            <li>
                                                                <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                                </svg>
                                                            </li>
                                                            <li className="blog-date"><Link href="/news-insight-grid">05 April, 2023</Link></li>
                                                        </ul>
                                                        <h3><Link href="/news-insight-grid/details">Powerful Impact in Digital Marketplace in One Era.</Link></h3>
                                                        <Link href="/news-insight-grid/details" className="primary-btn3 three transparent btn-hover">
                                                            Read More
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                            <span />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="blog-card2">
                                            <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                                <div className="col-lg-6 col-md-5 col-sm-6">
                                                    <Link href="/news-insight-grid/details" className="blog-img">
                                                        <img src="/assets/img/home3/blog-img3.jpg" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-6">
                                                    <div className="blog-content-wrap">
                                                        <ul className="blog-meta">
                                                            <li><Link href="/news-insight-grid">Brutalism</Link></li>
                                                            <li>
                                                                <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                                </svg>
                                                            </li>
                                                            <li className="blog-date"><Link href="/news-insight-grid">08 September, 2024</Link></li>
                                                        </ul>
                                                        <h3><Link href="/news-insight-grid/details">Essential Social Media Strategies for-2024.</Link></h3>
                                                        <Link href="/news-insight-grid/details" className="primary-btn3 three transparent btn-hover">
                                                            Read More
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                            <span />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="blog-card2">
                                            <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                                <div className="col-lg-6 col-md-5 col-sm-6">
                                                    <Link href="/news-insight-grid/details" className="blog-img">
                                                        <img src="/assets/img/home3/blog-img4.jpg" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-6">
                                                    <div className="blog-content-wrap">
                                                        <ul className="blog-meta">
                                                            <li><Link href="/news-insight-grid">Web Design</Link></li>
                                                            <li>
                                                                <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                                </svg>
                                                            </li>
                                                            <li className="blog-date"><Link href="/news-insight-grid">08 November, 2024</Link></li>
                                                        </ul>
                                                        <h3><Link href="/news-insight-grid/details">The Power of Influencer Marketing Insights and Tips.</Link></h3>
                                                        <Link href="/news-insight-grid/details" className="primary-btn3 three transparent btn-hover">
                                                            Read More
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                            <span />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="slider-btn-grp three">
                        <div className="slider-btn blog-slider-prev" style={{ cursor: "pointer" }}>
                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                </g>
                            </svg>
                        </div>
                        <div className="slider-btn blog-slider-next" style={{ cursor: "pointer" }}>
                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home7BlogSection
