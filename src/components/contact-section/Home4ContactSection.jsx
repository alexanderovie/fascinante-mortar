"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Home4ContactSection = () => {
    const contactSectionRef = useRef(null);

    useEffect(() => {
        const contactSection = contactSectionRef.current;

        if (!contactSection) return;

        const observerOptions = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contactSection.classList.add('active');
                } else {
                    // contactSection.classList.remove('active'); // Uncomment if needed
                }
            });
        }, observerOptions);

        observer.observe(contactSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="home4-contact-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="contact-wrapper">
                                <div className="contact-content">
                                    <div className="section-title2">
                                        <h2><strong>Let’s Start</strong> A Project?</h2>
                                        <p>Get <strong>30 Minutes</strong> free call with our marketing expert about your topics or Projects.</p>
                                    </div>
                                    <div className="home4-contact-btn-area" ref={contactSectionRef}>
                                        <Link href="/contact" className="primary-btn4">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Free Stretagy Session</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <ul className="img-list">
                                            <li>
                                                <video className="video1" autoPlay loop muted playsInline src="assets/video/home4-contact-video1.mp4" />
                                            </li>
                                            <li><img src="/assets/img/home4/home4-contact-img2.png" alt="" /></li>
                                            <li>
                                                <video className="video2" autoPlay loop muted playsInline src="assets/video/home4-contact-video2.mp4" />
                                            </li>
                                            <li>
                                                <video className="video2" autoPlay loop muted playsInline src="assets/video/home4-contact-video3.mp4" />
                                            </li>
                                            <li><img src="/assets/img/home4/home4-contact-img5.png" alt="" /></li>
                                            <li><img src="/assets/img/home4/home4-contact-img6.png" alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home4ContactSection
