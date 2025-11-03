"use client";
import React, { useMemo, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);


const Home4testimonialSection = () => {
    const [isOpen, setOpen] = useState(false);
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
            navigation: {
                nextEl: ".testimonial-slider-next",
                prevEl: ".testimonial-slider-prev",
            },
            pagination: {
                el: ".franctional-pagi",
                type: "fraction",
            },
        };
    }, []);
    return (
        <>
            <div className="home4-testimonial-section mb-130">
                <img src="/assets/img/home4/testimonial-bg.png" alt="" className="testimonial-bg light" />
                <img src="/assets/img/home4/testimonial-bg-dark.png" alt="" className="testimonial-bg dark" />
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-9 position-relative">
                            <svg className="divider" width={6} height={644} viewBox="0 0 6 644" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 639L0.113249 644H5.88675L3.5 639H2.5ZM2.5 4.5V639.5H3.5V4.5H2.5Z" />
                            </svg>
                            <div className="testimonial-area">
                                <div className="section-title2 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h2>
                                        <strong>They Loves Us!</strong>
                                        <img src="/assets/img/home4/emoji.png" alt="" />
                                    </h2>
                                    <p>This feedback acknowledges strengths while providing constructive input for improvement.</p>
                                </div>
                                <Swiper {...settings} className="swiper home2-testimonial-slider mt-70">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-card4">
                                                <div className="row g-4">
                                                    <div className="col-xl-4 col-md-5">
                                                        <div className="testimonial-img">
                                                            <img src="/assets/img/home4/testimonial-img1.png" alt="" />
                                                            <a style={{ cursor: "pointer" }}
                                                                onClick={() => setOpen(true)} className="video-player">
                                                                <i className="bi bi-play-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="testimonial-content">
                                                            <span>Outstanding Support!</span>
                                                            <p>We’ve been extremely pleased with the creativity and strategic approach the agency brought to our campaigns.</p>
                                                            <div className="author-area">
                                                                <h5>Robert Kcarery</h5>
                                                                <span>Product Manger</span>
                                                            </div>
                                                            <svg className="quote" width={110} height={82} viewBox="0 0 110 82" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M26.3071 0.666626C41.5823 0.666626 52.6106 13.179 52.6106 31.7079C52.5149 58.6259 32.1178 77.6578 2.69136 81.3114C-0.0346363 81.6531 -1.08678 77.8951 1.42401 76.7895C12.7106 71.8073 18.4161 65.4871 19.1526 59.2333C19.7025 54.5595 17.1439 50.4646 13.9253 49.696C5.58953 47.7078 0.003623 37.4066 0.003623 26.7637C0.003623 19.8423 2.77488 13.2044 7.70774 8.31029C12.6406 3.41614 19.331 0.666626 26.3071 0.666626ZM83.6965 0.666626C98.9717 0.666626 110 13.179 110 31.7079C109.904 58.6259 89.5072 77.6578 60.0808 81.3114C57.3548 81.6531 56.3026 77.8951 58.8134 76.7895C70.1 71.8073 75.8055 65.4871 76.542 59.2333C77.0919 54.5595 74.5333 50.4646 71.3148 49.696C62.9789 47.7078 57.393 37.4066 57.393 26.7637C57.393 19.8423 60.1643 13.2044 65.0971 8.31029C70.03 3.41614 76.7204 0.666626 83.6965 0.666626Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-card4">
                                                <div className="row g-4">
                                                    <div className="col-xl-4 col-md-5">
                                                        <div className="testimonial-img">
                                                            <img src="/assets/img/home4/testimonial-img2.png" alt="" />
                                                            <a style={{ cursor: "pointer" }}
                                                                onClick={() => setOpen(true)} className="video-player">
                                                                <i className="bi bi-play-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="testimonial-content">
                                                            <span>Superb Assistance!</span>
                                                            <p>Outstanding Apps! They are very helpful &amp; mindblowing to get services. Delivering thorough care to ensure client happiness.</p>
                                                            <div className="author-area">
                                                                <h5>Jorche Milton</h5>
                                                                <span>QA Engineer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-card4">
                                                <div className="row g-4">
                                                    <div className="col-xl-4 col-md-5">
                                                        <div className="testimonial-img">
                                                            <img src="/assets/img/home4/testimonial-img3.png" alt="" />
                                                            <a style={{ cursor: "pointer" }}
                                                                onClick={() => setOpen(true)} className="video-player">
                                                                <i className="bi bi-play-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="testimonial-content">
                                                            <span>Excellent Service!</span>
                                                            <p>We were thoroughly impressed with the professionalism and dedication of Mortar. From our consultation to the final delivery.</p>
                                                            <div className="author-area">
                                                                <h5>Hanry Macle</h5>
                                                                <span>Support Engineer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <div className="rating-and-btn-area">
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
                                        <div className="slider-btn-grp">
                                            <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-prev">
                                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-next">
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
                        </div>
                        <div className="col-lg-3 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="result-and-award-area">
                                <div className="result-area">
                                    <span>100%</span>
                                    <p>Measurable Results &amp; ROI.</p>
                                    <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                                <div className="award-area">
                                    <h4 className="award-title">
                                        Our Achievement
                                        <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 12L11 2M11 2C8.77778 2.41667 3.91667 3.25 1 2M11 2C10.5833 4.08333 9.75 8.66667 11 12" strokeWidth={2} strokeLinecap="round" />
                                        </svg>
                                    </h4>
                                    <ul className="award-list">
                                        <li className="single-award">
                                            <img src="/assets/img/home4/award-logo1.png" alt="" />
                                        </li>
                                        <li className="single-award">
                                            <img src="/assets/img/home4/award-logo2.png" alt="" />
                                        </li>
                                        <li className="single-award">
                                            <img src="/assets/img/home4/award-logo3.png" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
        </>
    )
}

export default Home4testimonialSection
