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


const Home7TestimonialSection = () => {

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
        <>
            <div className="home7-testimonial-section mb-130">
                <div className="container">
                    <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="section-title3">
                                <h2>They Loves Us</h2>
                                <p>We’re the greatest part on the digital platform &amp; to achieve many awards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="testimonial-slider-area">
                                <Swiper {...settings} className="swiper home1-testimonial-slider">
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
                                                <svg className="quote" width={198} height={198} viewBox="0 0 198 198" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M4.78284 171.064L4.78227 171.064C0.431774 171.609 -1.21285 165.63 2.76471 163.878L2.76514 163.878C23.1329 154.887 33.6138 143.404 34.9712 131.878L34.4746 131.82L34.9712 131.878C35.9809 123.298 31.2964 115.626 25.1818 114.166L25.1816 114.166C17.8494 112.417 11.6832 107 7.34059 99.6022C2.9995 92.2067 0.506521 82.8702 0.506521 73.3744C0.506521 61.0498 5.44113 49.2292 14.2261 40.5131C23.0112 31.797 34.9271 26.8996 47.3528 26.8996C60.9546 26.8996 72.6525 32.4665 80.957 42.1551C89.2656 51.8485 94.1987 65.6945 94.1991 82.2722C94.028 130.412 57.5668 164.51 4.78284 171.064ZM108.084 171.064L108.083 171.064C103.733 171.609 102.088 165.63 106.066 163.878L106.066 163.878C126.434 154.887 136.915 143.404 138.272 131.878C139.282 123.298 134.597 115.626 128.483 114.166L128.483 114.166C121.15 112.417 114.984 107 110.642 99.6022C106.3 92.2067 103.807 82.8702 103.807 73.3744C103.807 61.0498 108.742 49.2292 117.527 40.5131C126.312 31.797 138.228 26.8996 150.654 26.8996C164.256 26.8996 175.953 32.4665 184.258 42.1551C192.567 51.8485 197.5 65.6945 197.5 82.2722C197.329 130.412 160.868 164.51 108.084 171.064Z" />
                                                    </g>
                                                </svg>
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
                                                <svg className="quote" width={198} height={198} viewBox="0 0 198 198" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M4.78284 171.064L4.78227 171.064C0.431774 171.609 -1.21285 165.63 2.76471 163.878L2.76514 163.878C23.1329 154.887 33.6138 143.404 34.9712 131.878L34.4746 131.82L34.9712 131.878C35.9809 123.298 31.2964 115.626 25.1818 114.166L25.1816 114.166C17.8494 112.417 11.6832 107 7.34059 99.6022C2.9995 92.2067 0.506521 82.8702 0.506521 73.3744C0.506521 61.0498 5.44113 49.2292 14.2261 40.5131C23.0112 31.797 34.9271 26.8996 47.3528 26.8996C60.9546 26.8996 72.6525 32.4665 80.957 42.1551C89.2656 51.8485 94.1987 65.6945 94.1991 82.2722C94.028 130.412 57.5668 164.51 4.78284 171.064ZM108.084 171.064L108.083 171.064C103.733 171.609 102.088 165.63 106.066 163.878L106.066 163.878C126.434 154.887 136.915 143.404 138.272 131.878C139.282 123.298 134.597 115.626 128.483 114.166L128.483 114.166C121.15 112.417 114.984 107 110.642 99.6022C106.3 92.2067 103.807 82.8702 103.807 73.3744C103.807 61.0498 108.742 49.2292 117.527 40.5131C126.312 31.797 138.228 26.8996 150.654 26.8996C164.256 26.8996 175.953 32.4665 184.258 42.1551C192.567 51.8485 197.5 65.6945 197.5 82.2722C197.329 130.412 160.868 164.51 108.084 171.064Z" />
                                                    </g>
                                                </svg>
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
                                                <svg className="quote" width={198} height={198} viewBox="0 0 198 198" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M4.78284 171.064L4.78227 171.064C0.431774 171.609 -1.21285 165.63 2.76471 163.878L2.76514 163.878C23.1329 154.887 33.6138 143.404 34.9712 131.878L34.4746 131.82L34.9712 131.878C35.9809 123.298 31.2964 115.626 25.1818 114.166L25.1816 114.166C17.8494 112.417 11.6832 107 7.34059 99.6022C2.9995 92.2067 0.506521 82.8702 0.506521 73.3744C0.506521 61.0498 5.44113 49.2292 14.2261 40.5131C23.0112 31.797 34.9271 26.8996 47.3528 26.8996C60.9546 26.8996 72.6525 32.4665 80.957 42.1551C89.2656 51.8485 94.1987 65.6945 94.1991 82.2722C94.028 130.412 57.5668 164.51 4.78284 171.064ZM108.084 171.064L108.083 171.064C103.733 171.609 102.088 165.63 106.066 163.878L106.066 163.878C126.434 154.887 136.915 143.404 138.272 131.878C139.282 123.298 134.597 115.626 128.483 114.166L128.483 114.166C121.15 112.417 114.984 107 110.642 99.6022C106.3 92.2067 103.807 82.8702 103.807 73.3744C103.807 61.0498 108.742 49.2292 117.527 40.5131C126.312 31.797 138.228 26.8996 150.654 26.8996C164.256 26.8996 175.953 32.4665 184.258 42.1551C192.567 51.8485 197.5 65.6945 197.5 82.2722C197.329 130.412 160.868 164.51 108.084 171.064Z" />
                                                    </g>
                                                </svg>
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
                        </div>
                    </div>
                </div>
            </div>


            <div className="home7-award-section mb-130">
                <div className="container">
                    <div className="row justify-content-between mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-7">
                            <div className="section-title3 white">
                                <h2>Award &amp; <br /> Recognition</h2>
                                <p>I’ve already done <strong>200+ Projects,</strong> to select project <span>(2015-2024).</span></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="vector">
                                <svg width={60} height={59} viewBox="0 0 60 59" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.9825 0V29.0284H0V59H29.9825V29.9716H60V0H29.9825Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="award-table">
                                <tbody>
                                    <tr className="wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <td>
                                            <a href="#">1. Digital Innovation</a>
                                        </td>
                                        <td>Digigo Platform
                                            <img src="/assets/img/home7/award-img1.jpg" alt="" />
                                        </td>
                                        <td><span>2023</span></td>
                                    </tr>
                                    <tr className="wow animate fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <td>
                                            <a href="#">2. InnovateXcel Award</a>
                                        </td>
                                        <td>Microsoft Platform
                                            <img src="/assets/img/home7/award-img2.jpg" alt="" />
                                        </td>
                                        <td><span>2023</span></td>
                                    </tr>
                                    <tr className="wow animate fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <td>
                                            <a href="#">3. Digital Vanguard</a>
                                        </td>
                                        <td>Adobe Platform
                                            <img src="/assets/img/home7/award-img3.jpg" alt="" />
                                        </td>
                                        <td><span>2024</span></td>
                                    </tr>
                                    <tr className="wow animate fadeInLeft" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <td>
                                            <a href="#">4. Mastermind</a>
                                        </td>
                                        <td>Behance Platform
                                            <img src="/assets/img/home7/award-img4.jpg" alt="" />
                                        </td>
                                        <td><span>2021</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home7TestimonialSection
