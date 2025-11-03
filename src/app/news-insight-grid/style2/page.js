import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const NewsIsightPage = () => {
    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>News &amp; Inight 02</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        News &amp; Inight 02
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* News & Insight Page Start */}
            <div className="news-insight-page mb-130">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img1.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Web Design</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">02 April, 2023</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">Celebrates Major Milestone in Digital Services.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img2.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Brutalism</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">08 September, 2024</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">Powerful Impact in Digital Marketplace in One Era.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img3.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Bento Grid</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">02 Octeber, 2023</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">Essential Social Media Strategies for-2024.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img4.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Web Design</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">08 November, 2024</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">Branding in the Digital Age Key Elements to Consider.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img5.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Creative Art</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">15 October, 2024</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">Navigating the Challenges of E-commerce in -2025.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img6.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Creative Design</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">02 April, 2024</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">The Power of Influencer Marketing Insights and Tips.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img7.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Bento Grid</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">05 April, 2024</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">How to Build an Effective Online Community.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img8.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Brutalism</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">08 November, 2024</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">Content Marketing Strategies
                                        That Deliver Results.</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-card2 two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/innerpages/blog2-img9.jpg" alt="" />
                                </Link>
                                <div className="blog-content-wrap">
                                    <ul className="blog-meta">
                                        <li><Link href="/news-insight-grid">Web Design</Link></li>
                                        <li>
                                            <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                            </svg>
                                        </li>
                                        <li className="blog-date"><Link href="/news-insight-grid">04 September, 2024</Link></li>
                                    </ul>
                                    <h3><Link href="/news-insight-grid/details">The Importance of Responsive Design in Today’s Market.</Link></h3>
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
            {/* News & Insight Page End */}
            <Home3Footer />
        </>
    )
}

export default NewsIsightPage
