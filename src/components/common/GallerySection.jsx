"use client"
import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
const GallerySection = () => {
    const [isOpenimg, setOpenimg] = useState({
        openingState: false,
        openingIndex: 0,
    });
    return (
        <div className="team-page-gallery-section mb-130">
            <div className="container">
                <div className="row g-2">
                    <div className="col-lg-3 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title three white">
                            <h2>Candid Frame</h2>
                            <p>“ We believe in bespoke strategies, designed specifically for your business needs.”</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 d-flex align-items-md-end">
                        <div className="row g-2">
                            <div className="col-md-12 col-sm-6 d-flex justify-content-md-end">
                                <a style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 0 })} data-fancybox="gallery-01" >
                                    <img src="/assets/img/innerpages/team-page-gallery-img1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-md-12 col-sm-6 d-flex justify-content-md-end">
                                <a style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 1 })} data-fancybox="gallery-01">
                                    <img src="/assets/img/innerpages/team-page-gallery-img2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-md-12 col-sm-6 d-flex align-items-center justify-content-md-end gap-5">
                                <svg width={80} height={60} viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M80 0.90918V59.091H0L80 0.90918Z" />
                                    <path d="M54.5454 8.18164L9.09082 40.9089V8.18164H54.5454Z" />
                                </svg>
                                <a style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 2 })} data-fancybox="gallery-01" >
                                    <img src="/assets/img/innerpages/team-page-gallery-img3.jpg" alt="" />
                                </a>
                            </div>
                            {/* <div className="col-md-12 col-sm-6 d-md-none d-block">
                                <a style={{cursor:"pointer"}} onClick={() => setOpenimg({ openingState: true, openingIndex: 3 })}  data-fancybox="gallery-01">
                                    <img src="/assets/img/innerpages/team-page-gallery-img5.jpg" alt="" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="row g-2">
                            <div className="col-md-12 col-sm-6 d-flex align-items-md-end gap-2">
                                <a style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 3 })} data-fancybox="gallery-01">
                                    <img src="/assets/img/innerpages/team-page-gallery-img4.jpg" alt="" />
                                </a>
                                <a style={{ cursor: "pointer" }} onClick={() => setOpenimg({ openingState: true, openingIndex: 4 })} className="d-md-block d-none" data-fancybox="gallery-01">
                                    <img src="/assets/img/innerpages/team-page-gallery-img5.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-md-12 col-sm-6">
                                <a data-fancybox="gallery-01" onClick={() => setOpenimg({ openingState: true, openingIndex: 5 })} >
                                    <img src="/assets/img/innerpages/team-page-gallery-img6.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-lg-12">
                                <div className="content">
                                    <h6>“ Candid or fun time has increased work flow to indivudual or Team-up, So let’s cheer up every moment ”</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/img/innerpages/team-page-gallery-section-bg.png" alt="" className="shape" />
            <Lightbox
                className="img-fluid"
                open={isOpenimg.openingState}
                plugins={[Fullscreen]}
                index={isOpenimg.openingIndex}
                close={() => setOpenimg(false)}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                slides={[
                    { src: "/assets/img/innerpages/team-page-gallery-img1-big.jpg" },
                    { src: "/assets/img/innerpages/team-page-gallery-img2-big.jpg" },
                    { src: "/assets/img/innerpages/team-page-gallery-img3-big.jpg" },
                    { src: "/assets/img/innerpages/team-page-gallery-img4-big.jpg" },
                    { src: "/assets/img/innerpages/team-page-gallery-img5-big.jpg" },
                    { src: "/assets/img/innerpages/team-page-gallery-img6-big.jpg" },

                ]}
            />
        </div>
    )
}

export default GallerySection
