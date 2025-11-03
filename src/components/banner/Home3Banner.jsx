'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Link from 'next/link'
import Counter from '../common/Counter';


const Home3Banner = () => {
    const videoAreaRef = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {
            gsap.to(videoAreaRef.current, {
                y: 420,
                width: "97vw",
                height: "80vh",
                right: "auto",
                x: 120,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: videoAreaRef.current.parentElement,
                    start: "top 25%",
                    end: "bottom top",
                    scrub: 3,
                },
            });
        });

        mm.add("(max-width: 1700px)", () => {
            gsap.to(videoAreaRef.current, {
                x: 70,
                scrollTrigger: {
                    trigger: videoAreaRef.current.parentElement,
                    start: "top 25%",
                    end: "bottom top",
                    scrub: 3,
                },
            });
        });

        mm.add("(max-width: 1600px)", () => {
            gsap.to(videoAreaRef.current, {
                y: 500,
                x: 25,
                width: "95vw",
                scrollTrigger: {
                    trigger: videoAreaRef.current.parentElement,
                    start: "top 25%",
                    end: "bottom top",
                    scrub: 3,
                },
            });
        });

        mm.add("(max-width: 1470px)", () => {
            gsap.to(videoAreaRef.current, {
                y: 500,
                x: 20,
                width: "95vw",
                scrollTrigger: {
                    trigger: videoAreaRef.current.parentElement,
                    start: "top 25%",
                    end: "bottom top",
                    scrub: 3,
                },
            });
        });

        mm.add("(max-width: 1199px)", () => {
            gsap.to(videoAreaRef.current, {
                y: 500,
                x: 12,
                width: "95vw",
                height: "70vh",
                scrollTrigger: {
                    trigger: videoAreaRef.current.parentElement,
                    start: "top 25%",
                    end: "bottom top",
                    scrub: 3,
                },
            });
        });

        return () => mm.revert(); // Clean up on unmount
    }, []);
    return (
        <>
            <div className="home3-banner-section">
                <div className="container-fluid">
                    <div className="row gy-5 flex-row-reverse align-items-center justify-content-between">
                        <div className="col-lg-6 d-lg-block d-none">
                            <div className="home3-video-wrapper">
                                <div className="video-area" ref={videoAreaRef}>
                                    <video autoPlay loop muted playsInline src="/assets/video/home4-contact-video2.mp4" />
                                    <img src="/assets/img/home3/banner-video-shape.png" alt="" className="banner-vector" />
                                    <div className="content">
                                        <h6>Mortar . Digital Agency</h6>
                                        <span>(2011-2024)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content-wrap">
                                <div className="banner-content">
                                    <span>#1 Digital Agency, UK</span>
                                    <h1>Pioneering  <span>Pro</span> Digital Excellence.</h1>
                                    <p>We provides services related to online <span>Marketing, Development, Design,</span> and other digital solutions for clients.</p>
                                    <div className="btn-and-counter-area">
                                        <Link href="/contact" className="primary-btn3 two btn-hover">
                                            Start The Journey
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="counter-area">
                                            <div className="icon">
                                                <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.351903 27.6225C0.143442 27.9805 0.264614 28.4396 0.622548 28.6481C0.980482 28.8566 1.43964 28.7354 1.6481 28.3775L0.351903 27.6225ZM29 3L21.7485 7.73454L29.4745 11.6472L29 3ZM20.0155 20.7406L19.3465 20.4017L20.0155 20.7406ZM1.6481 28.3775L7.7352 17.9257L6.439 17.1708L0.351903 27.6225L1.6481 28.3775ZM11.4985 17.7338L14.3075 21.5923L15.5202 20.7094L12.7112 16.851L11.4985 17.7338ZM20.6846 21.0794L26.6194 9.36065L25.2813 8.68295L19.3465 20.4017L20.6846 21.0794ZM14.3075 21.5923C15.957 23.8581 19.4184 23.5797 20.6846 21.0794L19.3465 20.4017C18.5867 21.9019 16.5099 22.0689 15.5202 20.7094L14.3075 21.5923ZM7.7352 17.9257C8.55264 16.5221 10.5425 16.4206 11.4985 17.7338L12.7112 16.851C11.1179 14.6624 7.80141 14.8315 6.439 17.1708L7.7352 17.9257Z" />
                                                        <circle cx={22} cy={17} r={3} />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <div className="number">
                                                    <Counter
                                                        start={0}
                                                        end={5}
                                                        speed={100}
                                                        forwardedRef={ref3}
                                                        as="h3"
                                                        className="counter"
                                                    />
                                                    <span>X+</span>
                                                </div>
                                                <p>Success Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-vector">
                                    <svg width={697} height={477} viewBox="0 0 697 477" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={687} cy={10} r={10} fillOpacity="0.933333" />
                                        <path d="M677 10H21C9.95429 10 1 18.9543 1 30V477" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1535_150995" x1={336} y1="9.99999" x2="478.478" y2="449.744" gradientUnits="userSpaceOnUse">
                                                <stop className="gradient-start" offset={0} />
                                                <stop className="gradient-end" offset={1} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span>Unique Depth, <br />Bold Impact.</span>
                                </div>
                                <ul className="social-list">
                                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                    <li><a href="https://www.youtube.com/"><i className="bx bxl-youtube" /></a></li>
                                    <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="vector" width={50} height={48} viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 48C38.8071 48 50 36.8071 50 23H0C0 36.8071 11.1929 48 25 48Z" />
                    <path d="M26 0C35.9411 0 44 8.05888 44 18H26V0Z" />
                </svg>
            </div>

        </>
    )
}

export default Home3Banner
