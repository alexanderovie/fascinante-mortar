"use client";
import React, { useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import useModalVideo from "@/utils/useModalVideo";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";


const Home6TestimonialSection = () => {
    const { openModal, Modal } = useModalVideo('r4KpWiK08vM');
    const [isOpen, setOpen] = useState(false);
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".testimonial-slider-next",
                prevEl: ".testimonial-slider-prev",
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
                },
                1400: {
                    slidesPerView: 2,
                },
            },
        };
    }, []);
    return (
        <>
            <div className="home6-testimonial-section mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-65 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-5 col-md-8">
                            <div className="section-title text-center">
                                <h2>They Loves Us!</h2>
                                <p>Our target to bring satisaction of our customer &amp; also we’ve 500+ happy customer in world-wide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider-area mb-50">
                        <div className="row">
                            <div className="col-lg-12">
                                <Swiper {...settings} className="swiper home6-testimonial-slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-card2 two">
                                                <div className="row gy-4">
                                                    <div className="col-md-4">
                                                        <div className="testimonial-img">
                                                            <img src="/assets/img/home2/testimonial-author-img1.png" alt="" />
                                                            <a className="video-player" style={{ cursor: "pointer" }}
                                                                onClick={() => setOpen(true)}>
                                                                <i className="bi bi-play-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="testimonial-content-wrap">
                                                            <div className="testimonial-content">
                                                                <div className="testimonial-content-top">
                                                                    <ul className="rating-area">
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                    </ul>
                                                                    <span>Great Services!</span>
                                                                </div>
                                                                <p>Mortar is a user-friendly, <span>support-based solution</span> that simplifies project management that  high-quality results.</p>
                                                            </div>
                                                            <div className="author-area">
                                                                <h5>Robert Kcarery </h5>
                                                                <span>Founder, Axleo</span>
                                                            </div>
                                                            <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                                                            </svg>
                                                            <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                            <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-card2 two">
                                                <div className="row gy-4">
                                                    <div className="col-md-4">
                                                        <div className="testimonial-img">
                                                            <img src="/assets/img/home2/testimonial-author-img2.png" alt="" />
                                                            <a className="video-player" style={{ cursor: "pointer" }}
                                                                onClick={() => setOpen(true)}>
                                                                <i className="bi bi-play-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="testimonial-content-wrap">
                                                            <div className="testimonial-content">
                                                                <div className="testimonial-content-top">
                                                                    <ul className="rating-area">
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                    </ul>
                                                                    <span>Execellent Support!</span>
                                                                </div>
                                                                <p>Mortar is <span>super fast &amp; most efficient</span> for customer support.</p>
                                                            </div>
                                                            <div className="author-area">
                                                                <h5>Robert Kcarery </h5>
                                                                <span>Founder, Buret</span>
                                                            </div>
                                                            <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                                                            </svg>
                                                            <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                            <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-card2 two">
                                                <div className="row gy-4">
                                                    <div className="col-md-4">
                                                        <div className="testimonial-img">
                                                            <img src="/assets/img/home2/testimonial-author-img3.png" alt="" />
                                                            <a className="video-player" style={{ cursor: "pointer" }}
                                                                onClick={() => setOpen(true)}>
                                                                <i className="bi bi-play-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="testimonial-content-wrap">
                                                            <div className="testimonial-content">
                                                                <div className="testimonial-content-top">
                                                                    <ul className="rating-area">
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                    </ul>
                                                                    <span>Fantastic Assistance!</span>
                                                                </div>
                                                                <p>Mortar is a user-friendly, <span>support-based solution</span> that simplifies project management that  high-quality results.</p>
                                                            </div>
                                                            <div className="author-area">
                                                                <h5>Hanry Macle</h5>
                                                                <span>Founder, Nexaq</span>
                                                            </div>
                                                            <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                                                            </svg>
                                                            <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                            <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-card2 two">
                                                <div className="row gy-4">
                                                    <div className="col-md-4">
                                                        <div className="testimonial-img">
                                                            <img src="/assets/img/home2/testimonial-author-img4.png" alt="" />
                                                            <a className="video-player" style={{ cursor: "pointer" }}
                                                                onClick={() => setOpen(true)}>
                                                                <i className="bi bi-play-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="testimonial-content-wrap">
                                                            <div className="testimonial-content">
                                                                <div className="testimonial-content-top">
                                                                    <ul className="rating-area">
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                        <li><i className="bi bi-star-fill" /></li>
                                                                    </ul>
                                                                    <span>Superb Service!</span>
                                                                </div>
                                                                <p>Mortar is <span>super fast &amp; most efficient</span> for customer support.</p>
                                                            </div>
                                                            <div className="author-area">
                                                                <h5>Miecle Maiker</h5>
                                                                <span>Founder, Vernex</span>
                                                            </div>
                                                            <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                                                            </svg>
                                                            <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                            <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="slider-btn-grp">
                            <div className="slider-btn testimonial-slider-prev" style={{ cursor: "pointer" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className="slider-btn testimonial-slider-next" style={{ cursor: "pointer" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="rating-wrap wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
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
                <React.Fragment>
                    <ModalVideo
                        channel="youtube"
                        onClick={() => setOpen(true)}
                        isOpen={isOpen}
                        animationSpeed="350"
                        videoId="r4KpWiK08vM"
                        ratio="16:9"
                        onClose={() => setOpen(false)}
                    />
                </React.Fragment>
            </div>
        </>
    )
}

export default Home6TestimonialSection
