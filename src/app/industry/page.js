import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <Header3 />

            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Industries</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Industries
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Industries Page Start */}
            <div className="industries-page-banner mb-130">
                <div className="container">
                    <div className="banner-content-wrap">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-xl-4 col-lg-5">
                                <div className="banner-title">
                                    <h2>We’re Stand to Prove on the Digital Platform.</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-content">
                                    <p><span>We believe in transparency and clear communication.</span> Below, you’ll find answers to some of the most common questions we get from clients.</p>
                                    <p>If you have a question that isn’t covered here, feel free to reach out to us directly at <a href="mailto:info@example.com">[info@example.com].</a></p>
                                    <Link href="/contact" className="primary-btn3 two three btn-hover">
                                        Meet the Expert
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={1008} height={210} viewBox="0 0 1008 210" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-1 192C84 178.833 282.2 122.2 391 1C471.5 85 704.4 221.8 1008 221" />
                            <path d="M0 242C85 228.833 282.2 172.2 391 51C471.5 135 704.4 270.8 1008 270" />
                            <path d="M0 292C85 278.833 282.2 222.2 391 101C471.5 185 704.4 320.8 1008 320" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Industries Page End */}
            {/* home1 Industries Section Start */}
            <div className="home1-industries-section style-3 mb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="home1-industries-top mb-50">
                                <div className="row justify-content-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="col-xxl-6 col-xl-8 col-lg-7">
                                        <div className="section-title three text-center">
                                            <h2>To Drive <br /> Significant Impact.</h2>
                                        </div>
                                    </div>
                                </div>
                                <ul className="industries-list wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Finance &amp; Fintech <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img2.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img1.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Healthcare &amp; Life <sup>(03)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img4.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img3.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Retail &amp; E-commerce <sup>(05)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img6.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img5.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Construction and Manufacturing <sup>(02)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img10.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img9.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Real Estate <sup>(08)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img10.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img9.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Government &amp; Public Sector <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img16.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img15.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Education &amp; EdTech <sup>(08)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img8.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img7.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Automotive <sup>(02)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img14.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img13.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Travel &amp; Hospitality <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img12.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img11.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Fashion and Apparel <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img20.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img19.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/details">
                                            <span>Telecommunications <sup>(04)</sup></span>
                                            <div className="hover-img">
                                                <img src="/assets/img/home1/industries-hover-img18.png" alt="" className="img1" />
                                                <img src="/assets/img/home1/industries-hover-img17.png" alt="" className="img2" />
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Home3Footer />
        </>
    )
}

export default page
