import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const GridPortfolioPage = () => {
    return (
        <>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Portfolio Grid</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Portfolio Grid
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
                    <div className="row gy-5 mb-70">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/home7/portfolio-img1.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>UI/UX Design</span>
                                    <h4><Link href="/portfolio/details">Digital Masterpieces.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/home7/portfolio-img3.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Branding Design</span>
                                    <h4><Link href="/portfolio/details">Brand Amplifiers.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/innerpages/portfolio-img1.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Creative Art</span>
                                    <h4><Link href="/portfolio/details">Interactive Design.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/innerpages/portfolio-img2.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Ecommerce</span>
                                    <h4><Link href="/portfolio/details">E-commerce Excellence</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/innerpages/portfolio-img3.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Branding Design</span>
                                    <h4><Link href="/portfolio/details">Engagement Redefined.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/home7/portfolio-img4.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Branding Design</span>
                                    <h4><Link href="/portfolio/details">Seamless Interfaces.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/innerpages/portfolio-img4.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Development</span>
                                    <h4><Link href="/portfolio/details">Scalable Web Designs.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/innerpages/portfolio-img5.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Development</span>
                                    <h4><Link href="/portfolio/details">E-commerce Prominence</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="portfolio-card2 three magnetic-item">
                                <div className="portfolio-img">
                                    <img src="/assets/img/innerpages/portfolio-img6.jpg" alt="" />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>Creative Art</span>
                                    <h4><Link href="/portfolio/details">Smart Digital Strategies</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Inner Page End */}


            <Home3Footer />
        </>
    )
}

export default GridPortfolioPage
