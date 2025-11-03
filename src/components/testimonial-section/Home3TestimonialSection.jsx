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
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Home3TestimonialSection = () => {
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
                nextEl: ".blog-slider-next",
                prevEl: ".blog-slider-prev",
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
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
        <div className="home3-testimonial-section mb-120">
            <div className="container">
                <div className="row g-4 mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-9">
                        <div className="section-title three">
                            <span>Customer Feedback</span>
                            <div className="title-and-content">
                                <h2>They Loves Us.</h2>
                                <p>We provides a wide range of services aimed at helping <span>Businesses &amp; Organizations.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end align-items-lg-end">
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
                <div className="row mb-70">
                    <div className="col-lg-12">
                        <Swiper {...settings} className="swiper home3-testimonial-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card3">
                                        <div className="testimonial-content-wrap">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <img src="/assets/img/home3/testimonial-author-img1.png" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Robert Kcarery</h5>
                                                    <span>Product Manger</span>
                                                </div>
                                            </div>
                                            <span>Great Agency!</span>
                                            <p>Outstanding Apps! They are very helpful &amp; mindblowing to get services. Providing awesome care and creativity for customer satisfaction.</p>
                                            <svg className="quote" width={70} height={52} viewBox="0 0 70 52" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M16.7409 0.333496C26.4614 0.333496 33.4795 8.29592 33.4795 20.0871C33.4186 37.2167 20.4386 49.3279 1.71268 51.6529C-0.0220413 51.8703 -0.691584 49.4789 0.906189 48.7753C8.08856 45.6049 11.7193 41.5829 12.188 37.6032C12.538 34.629 10.9098 32.0231 8.86158 31.534C3.55697 30.2688 0.00230554 23.7135 0.00230554 16.9407C0.00230554 12.5362 1.76583 8.31211 4.90492 5.19765C8.04401 2.08318 12.3015 0.333496 16.7409 0.333496ZM53.2614 0.333496C62.982 0.333496 70 8.29592 70 20.0871C69.9391 37.2167 56.9591 49.3279 38.2332 51.6529C36.4985 51.8703 35.829 49.4789 37.4267 48.7753C44.6091 45.6049 48.2398 41.5829 48.7085 37.6032C49.0585 34.629 47.4303 32.0231 45.3821 31.534C40.0775 30.2688 36.5228 23.7135 36.5228 16.9407C36.5228 12.5362 38.2864 8.31211 41.4255 5.19765C44.5645 2.08318 48.8221 0.333496 53.2614 0.333496Z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <a style={{ cursor: "pointer" }}
                                            onClick={() => setOpen(true)} className="video-player">
                                            <svg width={12} height={13} viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.138 6.78915C11.1393 7.01601 11.0803 7.23914 10.9668 7.43561C10.8534 7.63208 10.6897 7.7948 10.4926 7.90705L2.37646 12.5929C2.18064 12.7074 1.95789 12.7677 1.73105 12.7677C1.50421 12.7677 1.28145 12.7074 1.08564 12.5929C0.888503 12.4806 0.724809 12.3179 0.611377 12.1214C0.497945 11.9249 0.438865 11.7018 0.440208 11.475V2.10333C0.438871 1.87647 0.497951 1.65335 0.611377 1.45688C0.724804 1.26041 0.888488 1.09768 1.08562 0.985399C1.28144 0.870895 1.5042 0.810547 1.73104 0.810547C1.95788 0.810547 2.18064 0.870895 2.37646 0.985399L10.4926 5.67124C10.6897 5.7835 10.8534 5.94622 10.9668 6.14269C11.0803 6.33916 11.1393 6.56229 11.138 6.78915Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card3">
                                        <div className="testimonial-content-wrap">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <img src="/assets/img/home3/testimonial-author-img2.png" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Willium Jmaes</h5>
                                                    <span>QA Engineer</span>
                                                </div>
                                            </div>
                                            <span>Superb Assistance!</span>
                                            <p>Amazing Apps! Their services are amazing and really helpful. Great attention to detail and inventiveness to ensure satisfaction for customers.</p>
                                            <svg className="quote" width={70} height={52} viewBox="0 0 70 52" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M16.7409 0.333496C26.4614 0.333496 33.4795 8.29592 33.4795 20.0871C33.4186 37.2167 20.4386 49.3279 1.71268 51.6529C-0.0220413 51.8703 -0.691584 49.4789 0.906189 48.7753C8.08856 45.6049 11.7193 41.5829 12.188 37.6032C12.538 34.629 10.9098 32.0231 8.86158 31.534C3.55697 30.2688 0.00230554 23.7135 0.00230554 16.9407C0.00230554 12.5362 1.76583 8.31211 4.90492 5.19765C8.04401 2.08318 12.3015 0.333496 16.7409 0.333496ZM53.2614 0.333496C62.982 0.333496 70 8.29592 70 20.0871C69.9391 37.2167 56.9591 49.3279 38.2332 51.6529C36.4985 51.8703 35.829 49.4789 37.4267 48.7753C44.6091 45.6049 48.2398 41.5829 48.7085 37.6032C49.0585 34.629 47.4303 32.0231 45.3821 31.534C40.0775 30.2688 36.5228 23.7135 36.5228 16.9407C36.5228 12.5362 38.2864 8.31211 41.4255 5.19765C44.5645 2.08318 48.8221 0.333496 53.2614 0.333496Z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <a style={{ cursor: "pointer" }}
                                            onClick={() => setOpen(true)} className="video-player">
                                            <svg width={12} height={13} viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.138 6.78915C11.1393 7.01601 11.0803 7.23914 10.9668 7.43561C10.8534 7.63208 10.6897 7.7948 10.4926 7.90705L2.37646 12.5929C2.18064 12.7074 1.95789 12.7677 1.73105 12.7677C1.50421 12.7677 1.28145 12.7074 1.08564 12.5929C0.888503 12.4806 0.724809 12.3179 0.611377 12.1214C0.497945 11.9249 0.438865 11.7018 0.440208 11.475V2.10333C0.438871 1.87647 0.497951 1.65335 0.611377 1.45688C0.724804 1.26041 0.888488 1.09768 1.08562 0.985399C1.28144 0.870895 1.5042 0.810547 1.73104 0.810547C1.95788 0.810547 2.18064 0.870895 2.37646 0.985399L10.4926 5.67124C10.6897 5.7835 10.8534 5.94622 10.9668 6.14269C11.0803 6.33916 11.1393 6.56229 11.138 6.78915Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card3">
                                        <div className="testimonial-content-wrap">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <img src="/assets/img/home3/testimonial-author-img3.png" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Jorche Milton</h5>
                                                    <span>Project Manager (HR)</span>
                                                </div>
                                            </div>
                                            <span>Excellent Service!</span>
                                            <p>Amazing Service! They are very helpful &amp; mindblowing to get services. Providing comprehensive care and creativity for customer satisfaction.</p>
                                            <svg className="quote" width={70} height={52} viewBox="0 0 70 52" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M16.7409 0.333496C26.4614 0.333496 33.4795 8.29592 33.4795 20.0871C33.4186 37.2167 20.4386 49.3279 1.71268 51.6529C-0.0220413 51.8703 -0.691584 49.4789 0.906189 48.7753C8.08856 45.6049 11.7193 41.5829 12.188 37.6032C12.538 34.629 10.9098 32.0231 8.86158 31.534C3.55697 30.2688 0.00230554 23.7135 0.00230554 16.9407C0.00230554 12.5362 1.76583 8.31211 4.90492 5.19765C8.04401 2.08318 12.3015 0.333496 16.7409 0.333496ZM53.2614 0.333496C62.982 0.333496 70 8.29592 70 20.0871C69.9391 37.2167 56.9591 49.3279 38.2332 51.6529C36.4985 51.8703 35.829 49.4789 37.4267 48.7753C44.6091 45.6049 48.2398 41.5829 48.7085 37.6032C49.0585 34.629 47.4303 32.0231 45.3821 31.534C40.0775 30.2688 36.5228 23.7135 36.5228 16.9407C36.5228 12.5362 38.2864 8.31211 41.4255 5.19765C44.5645 2.08318 48.8221 0.333496 53.2614 0.333496Z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <a style={{ cursor: "pointer" }}
                                            onClick={() => setOpen(true)} className="video-player">
                                            <svg width={12} height={13} viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.138 6.78915C11.1393 7.01601 11.0803 7.23914 10.9668 7.43561C10.8534 7.63208 10.6897 7.7948 10.4926 7.90705L2.37646 12.5929C2.18064 12.7074 1.95789 12.7677 1.73105 12.7677C1.50421 12.7677 1.28145 12.7074 1.08564 12.5929C0.888503 12.4806 0.724809 12.3179 0.611377 12.1214C0.497945 11.9249 0.438865 11.7018 0.440208 11.475V2.10333C0.438871 1.87647 0.497951 1.65335 0.611377 1.45688C0.724804 1.26041 0.888488 1.09768 1.08562 0.985399C1.28144 0.870895 1.5042 0.810547 1.73104 0.810547C1.95788 0.810547 2.18064 0.870895 2.37646 0.985399L10.4926 5.67124C10.6897 5.7835 10.8534 5.94622 10.9668 6.14269C11.0803 6.33916 11.1393 6.56229 11.138 6.78915Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card3">
                                        <div className="testimonial-content-wrap">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <img src="/assets/img/home3/testimonial-author-img4.png" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Hanry Macle</h5>
                                                    <span>Support Engineer</span>
                                                </div>
                                            </div>
                                            <span>Fantastic Assistance!</span>
                                            <p>Outstanding Apps! They are very helpful &amp; mindblowing to get services. Providing awesome care and creativity for customer satisfaction.</p>
                                            <svg className="quote" width={70} height={52} viewBox="0 0 70 52" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M16.7409 0.333496C26.4614 0.333496 33.4795 8.29592 33.4795 20.0871C33.4186 37.2167 20.4386 49.3279 1.71268 51.6529C-0.0220413 51.8703 -0.691584 49.4789 0.906189 48.7753C8.08856 45.6049 11.7193 41.5829 12.188 37.6032C12.538 34.629 10.9098 32.0231 8.86158 31.534C3.55697 30.2688 0.00230554 23.7135 0.00230554 16.9407C0.00230554 12.5362 1.76583 8.31211 4.90492 5.19765C8.04401 2.08318 12.3015 0.333496 16.7409 0.333496ZM53.2614 0.333496C62.982 0.333496 70 8.29592 70 20.0871C69.9391 37.2167 56.9591 49.3279 38.2332 51.6529C36.4985 51.8703 35.829 49.4789 37.4267 48.7753C44.6091 45.6049 48.2398 41.5829 48.7085 37.6032C49.0585 34.629 47.4303 32.0231 45.3821 31.534C40.0775 30.2688 36.5228 23.7135 36.5228 16.9407C36.5228 12.5362 38.2864 8.31211 41.4255 5.19765C44.5645 2.08318 48.8221 0.333496 53.2614 0.333496Z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <a style={{ cursor: "pointer" }}
                                            onClick={() => setOpen(true)} className="video-player">
                                            <svg width={12} height={13} viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.138 6.78915C11.1393 7.01601 11.0803 7.23914 10.9668 7.43561C10.8534 7.63208 10.6897 7.7948 10.4926 7.90705L2.37646 12.5929C2.18064 12.7074 1.95789 12.7677 1.73105 12.7677C1.50421 12.7677 1.28145 12.7074 1.08564 12.5929C0.888503 12.4806 0.724809 12.3179 0.611377 12.1214C0.497945 11.9249 0.438865 11.7018 0.440208 11.475V2.10333C0.438871 1.87647 0.497951 1.65335 0.611377 1.45688C0.724804 1.26041 0.888488 1.09768 1.08562 0.985399C1.28144 0.870895 1.5042 0.810547 1.73104 0.810547C1.95788 0.810547 2.18064 0.870895 2.37646 0.985399L10.4926 5.67124C10.6897 5.7835 10.8534 5.94622 10.9668 6.14269C11.0803 6.33916 11.1393 6.56229 11.138 6.78915Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="swiper-pagination1" />
                    </div>
                </div>
            </div>
            <React.Fragment>
                <ModalVideo
                    channel="youtube"
                    onClick={() => setOpen(true)}
                    isOpen={isOpen}
                    animationSpeed="350"
                    videoId="u31qwQUeGuM"
                    ratio="16:9"
                    onClose={() => setOpen(false)}
                />
            </React.Fragment>
        </div>
    )
}

export default Home3TestimonialSection
