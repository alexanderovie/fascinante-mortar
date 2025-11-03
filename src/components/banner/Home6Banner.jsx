'use client';
import React, { useEffect } from 'react'

const Home6Banner = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 767) return;

            const scroll = window.scrollY;

            // Banner transformation
            const banner = document.querySelector(".home6-banner-section .banner-wrapper");
            if (banner) {
                const translateYBanner = Math.min(scroll / 2, 500);
                const scale = Math.max((100 - scroll / 5) / 100, 0);
                const opacity = Math.max(1 - scroll / 500, 0);

                banner.style.transform = `translate3d(0%, ${translateYBanner}px, 0) scale(${scale})`;
                banner.style.opacity = opacity.toString();
            }

            // Dashboard transformation
            const dashboard = document.querySelector(".dashboard-img-section .dashboard-img-wrap .dashboard-img");
            if (dashboard) {
                const translateYDashboard = Math.min(scroll / 2, 300);
                const rotateXValue = Math.max(30 - scroll / 10, 0);

                dashboard.style.transform = `translate3d(0, -${translateYDashboard}px, 0) rotateX(${rotateXValue}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className="home6-banner-section">
                <div className="container">
                    <div className="banner-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="banner-content">
                                    <div className="sub-title">
                                        <span>#1 Ranking Software</span>
                                    </div>
                                    <h1>The Ultimate Work Hub Platform.</h1>
                                    <p>Streamline customer service interactions across various channels <strong>email, chat, phone, social media,</strong> etc.</p>
                                    <form className="email-area">
                                        <div className="form-inner">
                                            <input type="email" placeholder="Enter Your Email" />
                                            <button className="primary-btn3 two btn-hover" type="submit">
                                                Start A Free Trial
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </button>
                                        </div>
                                    </form>
                                    <ul>
                                        <li>
                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.95746 8.18786L5.29446 10.1242C6.12424 8.92552 9.81254 3.0703 11.9333 0.350098C9.73694 4.49886 7.82762 8.82696 6.11038 13.1762C5.86398 13.8 4.98534 13.8107 4.72662 13.1919C3.9086 11.2361 3.02912 9.29246 2.06718 7.404C2.75878 7.26568 3.4963 7.49626 3.95732 8.18786H3.95746Z" />
                                            </svg>
                                            14 days free trial.
                                        </li>
                                        <li>
                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.95746 8.18786L5.29446 10.1242C6.12424 8.92552 9.81254 3.0703 11.9333 0.350098C9.73694 4.49886 7.82762 8.82696 6.11038 13.1762C5.86398 13.8 4.98534 13.8107 4.72662 13.1919C3.9086 11.2361 3.02912 9.29246 2.06718 7.404C2.75878 7.26568 3.4963 7.49626 3.95732 8.18786H3.95746Z" />
                                            </svg>
                                            Cancle any time.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="vector">
                            <svg width={1178} height={550} viewBox="0 0 1178 550" xmlns="http://www.w3.org/2000/svg">
                                <path id="theMo1tionPath11" d="M589 549L368.011 266.362C360.43 256.666 348.808 251 336.5 251H101" />
                                <path id="theMo1tionPath12" d="M589 549L379.221 147.477C372.324 134.276 358.663 126 343.768 126H0" />
                                <path id="theMo1tionPath13" d="M589 549L429.668 29.2758C424.517 12.4723 409.001 1 391.425 1H102" />
                                <path id="theMo1tionPath14" d="M589 549L809.989 266.362C817.57 256.666 829.192 251 841.5 251H1077" />
                                <path id="theMo1tionPath15" d="M589 549L798.779 147.477C805.676 134.276 819.337 126 834.232 126H1178" />
                                <path id="theMo1tionPath16" d="M589 549L748.332 29.2758C753.483 12.4723 768.999 1 786.575 1H1077" />
                                <circle r={3}>
                                    <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                                        <mpath href="#theMo1tionPath11" />
                                    </animateMotion>
                                </circle>
                                <circle r={3}>
                                    <animateMotion dur="4s" begin="0.5s" fill="freeze" repeatCount="indefinite" rotate="auto">
                                        <mpath href="#theMo1tionPath12" />
                                    </animateMotion>
                                </circle>
                                <circle r={3}>
                                    <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                                        <mpath href="#theMo1tionPath14" />
                                    </animateMotion>
                                </circle>
                                <circle r={3}>
                                    <animateMotion dur="4s" begin="0.5s" fill="freeze" repeatCount="indefinite" rotate="auto">
                                        <mpath href="#theMo1tionPath15" />
                                    </animateMotion>
                                </circle>
                            </svg>
                            <ul>
                                <li><img src="/assets/img/home6/icon/home6-icon1.png" alt="" /></li>
                                <li><img src="/assets/img/home6/icon/home6-icon2.png" alt="" /></li>
                                <li><img src="/assets/img/home6/icon/home6-icon3.png" alt="" /></li>
                                <li><img src="/assets/img/home6/icon/home6-icon4.png" alt="" /></li>
                                <li><img src="/assets/img/home6/icon/home6-icon5.png" alt="" /></li>
                                <li><img src="/assets/img/home6/icon/home6-icon6.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-img-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12">
                            <div className="dashboard-img-wrap">
                                <div className="dashboard-img">
                                    <img src="/assets/img/home6/dashboard.png" alt="" className="light" />
                                    <img src="/assets/img/home6/dashboard-dark.png" alt="" className="dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home6Banner
