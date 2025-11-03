import Link from 'next/link'
import React from 'react'

const Home1SeatureSection = () => {
    return (
        <div className="home1-feature-section mb-80">
            <div className="container">
                <div className="feature-banner-area">
                    <div className="banner-content wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <span>Our Challenge Part</span>
                        <h2>Challenge We Tackle</h2>
                        <p>We thrive on solving complex problems and turning challenges into opportunities for growth and innovation.</p>
                    </div>
                </div>
                <div className="feature-card-area">
                    <div className="company-icon-and-arrow">
                        <div className="company-icon">
                            <svg width={39} height={32} viewBox="0 0 39 32" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.0486 7.61239V31.8748H15.1009V7.62068H7.94773V31.8748H0V7.17171H7.5924V0.00829411H15.1847V7.17172H22.6875V0H30.2798V7.17184H38.1493V31.875H30.2015V7.61239H23.0486Z" />
                                </g>
                            </svg>
                        </div>
                        <div className="arrow">
                            <svg height={64} viewBox="0 0 1014 64" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 64L5.88675 59H0.113249L3 64ZM1011 64L1013.89 59H1008.11L1011 64ZM135.999 14.0001V14.5001V14.0001ZM881.999 14.0001V14.5001V14.0001ZM891.999 14V14.5L892.003 14.5L891.999 14ZM2.5 44.0001V59.5H3.5V44.0001H2.5ZM159.999 13.5001H33V14.5001H159.999V13.5001ZM1010.5 43.2532V59.5H1011.5V43.2532H1010.5ZM493.989 13.5001H135.999V14.5001H493.989V13.5001ZM135.999 14.5001H159.999V13.5001H135.999V14.5001ZM135.999 13.5001L125.999 13.5L125.999 14.5L135.999 14.5001V13.5001ZM521.009 14.5001H881.999V13.5001H521.009V14.5001ZM881.999 14.5001L891.999 14.5V13.5L881.999 13.5001V14.5001ZM892.003 14.5L980.752 13.7542L980.744 12.7542L891.995 13.5L892.003 14.5ZM506.999 1.01922C507.289 8.54687 513.476 14.5001 521.009 14.5001V13.5001C514.013 13.5001 508.268 7.9715 507.999 0.980784L506.999 1.01922ZM3.5 44.0001C3.5 27.7077 16.7076 14.5001 33 14.5001V13.5001C16.1553 13.5001 2.5 27.1554 2.5 44.0001H3.5ZM1011.5 43.2532C1011.5 26.3083 997.688 12.6118 980.744 12.7542L980.752 13.7542C997.141 13.6165 1010.5 26.8639 1010.5 43.2532H1011.5ZM506.999 0.980784C506.731 7.9715 500.985 13.5001 493.989 13.5001V14.5001C501.523 14.5001 507.709 8.54687 507.999 1.01922L506.999 0.980784Z" />
                                <path d="M339 64L341.887 59H336.113L339 64ZM465.175 14.0001L465.175 14.5001H465.175V14.0001ZM338.5 44.0001V59.5H339.5V44.0001H338.5ZM482.283 13.5001H369V14.5001H482.283V13.5001ZM492.914 13.5L465.175 13.5001V14.5001L492.914 14.5L492.914 13.5ZM465.175 14.5001H482.283V13.5001H465.175V14.5001ZM465.175 13.5001L458.046 13.5L458.046 14.5L465.175 14.5001L465.175 13.5001ZM339.5 44.0001C339.5 27.7077 352.708 14.5001 369 14.5001V13.5001C352.155 13.5001 338.5 27.1554 338.5 44.0001H339.5ZM507.003 0.942688C506.178 8.09931 500.118 13.5 492.914 13.5L492.914 14.5C500.626 14.5 507.113 8.71852 507.997 1.05731L507.003 0.942688Z" />
                                <path d="M675 64L672.113 59H677.887L675 64ZM549.325 14.0001L549.325 14.5001H549.325V14.0001ZM675.5 44.0001V59.5H674.5V44.0001H675.5ZM532.216 13.5001H645V14.5001H532.216V13.5001ZM521.01 13.5001H549.325V14.5001H521.01V13.5001ZM549.325 14.5001H532.216V13.5001H549.325V14.5001ZM549.325 13.5001L556.453 13.5L556.453 14.5L549.325 14.5001L549.325 13.5001ZM674.5 44.0001C674.5 27.7077 661.292 14.5001 645 14.5001V13.5001C661.845 13.5001 675.5 27.1554 675.5 44.0001H674.5ZM508 0.980784C508.269 7.9715 514.014 13.5001 521.01 13.5001V14.5001C513.476 14.5001 507.29 8.54687 507 1.01922L508 0.980784Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="row g-4 mb-50">
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="feature-card">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/feature-icon1.svg" alt="" />
                                </div>
                                <h3>Quality <br />Assurance</h3>
                                <p>We understand that delivering high-quality software is crucial to your business success.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="feature-card two">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/feature-icon2.svg" alt="" />
                                </div>
                                <h3>Value <br />Assurance</h3>
                                <p>Our value proposition is rooted in a commitment to excellence, a passion for innovation.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="feature-card">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/feature-icon3.svg" alt="" />
                                </div>
                                <h3>Security &amp; <br />Compliance</h3>
                                <p>We understand that in today’s digital landscape, security and compliance are paramount.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="feature-card three">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/feature-icon4.svg" alt="" />
                                </div>
                                <h3>Scalability &amp; <br />Growth</h3>
                                <p>We understand that your business needs to evolve to stay competitive.</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-btn-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h6>Don’t Hesitate to <span>Collaborate</span> with Us.</h6>
                        <Link href="/contact" className="primary-btn1">
                            <span>Contact Us
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span>Contact Us
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1SeatureSection
