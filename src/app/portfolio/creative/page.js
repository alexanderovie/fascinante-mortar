import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const CreativePortfolioPage = () => {
    return (
        <>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Portfolio Creative</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Portfolio Creative
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
                        <div className="col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="portfolio-card two magnetic-item">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src="/assets/img/home3/portfolio-img1.jpg" alt="" />
                                    </div>
                                    <div className="details-btn-wrap">
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <h3><Link href="/portfolio/details">Pixel Pulse</Link></h3>
                                    <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                                    <Link href="/portfolio/creative" className="tag">Artifical Intellegnce</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="portfolio-card two magnetic-item">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src="/assets/img/home3/portfolio-img2.jpg" alt="" />
                                    </div>
                                    <div className="details-btn-wrap">
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <h3><Link href="/portfolio/details">Engage360</Link></h3>
                                    <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                                    <Link href="/portfolio/creative" className="tag">Health Care</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="portfolio-card two magnetic-item">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src="/assets/img/home3/portfolio-img3.jpg" alt="" />
                                    </div>
                                    <div className="details-btn-wrap">
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <h3><Link href="/portfolio/details">UX Elevate</Link></h3>
                                    <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                                    <Link href="/portfolio/creative" className="tag">UI/UX Design</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="portfolio-card two magnetic-item">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src="/assets/img/home3/portfolio-img4.jpg" alt="" />
                                    </div>
                                    <div className="details-btn-wrap">
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <h3><Link href="/portfolio/details">SocialSphere</Link></h3>
                                    <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                                    <Link href="/portfolio/creative" className="tag">Artifical Intellegnce</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="portfolio-card two magnetic-item">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src="/assets/img/innerpages/portfolio-creative-img1.jpg" alt="" />
                                    </div>
                                    <div className="details-btn-wrap">
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <h3><Link href="/portfolio/details">Creative Spheer</Link></h3>
                                    <p>To perfectly using <span>Color Theory, Design Hierarchy.</span></p>
                                    <Link href="/portfolio/creative" className="tag">UI/UX Design</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="portfolio-card two magnetic-item">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src="/assets/img/innerpages/portfolio-creative-img2.jpg" alt="" />
                                    </div>
                                    <div className="details-btn-wrap">
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <h3><Link href="/portfolio/details">Brand Transformations</Link></h3>
                                    <p>To perfectly using <span>Design Consistency, Neu Brutalism.</span></p>
                                    <Link href="/portfolio/creative" className="tag">Artifical Intellegnce</Link>
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

export default CreativePortfolioPage
