import React from 'react'

const Home7Banner = () => {
    return (
        <div className="home7-banner-section mb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6">
                        <div className="banner-content-wrap">
                            <div className="title-area">
                                <h1>
                                    <span className="banner-video-wrap">CREATIVE
                                        <span className="banner-video">
                                            <video autoPlay loop muted playsInline src="assets/video/home2-video.mp4" />
                                        </span>
                                    </span>
                                    PRODUCT DESIGNER.
                                </h1>
                            </div>
                            <div className="banner-content">
                                <svg className="arrow" width={175} height={185} viewBox="0 0 175 185" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M146 49L20.9672 174L-3.05176e-05 153L125 29H0.999969V0H175V185H146V49Z" />
                                    <path d="M146.5 49V47.7931L145.646 48.6464L20.9675 173.293L0.708215 153.002L125.352 29.355L126.214 28.5H125H1.49997V0.5H174.5V184.5H146.5V49Z" strokeOpacity="0.15" />
                                </svg>
                                <div className="content-and-btn-area">
                                    <p>I’m specialize in various areas of design, such as <span>Product Design, Web Design, Graphics &amp; Branding Design.</span></p>
                                    <a href="assets/Resume.pdf" className="primary-btn3 four btn-hover" download>
                                        Download Resume
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 d-lg-block d-none">
                        <div className="banner-img-wrap">
                            <div className="banner-img magnetic-item">
                                <img src="/assets/img/home7/banner-img.png" alt="" />
                            </div>
                            <ul className="social-list">
                                <li><a href="https://dribbble.com/"><img src="/assets/img/home7/icon/dribbble-logo.svg" alt="" /></a></li>
                                <li><a href="https://www.behance.net/"><img src="/assets/img/home7/icon/behance-logo.svg" alt="" /></a></li>
                                <li><a href="https://www.pinterest.com/"><img src="/assets/img/home7/icon/pinterest-logo.svg" alt="" /></a></li>
                                <li><a href="https://www.linkedin.com/"><img src="/assets/img/home7/icon/linkedIn-logo.svg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home7Banner
