"use client"
import React, { useMemo } from 'react'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const ServiceDetailsPage = () => {
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
                nextEl: ".post-slider-next",
                prevEl: ".post-slider-prev",
            },
        };
    }, []);
    return (
        <div>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content">
                                <h1>Service Details</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Service Details
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Service Details Page Start */}
            <div className="service-details-page mb-130">
                <div className="container">
                    <div className="details-content-wrap mb-130">
                        <div className="post-thumb mb-70">
                            <Swiper {...settings} className="swiper service-details-post-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <img src="/assets/img/innerpages/service-details-thumb-img1.jpg" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <img src="/assets/img/innerpages/service-details-thumb-img2.jpg" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <img src="/assets/img/innerpages/service-details-thumb-img3.jpg" alt="" />
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="slider-btn-grp">
                                <div style={{ cursor: "pointer" }} className="slider-btn post-slider-prev">
                                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div style={{ cursor: "pointer" }} className="slider-btn post-slider-next">
                                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="post-title-and-tag">
                                    <h2>Web Development &amp; Design</h2>
                                    <ul className="tag-list">
                                        <li><Link href="/service">Custom</Link></li>
                                        <li><Link href="/service">Responsive</Link></li>
                                        <li><Link href="/service">Maintenance</Link></li>
                                        <li><Link href="/service">UI/UX Design</Link></li>
                                    </ul>
                                    <svg className="divider-line" width={873} height={6} viewBox="0 0 873 6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867.5 3.5L872.5 5.88675V0.113249L867.5 2.5V3.5ZM4.5 3.5H868V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4 justify-content-between mb-70">
                            <div className="col-xl-5 col-lg-6">
                                <h2>Service Overview</h2>
                                <span className="line-break" />
                                <p>We specialize in creating dynamic, visually engaging, and fully optimized websites that drive results. Our web development and design services are tailored to meet your specific business goals, ensuring a seamless online presence that not only looks great but also performs exceptionally.</p>
                                <span className="line-break" />
                                <p>This milestone is a testament to the hard work, creativity, and dedication of our incredible team and the unwavering support from our clients and partners. We are grateful for the trust placed in us and the collaborative efforts that have fueled our success.</p>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <h2>Key Feature</h2>
                                <span className="line-break" />
                                <p>Here are some key features of Web Development &amp; Design that  highlight:</p>
                                <span className="line-break" />
                                <ul className="listing two">
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Custom Design Solutions
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Responsive Design
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        SEO Optimization
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        E-Commerce Functionality
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Cross-Browser Compatibility
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Website Maintenance &amp; Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="img-grp">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-5">
                                    <img src="/assets/img/innerpages/news-insight-details-img1.jpg" alt="" />
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <img src="/assets/img/innerpages/news-insight-details-img2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <h2>Why Choose Us?</h2>
                        <span className="line-break" />
                        <p className="fixed-width">Present measurable results achieved after the project launch. This section should be data-driven to show the impact of your work, such as:</p>
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service two">
                                    <h5><span>1.</span> Expert Team</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>2.</span> Tailored Solutions</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service three">
                                    <h5><span>3.</span> SEO Optimize Focused</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>4.</span> Ongoing Support</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>5.</span> ROI on digital ad spend</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service four">
                                    <h5><span>6.</span> Target Client Satisfaction</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>7.</span> On-time Delivery</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                                <Link href="/contact" className="contact-btn">
                                    Start The Journey
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="img-grp">
                            <div className="row g-4">
                                <div className="col-lg-8 col-md-7">
                                    <img src="/assets/img/innerpages/service-details-img1.jpg" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <img src="/assets/img/innerpages/service-details-img2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="details-pagination two">
                                <div className="single-pagination">
                                    <Link className="pagination-btn" href="/service/details">
                                        <img src="/assets/img/innerpages/details-pagination-btn-bg1.png" alt="" />
                                        <div className="btn-content">
                                            <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                            </svg>
                                            Prev
                                        </div>
                                    </Link>
                                    <div className="content">
                                        <h6><Link href="/service/details">Interactive <br /> Design.</Link></h6>
                                    </div>
                                </div>
                                <div className="single-pagination two text-end">
                                    <div className="content">
                                        <h6><Link href="/service/details">E-commerce <br />Excellence</Link></h6>
                                    </div>
                                    <Link className="pagination-btn" href="/service/details">
                                        <img src="/assets/img/innerpages/details-pagination-btn-bg2.png" alt="" />
                                        <div className="btn-content">
                                            Next
                                            <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <svg className="divider-line" width={6} height={88} viewBox="0 0 6 88" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 83L0.113249 88H5.88675L3.5 83H2.5ZM2.5 4.5V83.5H3.5V4.5H2.5Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service Details Page End */}


            <Home3Footer />
        </div>
    )
}

export default ServiceDetailsPage
