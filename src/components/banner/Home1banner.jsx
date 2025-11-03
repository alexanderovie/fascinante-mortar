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
const Home1Banner = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            effect: 'fade',
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
        };
    }, []);
    return (
        <div className="home1-banner-section mb-130">
            <div className="row">
                <div className="col-lg-12">
                    <Swiper {...settings} className="swiper home1-banner-slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url(assets/img/home1/home1-banner-img1.jpg)' }} />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url(assets/img/home1/home1-banner-img2.jpg)' }} />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url(assets/img/home1/home1-banner-img3.jpg)' }} />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url(assets/img/home1/home1-banner-img4.jpg)' }} />
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className="banner-content">
                <h1>Building Your Dreams With Precision</h1>
                <Link href="/contact" className="primary-btn2 white-bg">
                    <span>
                        Start A Project
                        <svg viewBox="0 0 13 20">
                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                        </svg>
                    </span>
                </Link>
            </div>
            <div className="pagination-area">
                <div className="swiper-pagination1" />
            </div>
        </div>


    )
}

export default Home1Banner