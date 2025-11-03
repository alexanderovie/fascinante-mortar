import Link from 'next/link'
import React from 'react'

const Home5ServiceSection = () => {
    return (
        <div className="home5-service-section mb-130">
            <div className="container">
                <div className="row g-4 justify-content-between align-items-lg-end mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="section-title four">
                            <h2>We Provide Smart Solution.</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-flex justify-content-lg-end">
                        <Link href="/service" className="view-btn">
                            View All Solution
                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="service-wrapper">
                    <div className="single-service mb-40">
                        <div className="row justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <div className="service-content">
                                    <h2>IT Strategy &amp; Consulting</h2>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            IT Roadmap Development
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Technology Assessment &amp; Audits
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Digital Transformation Strategy
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            IT Risk Management &amp; Mitigation
                                        </li>
                                    </ul>
                                    <Link className="primary-btn5 white-bg" href="/service/details">
                                        View Details
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <img src="/assets/img/home5/service-img1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={750} height={421} viewBox="0 0 750 421" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0 -10C18.5 -8.5 44.5 5.5 58 32C75.482 66.3166 76.5 192 220.5 262C360.839 330.22 673 255.5 760 421" />
                                <path d="M35 -26C53.5 -24.5 79.5 -10.5 93 16C110.482 50.3166 111.5 176 255.5 246C395.839 314.22 708 239.5 795 405" />
                                <path d="M70 -42C88.5 -40.5 114.5 -26.5 128 0C145.482 34.3166 146.5 160 290.5 230C430.839 298.22 743 223.5 830 389" />
                                <path d="M105 -58C123.5 -56.5 149.5 -42.5 163 -16C180.482 18.3166 181.5 144 325.5 214C465.839 282.22 778 207.5 865 373" />
                                <path d="M140 -74C158.5 -72.5 184.5 -58.5 198 -32C215.482 2.31659 216.5 128 360.5 198C500.839 266.22 813 191.5 900 357" />
                            </g>
                        </svg>
                    </div>
                    <div className="single-service mb-40">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="service-content">
                                    <h2>Network Infrastructure</h2>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Network Design &amp; Implementation
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Network Security Solutions
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Network Monitoring &amp; Management
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Data Center Networking Solutions
                                        </li>
                                    </ul>
                                    <Link className="primary-btn5 white-bg" href="/service/details">
                                        View Details
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <img src="/assets/img/home5/service-img2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={561} height={504} viewBox="0 0 561 504" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0 505L51 165.5L181.5 218.5L258 0L389 115L567.5 137.5" />
                                <path d="M13 505L59 191L189.5 244L266 25.5L397 140.5L563 161" />
                                <path d="M27 533L72 225L202.5 278L279 59.5L410 174.5L564.5 194.5" />
                                <path d="M40 567L85 259L215.5 312L292 93.5L423 208.5L570.5 228" />
                                <path d="M53 601L98 293L228.5 346L305 127.5L436 242.5L583.5 262" />
                                <path d="M66 635L111 327L241.5 380L318 161.5L449 276.5L596.5 296" />
                                <path d="M79 669L124 361L254.5 414L331 195.5L462 310.5L609.5 330" />
                            </g>
                        </svg>
                    </div>
                    <div className="single-service mb-40">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="service-content">
                                    <h2>Cybersecurity Services</h2>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Security Risk Assessment
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Cybersecurity Strategy &amp; Implementation
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Endpoint Security Solutions
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Compliance &amp; Regulatory Support
                                        </li>
                                    </ul>
                                    <Link className="primary-btn5 white-bg" href="/service/details">
                                        View Details
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <img src="/assets/img/home5/service-img3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={750} height={421} viewBox="0 0 750 421" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0 -10C18.5 -8.5 44.5 5.5 58 32C75.482 66.3166 76.5 192 220.5 262C360.839 330.22 673 255.5 760 421" />
                                <path d="M35 -26C53.5 -24.5 79.5 -10.5 93 16C110.482 50.3166 111.5 176 255.5 246C395.839 314.22 708 239.5 795 405" />
                                <path d="M70 -42C88.5 -40.5 114.5 -26.5 128 0C145.482 34.3166 146.5 160 290.5 230C430.839 298.22 743 223.5 830 389" />
                                <path d="M105 -58C123.5 -56.5 149.5 -42.5 163 -16C180.482 18.3166 181.5 144 325.5 214C465.839 282.22 778 207.5 865 373" />
                                <path d="M140 -74C158.5 -72.5 184.5 -58.5 198 -32C215.482 2.31659 216.5 128 360.5 198C500.839 266.22 813 191.5 900 357" />
                            </g>
                        </svg>
                    </div>
                    <div className="single-service">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="service-content">
                                    <h2>IT Project Management</h2>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            IT Project Planning &amp; Execution
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Agile &amp; Scrum Consulting
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Budgeting &amp; Cost Control
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Project Tracking &amp; Reporting
                                        </li>
                                    </ul>
                                    <Link className="primary-btn5 white-bg" href="/service/details">
                                        View Details
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <img src="/assets/img/home5/service-img4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={561} height={504} viewBox="0 0 561 504" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M167 507L1 262.5L244 268L214.5 77L361 109.5L564 21.5" />
                                <path d="M196 506L37 270.689L260.67 275.745L233.517 100.173L368.364 130.048L565 47" />
                                <path d="M216.5 505L73 296.689L296.67 301.745L269.517 126.173L404.364 156.048L566.5 89" />
                                <path d="M248.449 524L109 322.689L332.67 327.745L305.517 152.173L440.364 182.048L595 120" />
                                <path d="M284.449 550L145 348.689L368.67 353.745L341.517 178.173L476.364 208.048L631 146" />
                                <path d="M320.449 576L181 374.689L404.67 379.745L377.517 204.173L512.364 234.048L667 172" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home5ServiceSection
