import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import React from 'react'

const SocialResponsibilityPage = () => {
    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Social Responsibility</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Social Responsibilty
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Social Responsibility Section Start */}
            <div className="social-responsibility-section mb-130">
                <div className="container">
                    <div className="title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <svg className="divider" width={1320} height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                        </svg>
                        <h2>Sustainable Digital Practices.</h2>
                        <svg className="divider" width={1320} height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                        </svg>
                    </div>
                    <div className="content-and-img-wrap">
                        <div className="row gy-md-5 gy-4">
                            <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="content-area">
                                    <p>We are committed to reducing our environmental footprint by adopting sustainable digital practices. From energy-efficient servers to reducing unnecessary data storage, <span>we ensure that our work contributes to a greener digital ecosystem.</span></p>
                                    <p>We aim to create eco-friendly websites that minimize energy consumption while still delivering top performance.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <img src="/assets/img/innerpages/social-responsibility-img1.jpg" alt="" />
                                    </div>
                                    <div className="col-sm-6">
                                        <img src="/assets/img/innerpages/social-responsibility-img2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Social Responsibility Section End */}
            {/* Social Responsibility Contact Section Start */}
            <div className="social-responsibility-contact-section mb-130">
                <div className="container">
                    <div className="social-responsibility-contact-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6 col-md-8">
                                <div className="contact-content wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h2>Join Our Community</h2>
                                    <p>Connect with a network of skilled professionals passionate about digital innovation.</p>
                                    <ul className="social-list">
                                        <li>
                                            <a href="https://www.linkedin.com/" className="social-area">
                                                <div className="icon">
                                                    <i className="bx bxl-linkedin" />
                                                </div>
                                                <div className="content">
                                                    <span>LinkedIn</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" className="social-area">
                                                <div className="icon">
                                                    <i className="bx bxl-facebook" />
                                                </div>
                                                <div className="content">
                                                    <span>Facebook</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="image-grp">
                            <svg width={170} height={256} viewBox="0 0 170 256" xmlns="http://www.w3.org/2000/svg">
                                <path d="M169 255C103 157 -3.70869 193 1.00035 135.5C4.76757 89.5 40.5 0.5 138.5 0.5" strokeDasharray="2 2" />
                            </svg>
                            <img src="/assets/img/innerpages/social-responsibility-contact-img1.png" alt="" className="img1" />
                            <img src="/assets/img/innerpages/social-responsibility-contact-img2.png" alt="" className="img2" />
                            <img src="/assets/img/innerpages/social-responsibility-contact-img3.png" alt="" className="img3" />
                        </div>
                        <div className="image-grp two">
                            <svg width={168} height={260} viewBox="0 0 168 260" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35 258.5C127.5 260.5 167.5 209 167.5 130.5C167.5 82 39.5 98.5 0.5 0.5" strokeDasharray="2 2" />
                            </svg>
                            <img src="/assets/img/innerpages/social-responsibility-contact-img4.png" alt="" className="img1" />
                            <img src="/assets/img/innerpages/social-responsibility-contact-img5.png" alt="" className="img2" />
                            <img src="/assets/img/innerpages/social-responsibility-contact-img6.png" alt="" className="img3" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Social Responsibility Contact Section End */}
            {/* Social Responsibility Section Start */}
            <div className="social-responsibility-section mb-130">
                <div className="container">
                    <div className="title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <svg className="divider" width={1320} height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                        </svg>
                        <h2>Supporting Local Communities.</h2>
                        <svg className="divider" width={1320} height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                        </svg>
                    </div>
                    <div className="content-and-img-wrap">
                        <div className="row gy-md-5 gy-4">
                            <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="content-area">
                                    <p>We believe that strong communities build strong businesses. That’s why we are dedicated to using our digital expertise to support <span>local organizations, small businesses, and non-profits.</span>We understand that digital tools and strategies can help these groups thrive, and we’re committed to empowering them with the resources they need to succeed.</p>
                                    <p>We aslo believe that when local businesses and organizations thrive, the entire community benefits. By supporting local efforts, we not only contribute to economic growth but also help foster a more connected, vibrant community.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <img src="/assets/img/innerpages/social-responsibility-img3.jpg" alt="" />
                                    </div>
                                    <div className="col-sm-6">
                                        <img src="/assets/img/innerpages/social-responsibility-img4.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Social Responsibility Section End */}
            <Home3Footer />
        </>
    )
}

export default SocialResponsibilityPage
