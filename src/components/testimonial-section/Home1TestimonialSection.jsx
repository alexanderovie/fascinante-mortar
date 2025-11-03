"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home1TestimonialSection = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
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
    return (
        <div className="home1-testimonial-section mb-80">
            <div className="container">
                <div className="row justify-content-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span>Clients Feedback</span>
                            <h2>They Loves Us</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="testimonial-slider-area">
                            <Swiper {...settings} className="swiper home1-testimonial-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-card">
                                            <div className="author-and-quote-area">
                                                <div className="author-area">
                                                    <div className="author-img">
                                                        <img src="/assets/img/home1/testimonial-author-img1.png" alt="" />
                                                    </div>
                                                    <div className="author-content">
                                                        <h5>Jorche Milton</h5>
                                                        <span>Project Manager (HR)</span>
                                                    </div>
                                                </div>
                                                <svg className="quote" width={100} height={56} viewBox="0 0 100 56" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M52.198 0C50.9232 0 50.4274 0.557795 50.4274 1.74311V6.48437C50.5036 7.41944 50.7942 8.32532 51.2773 9.1339L86.8314 55.152C87.398 55.9887 88.602 56.2676 89.5228 55.7098L99.2966 50.4805C100.005 49.9227 100.147 49.2254 99.8632 48.0401L86.2648 1.67339C86.0523 0.766975 85.2733 0.139457 84.2817 0.139457H52.198V0ZM1.77062 0C0.495773 0 0 0.557795 0 1.74311V6.48437C0.0762329 7.41944 0.366829 8.32532 0.849907 9.1339L36.404 55.152C36.9706 55.9887 38.1747 56.2676 39.0954 55.7098L49.0109 50.4805C49.7191 49.9227 49.8608 49.2254 49.5775 48.0401L35.9791 1.67339C35.7666 0.69725 34.8459 0.0697329 33.8543 0.139457H1.77062V0Z" />
                                                </svg>
                                            </div>
                                            <div className="testimonial-content">
                                                <ul className="rating-area">
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-half" /></li>
                                                </ul>
                                                <p>Amazing Service! They are very helpful &amp; mindblowing to get services. Providing comprehensive care and creativity for clients.</p>
                                            </div>
                                            <div className="company-logo">
                                                <img src="/assets/img/home1/testimonial-company-logo1.png" alt="" className="light" />
                                                <img src="/assets/img/home1/testimonial-company-logo1-white.png" alt="" className="dark" />
                                                <span>(Clients in 2024)</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-card">
                                            <div className="author-and-quote-area">
                                                <div className="author-area">
                                                    <div className="author-img">
                                                        <img src="/assets/img/home1/testimonial-author-img2.png" alt="" />
                                                    </div>
                                                    <div className="author-content">
                                                        <h5>Robert Baruni</h5>
                                                        <span>QA Engineer</span>
                                                    </div>
                                                </div>
                                                <svg className="quote" width={100} height={56} viewBox="0 0 100 56" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M52.198 0C50.9232 0 50.4274 0.557795 50.4274 1.74311V6.48437C50.5036 7.41944 50.7942 8.32532 51.2773 9.1339L86.8314 55.152C87.398 55.9887 88.602 56.2676 89.5228 55.7098L99.2966 50.4805C100.005 49.9227 100.147 49.2254 99.8632 48.0401L86.2648 1.67339C86.0523 0.766975 85.2733 0.139457 84.2817 0.139457H52.198V0ZM1.77062 0C0.495773 0 0 0.557795 0 1.74311V6.48437C0.0762329 7.41944 0.366829 8.32532 0.849907 9.1339L36.404 55.152C36.9706 55.9887 38.1747 56.2676 39.0954 55.7098L49.0109 50.4805C49.7191 49.9227 49.8608 49.2254 49.5775 48.0401L35.9791 1.67339C35.7666 0.69725 34.8459 0.0697329 33.8543 0.139457H1.77062V0Z" />
                                                </svg>
                                            </div>
                                            <div className="testimonial-content">
                                                <ul className="rating-area">
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-half" /></li>
                                                </ul>
                                                <p>Excellent Work! Evaluate the effectiveness of the team’s communication and collaboration throughout the project. I prefer that.</p>
                                            </div>
                                            <div className="company-logo">
                                                <img src="/assets/img/home1/testimonial-company-logo2.png" alt="" className="light" />
                                                <img src="/assets/img/home1/testimonial-company-logo2-white.png" alt="" className="dark" />
                                                <span>(Clients in 2021)</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-card">
                                            <div className="author-and-quote-area">
                                                <div className="author-area">
                                                    <div className="author-img">
                                                        <img src="/assets/img/home1/testimonial-author-img3.png" alt="" />
                                                    </div>
                                                    <div className="author-content">
                                                        <h5>Hanry Macle</h5>
                                                        <span>Support Engineer</span>
                                                    </div>
                                                </div>
                                                <svg className="quote" width={100} height={56} viewBox="0 0 100 56" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M52.198 0C50.9232 0 50.4274 0.557795 50.4274 1.74311V6.48437C50.5036 7.41944 50.7942 8.32532 51.2773 9.1339L86.8314 55.152C87.398 55.9887 88.602 56.2676 89.5228 55.7098L99.2966 50.4805C100.005 49.9227 100.147 49.2254 99.8632 48.0401L86.2648 1.67339C86.0523 0.766975 85.2733 0.139457 84.2817 0.139457H52.198V0ZM1.77062 0C0.495773 0 0 0.557795 0 1.74311V6.48437C0.0762329 7.41944 0.366829 8.32532 0.849907 9.1339L36.404 55.152C36.9706 55.9887 38.1747 56.2676 39.0954 55.7098L49.0109 50.4805C49.7191 49.9227 49.8608 49.2254 49.5775 48.0401L35.9791 1.67339C35.7666 0.69725 34.8459 0.0697329 33.8543 0.139457H1.77062V0Z" />
                                                </svg>
                                            </div>
                                            <div className="testimonial-content">
                                                <ul className="rating-area">
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-half" /></li>
                                                </ul>
                                                <p>We were thoroughly impressed with the professionalism and dedication of Mortar. From our initial consultation to the final delivery.</p>
                                            </div>
                                            <div className="company-logo">
                                                <img src="/assets/img/home1/testimonial-company-logo3.png" alt="" className="light" />
                                                <img src="/assets/img/home1/testimonial-company-logo3-white.png" alt="" className="dark" />
                                                <span>(Clients in 2023)</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-card">
                                            <div className="author-and-quote-area">
                                                <div className="author-area">
                                                    <div className="author-img">
                                                        <img src="/assets/img/home1/testimonial-author-img4.png" alt="" />
                                                    </div>
                                                    <div className="author-content">
                                                        <h5>Miecle Maiker</h5>
                                                        <span>Support Engineer</span>
                                                    </div>
                                                </div>
                                                <svg className="quote" width={100} height={56} viewBox="0 0 100 56" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M52.198 0C50.9232 0 50.4274 0.557795 50.4274 1.74311V6.48437C50.5036 7.41944 50.7942 8.32532 51.2773 9.1339L86.8314 55.152C87.398 55.9887 88.602 56.2676 89.5228 55.7098L99.2966 50.4805C100.005 49.9227 100.147 49.2254 99.8632 48.0401L86.2648 1.67339C86.0523 0.766975 85.2733 0.139457 84.2817 0.139457H52.198V0ZM1.77062 0C0.495773 0 0 0.557795 0 1.74311V6.48437C0.0762329 7.41944 0.366829 8.32532 0.849907 9.1339L36.404 55.152C36.9706 55.9887 38.1747 56.2676 39.0954 55.7098L49.0109 50.4805C49.7191 49.9227 49.8608 49.2254 49.5775 48.0401L35.9791 1.67339C35.7666 0.69725 34.8459 0.0697329 33.8543 0.139457H1.77062V0Z" />
                                                </svg>
                                            </div>
                                            <div className="testimonial-content">
                                                <ul className="rating-area">
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-fill" /></li>
                                                    <li><i className="bi bi-star-half" /></li>
                                                </ul>
                                                <p>The team at Mortar was fantastic to work with! They maintained open and clear communication throughout the entire process.</p>
                                            </div>
                                            <div className="company-logo">
                                                <img src="/assets/img/home1/testimonial-company-logo4.png" alt="" className="light" />
                                                <img src="/assets/img/home1/testimonial-company-logo4-white.png" alt="" className="dark" />
                                                <span>(Clients in 2024)</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="slider-btn-grp">
                                <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-prev">
                                    <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.85712 9.28577C7.14283 7.50005 3.5714 5.71434 1.42855 5.00005C3.5714 4.28577 6.78569 3.21434 7.85712 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-next">
                                    <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="rating-list wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
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

    )
}

export default Home1TestimonialSection
