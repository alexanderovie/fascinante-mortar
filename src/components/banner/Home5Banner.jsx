"use client";
import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";
import Counter from "../common/Counter";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home5Banner = () => {
    const ref3 = useRef(null);
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
            loop: true,
            effect: 'fade',             // Use the fade effect
            fadeEffect: {
                crossFade: true           // Enable cross-fade transition
            },
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
        <div className="home5-banner-section mb-130">
            <div className="container-fluid p-0">
                <div className="row g-0 justify-content-between">
                    <div className="col-lg-7">
                        <div className="banner-content-wrap">
                            <div className="banner-content">
                                <div className="sub-title">
                                    <span>Drive Innovation</span>
                                    <svg width={20} height={13} viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.20537 11.1647C8.37928 11.6946 7.40404 12 6.36364 12C3.42126 12 1 9.55766 1 6.5C1 3.44234 3.42126 1 6.36364 1C7.40404 1 8.37928 1.30536 9.20537 1.83531C8.01385 3.01658 7.27344 4.66997 7.27344 6.5C7.27344 8.33003 8.01385 9.98342 9.20537 11.1647ZM10.0004 11.8347C8.96953 12.5692 7.71584 13 6.36364 13C2.8491 13 0 10.0898 0 6.5C0 2.91015 2.8491 0 6.36364 0C7.71584 0 8.96953 0.430784 10.0004 1.16532C11.0312 0.430784 12.2849 0 13.6371 0C17.1516 0 20.0007 2.91015 20.0007 6.5C20.0007 10.0898 17.1516 13 13.6371 13C12.2849 13 11.0312 12.5692 10.0004 11.8347ZM10.7953 1.83531C11.6214 1.30536 12.5967 1 13.6371 1C16.5794 1 19.0007 3.44234 19.0007 6.5C19.0007 9.55766 16.5794 12 13.6371 12C12.5967 12 11.6214 11.6946 10.7953 11.1647C11.9869 9.98342 12.7273 8.33003 12.7273 6.5C12.7273 4.66997 11.9869 3.01658 10.7953 1.83531ZM10.0004 2.45755C11.06 3.45924 11.7273 4.89483 11.7273 6.5C11.7273 8.10516 11.06 9.54076 10.0004 10.5424C8.94071 9.54076 8.27344 8.10516 8.27344 6.5C8.27344 4.89483 8.94071 3.45924 10.0004 2.45755Z" fill="#1C1A1E" />
                                    </svg>
                                    <span>Enhance Security</span>
                                </div>
                                <h1>Tailored IT Consulting for Modern Business Needs.</h1>
                                <div className="btn-and-rating-area">
                                    <Link className="primary-btn5" href="/contact">
                                        Schedule a Free Consultation
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                    <a href="#" className="rating-area">
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
                                </div>
                            </div>
                            <div className="contact-area">
                                <ul className="contact-list">
                                    <li className="single-contact">
                                        <a href="mailto:info@example.com">
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M10.3674 8.28906L9.02736 9.63363C8.48395 10.1789 7.52783 10.1907 6.97267 9.63363L5.63258 8.28906L0.81958 13.1177C0.998736 13.2005 1.19627 13.25 1.40627 13.25H14.5938C14.8038 13.25 15.0012 13.2006 15.1803 13.1177L10.3674 8.28906Z" />
                                                    <path d="M14.5938 2H1.40625C1.19625 2 0.998719 2.04944 0.819625 2.13228L5.96266 7.29238C5.963 7.29272 5.96341 7.29278 5.96375 7.29313C5.96396 7.29335 5.9641 7.29363 5.96416 7.29394L7.63644 8.97175C7.81406 9.14938 8.186 9.14938 8.36362 8.97175L10.0356 7.29422C10.0356 7.29422 10.036 7.29347 10.0363 7.29313C10.0363 7.29313 10.0371 7.29272 10.0374 7.29238L15.1803 2.13225C15.0012 2.04938 14.8038 2 14.5938 2ZM0.149562 2.78787C0.056875 2.97531 0 3.18338 0 3.40625V11.8438C0 12.0666 0.0568125 12.2747 0.149531 12.4621L4.97087 7.62516L0.149562 2.78787ZM15.8504 2.78781L11.0292 7.62516L15.8504 12.4622C15.9431 12.2748 16 12.0667 16 11.8438V3.40625C16 3.18331 15.9431 2.97525 15.8504 2.78781Z" />
                                                </g>
                                            </svg>
                                            info@example.com
                                        </a>
                                    </li>
                                    <li className="single-contact">
                                        <a href="tel:91656786534">
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M14.7161 10.5021C13.7365 10.5021 12.7747 10.3489 11.8633 10.0477C11.4166 9.89539 10.8676 10.0351 10.595 10.3151L8.79598 11.6732C6.70961 10.5595 5.42444 9.27472 4.32595 7.20402L5.64407 5.45186C5.98653 5.10986 6.10936 4.61028 5.96219 4.14153C5.65969 3.22528 5.50603 2.26391 5.50603 1.28391C5.50607 0.575957 4.93011 0 4.2222 0H1.28387C0.575957 0 0 0.575957 0 1.28387C0 9.39843 6.60157 16 14.7161 16C15.424 16 16 15.424 16 14.7161V11.786C16 11.0781 15.424 10.5021 14.7161 10.5021Z" />
                                                </g>
                                            </svg>
                                            +91 656 786 534
                                        </a>
                                    </li>
                                </ul>
                                <svg className="divider-shape" width={72} height={70} viewBox="0 0 72 70" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 70L41 0H72L32 70H26L48 29H42L20 70H13L32 35H26L6 70H0Z" />
                                </svg>
                                <span />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-lg-block d-none">
                        <div className="banner-img-wrap">
                            <div className="counter-area">
                                <div className="counter-wrap">
                                    <div className="counter-content">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={12}
                                                speed={50}
                                                forwardedRef={ref3}
                                                as="h4"
                                                className="counter"
                                            />
                                            <span>+</span>
                                        </div>
                                        <span>Award Wining.</span>
                                    </div>
                                    <img src="/assets/img/home5/globe.gif" alt="" className="vector" />
                                </div>
                            </div>
                            <Swiper {...settings} className="swiper home5-banner-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="banner-img">
                                            <img src="/assets/img/home5/banner-img1.jpg" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="banner-img">
                                            <img src="/assets/img/home5/banner-img2.jpg" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="banner-img">
                                            <img src="/assets/img/home5/banner-img3.jpg" alt="" />
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="swiper-pagination1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home5Banner
