"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Home7About = () => {

    useEffect(() => {
        window.addEventListener('scroll', function () {
            const appbackimg = document.querySelector('.home7-about-section .skill-area .skill-list');
            if (appbackimg) { // Check if the element exists
                const getAppBlockHeight = appbackimg.getBoundingClientRect().y;
                appbackimg.classList.toggle("active", 700 >= getAppBlockHeight);
            }
        });
    })
    return (
        <div className="home7-about-section mb-130">
            <div className="container">
                <div className="row justify-content-center wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-8 col-lg-10">
                        <div className="about-content">
                            <div className="sub-title">
                                <span>About Me</span>
                            </div>
                            <p>I'm passionate about making technology more accessible and enjoyable for people, which is why <span>I focus on human-centered design and usability.</span></p>
                        </div>
                    </div>
                </div>
                <div className="skill-area">
                    <div className="sub-title">
                        <span>My Skills</span>
                    </div>
                    <svg width={6} height={70} viewBox="0 0 6 70" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 65L0.113249 70H5.88675L3.5 65H2.5ZM2.5 4.5V65.5H3.5V4.5H2.5Z" />
                    </svg>
                    <ul className="skill-list">
                        <li className="single-skill">
                            <div className="icon">
                                <img src="/assets/img/home7/icon/figma-logo.svg" alt="" />
                            </div>
                            <div className="content">
                                <h4>100%</h4>
                                <span>Figma Design</span>
                            </div>
                        </li>
                        <li className="single-skill">
                            <div className="icon">
                                <img src="/assets/img/home7/icon/xd-logo.svg" alt="" />
                            </div>
                            <div className="content">
                                <h4>100%</h4>
                                <span>Adobe XD</span>
                            </div>
                        </li>
                        <li className="single-skill">
                            <div className="icon">
                                <img src="/assets/img/home7/icon/webflow-logo.svg" alt="" />
                            </div>
                            <div className="content">
                                <h4>95%</h4>
                                <span>Webflow</span>
                            </div>
                        </li>
                        <li className="single-skill">
                            <div className="icon">
                                <img src="/assets/img/home7/icon/zepline-logo.svg" alt="" />
                            </div>
                            <div className="content">
                                <h4>90%</h4>
                                <span>Zepline</span>
                            </div>
                        </li>
                        <li className="single-skill">
                            <div className="icon">
                                <img src="/assets/img/home7/icon/miro-logo.svg" alt="" />
                            </div>
                            <div className="content">
                                <h4>98%</h4>
                                <span>Miro</span>
                            </div>
                        </li>
                        <li className="single-skill">
                            <div className="icon">
                                <img src="/assets/img/home7/icon/framer-logo.svg" alt="" className="light" />
                                <img src="/assets/img/home7/icon/framer-logo-light.svg" alt="" className="dark" />
                            </div>
                            <div className="content">
                                <h4>70%</h4>
                                <span>Framer</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="contact-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h6>Don’t Hesitate to <span>Collaborate</span> with Us.</h6>
                    <Link href="/contact" className="primary-btn3 three four btn-hover">
                        Let’s Talk
                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home7About
