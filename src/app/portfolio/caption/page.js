"use client"
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useEffect } from 'react'

const CaptionPortfolioPage = () => {
    useEffect(() => {
        const infoflow1TextItem = document.querySelectorAll(".portfolio-caption-card");
        function followImageCursor2(event, infoflow1TextItem) {
            const contentBox = infoflow1TextItem.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            infoflow1TextItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        infoflow1TextItem.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor2(event, item), 100);
            });
        });
    })
    return (
        <>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Portfolio <br /> Caption Cursor</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Portfolio Caption Cursor
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Portfolio Inner Page Start */}
            <div className="portfolio-page mb-130">
                <div className="container">
                    <div className="row gy-5 justify-content-between mb-70">
                        <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="portfolio-caption-card magnetic-item">
                                <Link href="/portfolio/details" className="portfolio-caption-img">
                                    <img src="/assets/img/innerpages/portfolio-caption-img1.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/portfolio/details">Ecommerce</Link>
                                    <h6><Link href="/portfolio/details">E-commerce Excellence.</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="portfolio-caption-card magnetic-item">
                                <Link href="/portfolio/details" className="portfolio-caption-img">
                                    <img src="/assets/img/innerpages/portfolio-caption-img2.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/portfolio/details">UI/UX Design</Link>
                                    <h6><Link href="/portfolio/details">Digital Masterpieces.</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="portfolio-caption-card magnetic-item">
                                <Link href="/portfolio/details" className="portfolio-caption-img">
                                    <img src="/assets/img/innerpages/portfolio-caption-img3.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/portfolio/details">Creative Art</Link>
                                    <h6><Link href="/portfolio/details">Interactive Design.</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="portfolio-caption-card magnetic-item">
                                <Link href="/portfolio/details" className="portfolio-caption-img">
                                    <img src="/assets/img/innerpages/portfolio-caption-img4.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/portfolio/details">Branding Design</Link>
                                    <h6><Link href="/portfolio/details">Seamless Interfaces.</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="portfolio-caption-card magnetic-item">
                                <Link href="/portfolio/details" className="portfolio-caption-img">
                                    <img src="/assets/img/innerpages/portfolio-caption-img5.jpg" alt="" />
                                </Link>
                                <div className="info-flow-content">
                                    <Link href="/portfolio/details">Development</Link>
                                    <h6><Link href="/portfolio/details">Scalable Web Designs.</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="paginations-button">
                            <a href="#">
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                                Prev
                            </a>
                        </div>
                        <ul className="paginations">
                            <li className="page-item active">
                                <a href="#">01</a>
                            </li>
                            <li className="page-item">
                                <a href="#">02</a>
                            </li>
                            <li className="page-item">
                                <a href="#">03</a>
                            </li>
                            <li className="page-item">
                                <a href="#">04</a>
                            </li>
                        </ul>
                        <div className="paginations-button">
                            <a href="#">
                                Next
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Inner Page End */}


            <Home3Footer />
        </>
    )
}

export default CaptionPortfolioPage
