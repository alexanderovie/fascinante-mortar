import Link from 'next/link'
import React from 'react'

const Home1FooterTop = () => {
    return (
        <>
            <div className="home1-footer-top-banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-content">
                                <div className="section-title white wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <span>Building Your Vision</span>
                                    <h2>Let's Build Dream Something Amazing.</h2>
                                </div>
                                <div className="button-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <Link href="/contact" className="primary-btn2 white-bg">
                                        <span>
                                            Start A Project
                                            <svg viewBox="0 0 13 20">
                                                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link href="/contact" className="primary-btn white">
                                        Contact With Us
                                        <svg viewBox="0 0 13 20">
                                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home1FooterTop