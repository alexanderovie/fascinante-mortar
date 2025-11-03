"use client"
import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
const Home1Banner2 = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="home1-banner2-section" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(assets/img/home1/home1-banner2-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="banner-content">
                                <div className="video-area">
                                    <h2>Build Your</h2>
                                    <a data-fancybox="video-player" style={{ cursor: "pointer" }}
                                        onClick={() => setOpen(true)} className="play-btn">
                                        <div className="icon">
                                            <svg className="video-circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="77px" viewBox="0 0 206 206" style={{ enableBackground: 'new 0 0 206 206' }} xmlSpace="preserve">
                                                <circle className="circle" strokeMiterlimit={10} cx={103} cy={103} r={100} />
                                                <path className="circle-half top-half" strokeWidth={4} strokeMiterlimit={10} d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6" />
                                                <path className="circle-half bottom-half" strokeWidth={4} strokeMiterlimit={10} d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53" />
                                            </svg>
                                            <svg className="play-icon" width={23} height={28} viewBox="0 0 23 28" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.8424 14.2559C22.8424 13.4843 22.4449 12.7737 21.7784 12.3539L3.78608 1.03446C3.05833 0.577358 2.17083 0.543963 1.40902 0.947257C0.649591 1.35033 0.195312 2.09429 0.195312 2.93663V25.5738C0.195312 26.4162 0.649555 27.1599 1.41018 27.5632C1.76475 27.7501 2.14507 27.8431 2.52543 27.8431C2.96275 27.8431 3.39718 27.7197 3.78584 27.476L21.7782 16.1583C22.4449 15.7383 22.8424 15.0277 22.8424 14.2561V14.2559ZM21.1289 15.177L3.13659 26.4947C2.78345 26.7165 2.35329 26.7315 1.98441 26.5376C1.61553 26.3424 1.39473 25.9822 1.39473 25.5736V2.93642C1.39473 2.52778 1.61553 2.16621 1.98441 1.97237C2.15681 1.88239 2.34185 1.83669 2.52569 1.83669C2.73791 1.83669 2.9487 1.8963 3.13685 2.0155L21.1292 13.335C21.4568 13.5414 21.6447 13.8781 21.6447 14.2575C21.6444 14.6356 21.4565 14.9707 21.1289 15.177Z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <h2>Own Building.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-section mb-130">
                <div className="container-fluid">
                    <div className="logo-wrap">
                        <div className="logo-title">
                            <h6>A partner, Not A Vendor:</h6>
                        </div>
                        <div className="marquee">
                            <div className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <React.Fragment>
                    <ModalVideo
                        channel="youtube"
                        onClick={() => setOpen(true)}
                        isOpen={isOpen}
                        animationSpeed="350"
                        videoId="r4KpWiK08vM"
                        ratio="16:9"
                        onClose={() => setOpen(false)}
                    />
                </React.Fragment>
            </div>


        </>
    )
}

export default Home1Banner2