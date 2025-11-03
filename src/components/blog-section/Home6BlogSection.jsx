import Link from 'next/link'
import React from 'react'

const Home6BlogSection = () => {
    return (
        <>
            <div className="home6-blog-section mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-65 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xxl-4 col-lg-5 col-md-7">
                            <div className="section-title text-center">
                                <span>Latest Article</span>
                                <h2>News &amp; Insight</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-card two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/home6/blog-img1.jpg" alt="" />
                                </Link>
                                <div className="blog-content">
                                    <div className="blog-category">
                                        <Link href="/news-insight-grid">Customer Support</Link>
                                    </div>
                                    <h4><Link href="/news-insight-grid/details">10 Ways to Improve Your Customer Support.</Link></h4>
                                    <ul className="date-and-time">
                                        <li><Link href="/news-insight-grid">02 Semtepber, 2024</Link></li>
                                        <li>4 min read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog-card two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/home6/blog-img2.jpg" alt="" />
                                </Link>
                                <div className="blog-content">
                                    <div className="blog-category">
                                        <Link href="/news-insight-grid">Business Growth</Link>
                                    </div>
                                    <h4><Link href="/news-insight-grid/details">The Best Tools for IT Support &amp; Troubleshooting.</Link></h4>
                                    <ul className="date-and-time">
                                        <li><Link href="/news-insight-grid">02 August, 2024</Link></li>
                                        <li>2 min read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="blog-card two magnetic-item">
                                <Link href="/news-insight-grid/details" className="blog-img">
                                    <img src="/assets/img/home6/blog-img3.jpg" alt="" />
                                </Link>
                                <div className="blog-content">
                                    <div className="blog-category">
                                        <Link href="/news-insight-grid">Technical Support</Link>
                                    </div>
                                    <h4><Link href="/news-insight-grid/details">How to Use Customer Support to Build Brand.</Link></h4>
                                    <ul className="date-and-time">
                                        <li><Link href="/news-insight-grid">02 Semtepber, 2024</Link></li>
                                        <li>5 min read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home6BlogSection
