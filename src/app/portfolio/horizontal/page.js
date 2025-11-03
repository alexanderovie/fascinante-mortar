"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
    Mousewheel
} from "swiper";
import Header3 from "@/components/header/Header3";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination,Mousewheel]);

const HorizontalPortfolioPage = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            loop: true,
            effect: "fade",
            mousewheel: {
                enabled: true,
            },
            navigation: {
                nextEl: ".next-16",
                prevEl: ".prev-16",
            },
        };
    }, []);
    return (
        <>
            <Header3 />
            <div className="portfolio-slider-page" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg1.jpg")' }}>
                <Swiper {...settings} className="swiper pf-horizontal-slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="portfolio-slider-item">
                                <div className="portfolio-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg1.jpg")' }} />
                                <div className="portfolio-slider-content">
                                    <div className="title-area">
                                        <ul>
                                            <li><Link href="/portfolio/classic">Branding &amp; Graphics</Link></li>
                                            <li><Link href="/portfolio/classic">2024</Link></li>
                                        </ul>
                                        <h1><Link href="/portfolio/details">Smart Digital Strategies.</Link></h1>
                                    </div>
                                    <div className="social-area">
                                        <Link href="/portfolio/classic">Visit More Portfolio
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <ul className="social-list">
                                            <li><a href="https://dribbble.com/">Dribbble</a></li>
                                            <li><a href="https://www.behance.net/">Behance</a></li>
                                            <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                                            <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="portfolio-slider-item">
                                <div className="portfolio-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg2.jpg")' }} />
                                <div className="portfolio-slider-content">
                                    <div className="title-area">
                                        <ul>
                                            <li><Link href="/portfolio/classic">UI/UX Design</Link></li>
                                            <li><Link href="/portfolio/classic">2024</Link></li>
                                        </ul>
                                        <h1><Link href="/portfolio/details">Innovative Digital Creations</Link></h1>
                                    </div>
                                    <div className="social-area">
                                        <Link href="/portfolio/classic">Visit More Portfolio
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <ul className="social-list">
                                            <li><a href="https://dribbble.com/">Dribbble</a></li>
                                            <li><a href="https://www.behance.net/">Behance</a></li>
                                            <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                                            <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="portfolio-slider-item">
                                <div className="portfolio-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg3.jpg")' }} />
                                <div className="portfolio-slider-content">
                                    <div className="title-area">
                                        <ul>
                                            <li><Link href="/portfolio/classic">Creative Art</Link></li>
                                            <li><Link href="/portfolio/classic">2024</Link></li>
                                        </ul>
                                        <h1><Link href="/portfolio/details">Engaging User Experience</Link></h1>
                                    </div>
                                    <div className="social-area">
                                        <Link href="/portfolio/classic">Visit More Portfolio
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <ul className="social-list">
                                            <li><a href="https://dribbble.com/">Dribbble</a></li>
                                            <li><a href="https://www.behance.net/">Behance</a></li>
                                            <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                                            <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="portfolio-slider-item">
                                <div className="portfolio-slider-bg" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg4.jpg")' }} />
                                <div className="portfolio-slider-content">
                                    <div className="title-area">
                                        <ul>
                                            <li><Link href="/portfolio/classic">Development</Link></li>
                                            <li><Link href="/portfolio/classic">2024</Link></li>
                                        </ul>
                                        <h1><Link href="/portfolio/details">Scalable Web Designs</Link></h1>
                                    </div>
                                    <div className="social-area">
                                        <Link href="/portfolio/classic">Visit More Portfolio
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <ul className="social-list">
                                            <li><a href="https://dribbble.com/">Dribbble</a></li>
                                            <li><a href="https://www.behance.net/">Behance</a></li>
                                            <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                                            <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>


        </>
    )
}

export default HorizontalPortfolioPage
